import React, { useEffect, useState } from "react";
import { useCart } from '../../contexts/CartContext'
import { getUserCart, updateCartItemQuantity, removeItemFromCart, clearCart } from "../../services/CartService";
import { Button } from "react-bootstrap";
import { CartTable } from "../../components";


const CartPage = () => {
  const { cart, setCart } = useCart();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchChart = async () => {
      try {
        const cartData = await getUserCart();
        setCart(cartData)
      } catch (error) {
        console.error('Error fetching cart:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchChart();
  }, [setCart])

  const handleQuantityChange = async (itemId, newQuantity) => {
    // Si la nueva cantidad es menor que 1, no hacemos nada.
    if (newQuantity < 1) return;

    try {
      const response = await updateCartItemQuantity(itemId, newQuantity);
      console.log('API Response:', response);
      console.log(itemId)
      // Verificamos si el conteo es mayor que 0 para asegurar que la actualización fue exitosa
      if (response.count > 0) {
        setCart(prevCart => ({
          ...prevCart,
          items: prevCart.items.map(item =>
            item.product.id === itemId ? { ...item, quantity: newQuantity } : item
          )
        }));
      }
    }
    catch (error) {
      console.error('Error updating item quantity:', error);
    }
  };

  const handleRemoveItem = async (itemId) => {
    console.log("Removing item with ID:", itemId); 
    try {
      await removeItemFromCart(itemId);
      const updateCart = cart.items.filter(item => item.product.id !== itemId)
      setCart({ ...cart, items: updateCart })
    } catch (error) {
      console.error('Error removing item fron cart:', error)
    }
  }
  const handleClearCart = async () => {
    try {
      await clearCart()
      setCart({ ...cart, items: [] })
    } catch (error) {
      console.error('Error clearing cart:', error)
    }
  }

  if (loading) {
    return <p>Loading cart ...</p>
  }

  return (
    <div className="container ">
      <div className="row">
        <div className="col-sm-8">
          <h2 className="text-center ">Your Cart</h2>
          <CartTable
            items={cart.items}
            handleQuantityChange={handleQuantityChange}
            handleRemoveItem={handleRemoveItem}
          />
          {cart.items.length > 0 && (
            <Button variant="danger" onClick={handleClearCart}>Clear Cart</Button>
          )}
        </div>
        <div className="col-sm-4">
          <h3 className="text-center">Summary</h3>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

