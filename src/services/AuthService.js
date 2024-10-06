//services/AuthService.js
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
    // Verifica si la respuesta contiene el token
    if (!response.data.token) {
      throw new Error("Token no recibido en la respuesta.");
    }
    // Asegúrate de que estás almacenando el token correctamente
    /* localStorage.setItem('token', response.data.token); */

    // Asegúrate de que estás guardando un objeto completo del usuario
    const userDataToStore = {
      id: response.data.id,
      role: response.data.role,
      email: response.data.email,
      name: response.data.name,
    };

    localStorage.setItem('userId', response.data.id);
    localStorage.setItem('user', JSON.stringify(userDataToStore));  // Almacena el objeto completo

    return response.data
  } catch (error) {
    console.error("Error logging in:", error)
    throw error;
  }
}


export const logout = () => {
  // Aquí puedes eliminar el token del localStorage o cualquier otro mecanismo de autenticación
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

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
  const token = localStorage.getItem('token');
  if (!token) {
    console.log("Token no encontrado.");
    return null; // Cambiar a null para que sea más explícito
  }

  try {
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    if (decodedToken.exp < Date.now() / 1000) {
      console.log("Token expirado.");
      return null; // Retornar null si ha expirado
    }
    return token; // Retornar el token si es válido
  } catch (error) {
    console.error("Error al decodificar el token:", error);
    return null; // Retornar null si hay un error
  }

};

// Función para realizar llamadas a la API solo si el usuario está autenticado

export const authenticatedApiCall = async (url, method = 'GET', data = null) => {
  const token = isAuthenticated();
  if (!token) {
    throw new Error('User is not authenticated');
  }

  const config = {
    method,
    headers: {
      Authorization: `Bearer ${token}`,  // Incluye el token correctamente
      'Content-Type': 'application/json',
    },
    ...(method !== 'GET' && { data: JSON.stringify(data) }),
  };
  console.log("Config de la solicitud:", config); // Añadir este log para depurar

  try {
    const response = await axios(url, config);
    return response.data;
  } catch (error) {
    // Manejar el error de manera más detallada
    console.error('Error en la llamada a la API:', error.response ? error.response.data : error.message);
    throw error;
  }
};



export const fetchUserData = async (userId) => {
  try {
    const userData = await authenticatedApiCall(`${API_URLS.USERS}/${userId}`, 'GET');
    return userData;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error; // Opcional: volver a lanzar el error si es necesario
  }
};




