// src/services/CartService.js
/* import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/cart';

const CartService = {
  getCartItems: async () => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching cart items:', error);
      throw error;
    }
  },

  addCartItem: async (cartItem) => {
    try {
      const response = await axios.post(BASE_URL, cartItem);
      return response.data;
    } catch (error) {
      console.error('Error adding cart item:', error);
      throw error;
    }
  },

  removeCartItem: async (productId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${productId}`);
      return response.data;
    } catch (error) {
      console.error('Error removing cart item:', error);
      throw error;
    }
  },

  updateCartItem: async (productId, quantity) => {
    try {
      const response = await axios.put(`${BASE_URL}/${productId}`, { quantity });
      return response.data;
    } catch (error) {
      console.error('Error updating cart item:', error);
      throw error;
    }
  }
};

export default CartService; */
