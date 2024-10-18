// src/services/CartService.js
import axios from 'axios';
import {
  API_URLS
} from '../utils/api';

//Obtener el carrito de un usuario
export const getUserCart = async () => {
  try {
    const response = await axios.get(API_URLS.CART, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching cart:', error);
    throw error;
  }
}

//Agregar un producto al carrito
export const addItemToCart = async (productId, quantity) => {
  try {
    const response = await axios.post(API_URLS.CART, {
      productId,
      quantity
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error adding item to cart:', error);
    throw error;
  }
}

//Actualizar la cantidad de un producto en el carrito
export const updateCartItemQuantity = async (productId,quantity) =>{
  try {
    const response = await axios.put(API_URLS.CART,{productId,quantity}, {
      headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`
      }
    })
    return response.data
  } catch (error) {
    console.error('Error upsating cart item quantity:', error)
    throw error
  }
}

//Eliminar un producto del carrito
export const removeItemFromCart = async (productId) => {
  try {
    const response = await axios.delete(API_URLS.CART,{
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      data:{productId}
    }) 
    return response.data
  } catch (error) {
    console.error('Error removing item from cart:',error)
    throw error
  }
}

//vaciar el carrito
export const clearCart = async ()=>{
  try {
    const response = await axios.post(`${API_URLS.CART}/clear`,{},{
      headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`
      }
    })
    return response.data;
  } catch (error) {
    console.error('Error clearing cart:',error)
    throw error
  }
}
