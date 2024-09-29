
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
  
