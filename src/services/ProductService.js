
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
        //'Content-Type':'multipart/form-data', //si estas subiendo imagenes
        Authorization: `Bearer ${localStorage.getItem('token')}` //suponiendo que guarda el token en el local storage
      }
    })
    return response.data
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
}
 
//SOLO LO VE ADMIN
export const updateProductData = async (productId, productData) => {
  try {
    const response = await axios.put(API_URLS.PRODUCTS_EDIT(productId), productData);
    return response.data;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

//AUN NO SIRVEN


export const getProductData = async (productId) => {
    // Aquí iría la llamada real a la API para obtener datos de la categoría
    try {
      const response = await axios.get(API_URLS);
      return response.data;  // Esto asume que los productos están en data
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  };
  
