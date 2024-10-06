import axios from 'axios';
import { API_URLS } from '../utils/api';

//LISTADO DE TODOS LOS GATEGORIAS
export const getAllCategories = async () => {
  try {
    const response = await axios.get(API_URLS.CATEGORIES);
    return response.data;  // Esto asume que los productos están en data
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

//CREATE CATEGORY
export const createCategory = async (categoryData) =>{
  try {
    const response = await axios.post(API_URLS.CATEGORIES,categoryData,{
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    })
    return response.data
  } catch (error) {
    console.error('Error al crear la categoría', error);
    throw error;
  }
}
//modificar categoria
export const updateCategory = async (categoryId,categoryData) =>{
  try {
    const response = await axios.put(`${API_URLS.CATEGORIES}/${categoryId}`,categoryData,{
      headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`
      }
    })
    return response.data
  } catch (error) {
    console.error('Error al actualizar la categoría', error);
    throw error;
  }
}
// Eliminar categoría
export const deleteCategory = async (categoryId) => {
  try {
    const response = await axios.delete(`${API_URLS.CATEGORIES}/${categoryId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error al eliminar la categoría', error);
    throw error;
  }
};

// Obtener datos de la categoría por ID
export const getCategoryById = async (categoryId) => {
  try {
    const token = localStorage.getItem('token'); // Obtener el token
    if(!token){
      throw new Error('No se encontro el tokenen el localStorage')
    }
    const response = await axios.get(`${API_URLS.CATEGORIES}/${categoryId}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Enviando el token en la cabecera de autorización
      },
    });
    return response.data; // Devolver la data de la categoría
  } catch (error) {
    console.error('Error fetching category:', error);
    throw error; // Manejar el error
  }
};


  