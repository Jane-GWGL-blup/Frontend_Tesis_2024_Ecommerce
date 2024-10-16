import React, { useEffect, useState } from "react";
import { useCart } from '../../contexts/CartContext'
import { getUserCart, updateCartItemQuantity, removeItemFromCart, clearCart } from "../../services/CartService";
import { Button,Card,Form } from "react-bootstrap";
import { CartTable } from "../../components";
import { applyDiscountCode } from "../../services/DiscountService"; // Importar la función para aplicar el descuento
import "../../styles/components/cart.css"


const CartPage = () => {
  const { cart, setCart } = useCart();
  const [loading, setLoading] = useState(true);
  const [discountCode, setDiscountCode] = useState('')
  const [discount,setDiscount] = useState(null)
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const cartData = await getUserCart();
        setCart(cartData);
      } catch (error) {
        console.error('Error fetching cart:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, [setCart]);

  const handleQuantityChange = async (itemId, newQuantity) => {
    if (newQuantity < 1) return;

    try {
      const response = await updateCartItemQuantity(itemId, newQuantity);
      if (response.count > 0) {
        setCart(prevCart => ({
          ...prevCart,
          items: prevCart.items.map(item =>
            item.product.id === itemId ? { ...item, quantity: newQuantity } : item
          )
        }));
      }
    } catch (error) {
      console.error('Error updating item quantity:', error);
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      await removeItemFromCart(itemId);
      const updateCart = cart.items.filter(item => item.product.id !== itemId);
      setCart({ ...cart, items: updateCart });
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const handleClearCart = async () => {
    try {
      await clearCart();
      setCart({ ...cart, items: [] });
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  const calculateTotal = () => {
    return cart.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0).toFixed(2);
  };

  const handleApplyDiscount = async () =>{
    try {
      const appliedDiscount = await applyDiscountCode(discountCode); // Llamar al servicio para aplicar el descuento
      setDiscount(appliedDiscount); // Guardar el descuento en el estado
      alert(`Discount applied: ${appliedDiscount.percentage}% off`);
    } catch (error) {
      console.error('Error applying discount:', error);
      alert('Invalid discount code');
    }
  }

  if (loading) {
    return <p>Loading cart...</p>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h2 className="text-center mb-4">Your Cart</h2>
          <CartTable
            items={cart.items}
            handleQuantityChange={handleQuantityChange}
            handleRemoveItem={handleRemoveItem}
          />
          {cart.items.length > 0 && (
            <Button variant="danger" onClick={handleClearCart} className="mt-3">Clear Cart</Button>
          )}
        </div>
        <div className="col-md-4">
          <Card className="p-3">
            <h3 className="text-center">Summary</h3>
            <p>Total Items: {cart.items.length}</p>
            <p>Total Price: ${calculateTotal()}</p>
            <Form>
              <Form.Group controlId="discountCode">
                <Form.Label>Discount Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter discount code"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" onClick={handleApplyDiscount} className="mt-2">
                Apply Discount
              </Button>
            </Form>
            <Button variant="success" className="w-100 mt-3">Proceed to Checkout</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

