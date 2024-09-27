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
// Función para inicio de sesion
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(API_URLS.AUTH_LOGIN, userData);
    // Guarda tanto el token como el rol en localStorage
    /*     localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify({ role: response.data.role })); */
    // Asegúrate de que estás guardando un objeto completo del usuario
    const userDataToStore = {
      role: response.data.role,  // Asegúrate de que esta propiedad exista
      // Agrega aquí otros datos relevantes del usuario si es necesario
      email: response.data.email, // Supón que también devuelve el email
      name: response.data.name, // Supón que también devuelve el nombre
    };

    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(userDataToStore)); // Almacena el objeto completo
    return response.data
  } catch (error) {
    console.error("Error logging in:", error)
    throw error;
  }
}
// Función para verificar si el usuario es un administrador
export const isAdmin = () => {
  const userString = localStorage.getItem('user');

  // Si no hay usuario, devuelve false
  if (!userString) return false;

  try {
    const user = JSON.parse(userString); // Intenta analizar el JSON
    return user && user.role === 'ADMIN'; // Verifica si el rol es admin
  } catch (error) {
    console.error('Error parsing user from localStorage:', error);
    return false; // Si hay un error al analizar, devuelve false
  }
};

// Función para verificar si hay un usuario autenticado
export const isAuthenticated = () => {
  return !!localStorage.getItem('token'); // Verifica si hay un token
};

