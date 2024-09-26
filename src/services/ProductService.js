
// services/ProductService.js
import axios from 'axios';

import { API_URLS } from '../utils/api';
//LISTADO DE TODOS LOS PRODUCTOS
export const getAllProducts = async () => {
  try {
    const response = await axios.get(API_URLS.PRODUCTS);
    return response.data;  // Esto asume que los productos están en data
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
  
//AUN NO SIRVEN
  export const updateProductData = async (productId, data) => {
    // Aquí iría la llamada real a la API para actualizar datos de la categoría
    console.log(`Updating product ${productId} with data:`, data);
    return {
      success: true,
    };
  };

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
  
