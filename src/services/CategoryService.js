import axios from 'axios';

import { API_URLS } from '../utils/api';
//LISTADO DE TODOS LOS PRODUCTOS
export const getAllCategories = async () => {
  try {
    const response = await axios.get(API_URLS.CATEGORIES);
    return response.data;  // Esto asume que los productos están en data
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

//NOSIRVEN AUN
export const getCategoryData = async (categoryId) => {
    // Aquí iría la llamada real a la API para obtener datos de la categoría
    return {
      name: 'Sample Category',
      description: 'Sample Description',
    };
  };
  
  export const updateCategoryData = async (categoryId, data) => {
    // Aquí iría la llamada real a la API para actualizar datos de la categoría
    console.log(`Updating category ${categoryId} with data:`, data);
    return {
      success: true,
    };
  };
  