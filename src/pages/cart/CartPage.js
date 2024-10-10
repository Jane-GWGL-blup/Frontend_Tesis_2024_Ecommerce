import React,{useEffect,useState} from "react";
import { useCart } from '../../contexts/CartContext'
import { getUserCart,updateCartItemQuantity,removeItemFromCart,clearCart } from "../../services/CartService";
import { Table,Button } from "react-bootstrap";

const CartPage = () => {
  const {cart,setCart} = useCart();
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const fetchChart = async () => {
      try {
        const cartData = await getUserCart();
        setCart(cartData)
      } catch (error) {
        console.error('Error fetching cart:',error)
      } finally {
        setLoading(false)
      }
    }
    fetchChart();
  },[setCart])

  const handleQuantityChange = async (itemId,quantity) => {
    try {
      await updateCartItemQuantity(itemId,quantity);
      const updatedCart =cart.items.map(item =>  
        item.id === itemId ? {...item, quantity} : item
      )
      setCart({ ...cart, item : updatedCart})
    } catch (error) {
      console.error('Error updating item quantity:', error)
    }
  }

  const handleRemoveItem = async (itemId) => {
    try {
      await removeItemFromCart(itemId);
      const updateCart = cart.items.filter(item => item.id !== itemId)
      setCart({ ...cart,items: updateCart})
    } catch (error) {
      console.error('Error removing item fron cart:', error)
    }
  }
  const handleClearCart = async () => {
    try {
      await clearCart()
      setCart({...cart,items: []})
    } catch (error) {
      console.error('Error clearing cart:', error)
    }
  }

  if (loading) {
    return <p>Loading cart ...</p>
  }

  return (
    <div>
      <h2>Your Cart</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.items.length > 0 ? (
            cart.items.map(item => (
              <tr key={item.id}>
                <td>{item.product.name}</td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  />
                </td>
                <td>
                  <Button onClick={() => handleRemoveItem(item.id)}>Remove</Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No items in cart</td>
            </tr>
          )}
        </tbody>
      </Table>
      {cart.items.length > 0 && (
        <Button variant="danger" onClick={handleClearCart}>Clear Cart</Button>
      )}
    </div>
  );
};

export default CartPage;