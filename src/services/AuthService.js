import axios from 'axios';

import { API_URLS } from '../utils/api';

// Función para registrar un nuevo usuario
export const registerUser = async (userData) => {
    try {
      const response = await axios.post(API_URLS.AUTH_REGISTER, userData);
      return response.data;  // Asegúrate de que el backend devuelve datos relevantes
    } catch (error) {
      console.error("Error registering user:", error);
      throw error;
    }
  };

  export const loginUser = async(userData) =>{
    try {
      const response = await axios.post(API_URLS.AUTH_LOGIN,userData);
      return response.data
    } catch (error) {
      console.error("Error logging in:",error)
      throw error;
    }
  }