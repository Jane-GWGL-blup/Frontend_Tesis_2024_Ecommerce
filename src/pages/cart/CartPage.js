import React, { useEffect } from 'react';
import CartSummary from '../../components/cart/CartSummary';
import CartViewModel from '../../viewmodels/CartViewModel';
import CartService from '../../services/CartService';

const CartPage = () => {
  const { cartItems, total, addItemToCart, removeItemFromCart, updateItemQuantity } = CartViewModel();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const items = await CartService.getCartItems();
        items.forEach(item => addItemToCart(item));
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };
    fetchCartItems();
  }, []);

  return (
    <div className="cart-page">
      <CartSummary 
        cartItems={cartItems} 
        total={total} 
        onRemove={removeItemFromCart} 
        onUpdateQuantity={updateItemQuantity} 
      />
    </div>
  );
};

export default CartPage;
