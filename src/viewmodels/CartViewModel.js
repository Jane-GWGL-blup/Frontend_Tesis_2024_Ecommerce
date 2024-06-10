// src/viewmodels/CartViewModel.js
/* import { useState } from 'react';
import CartItem from '../models/CartItem';

const CartViewModel = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addItemToCart = (item) => {
    setCartItems(prevItems => [...prevItems, item]);
    updateTotal();
  };

  const removeItemFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.productId !== productId));
    updateTotal();
  };

  const updateItemQuantity = (productId, quantity) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.productId === productId ? { ...item, quantity } : item
      )
    );
    updateTotal();
  };

  const updateTotal = () => {
    const newTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal);
  };

  return {
    cartItems,
    total,
    addItemToCart,
    removeItemFromCart,
    updateItemQuantity
  };
};

export default CartViewModel; */
