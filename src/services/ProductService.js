
// services/ProductService.js
import axios from 'axios';

import { API_URLS } from '../utils/api';
//LISTADO DE TODOS LOS PRODUCTOS PUEDE VER ADMIN Y USER
export const getAllProducts = async () => {
  try {
    const response = await axios.get(API_URLS.PRODUCTS);
    return response.data;  // Esto asume que los productos están en data
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

//crear productos
export const createProduct = async (productData) =>{
  try {
    const response = await axios.post(API_URLS.PRODUCTS, productData,{
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}` //suponiendo que guarda el token en el local storage
      }
    })
    return response.data
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
}

//actualizar producto
export const updateProduct = async (productId, productData) => {
  try {
    const response = await axios.put(`${API_URLS.PRODUCTS}/${productId}`, productData,{
      headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`,
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

//Eliminar producto
export const deleteProduct = async (productId) =>{
  try{
    const response = await axios.delete(`${API_URLS.PRODUCTS}/${productId}`,{
      headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`,
      }
    })
    return response.data
  }catch(error){
    console.error('Error deleting product:',error)
    throw error
  }
}

// Obtener producto por ID
export const getProductById = async (productId) => {
  try {
    const response = await axios.get(`${API_URLS.PRODUCTS}/${productId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};
  
