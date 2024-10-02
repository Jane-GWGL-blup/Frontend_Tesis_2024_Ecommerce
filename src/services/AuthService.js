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
  if (token === null) {
    console.log("token",token)
    return false;
  } else {
    console.log("token",token)
    try {
       // Decodifica la parte del payload del token (JWT), que contiene la información del usuario
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
       // Verifica si el token ha expirado comparando la propiedad 'exp' con la fecha actual
      if (decodedToken.exp < Date.now() / 1000) {
        return false;
      } else {
        return true;
      }
    } catch (error) {
      return false;
    }
  }
  /*
      const token = localStorage.getItem('token');
  console.log('Token:', token); // Verifica el valor del token
    const isAuth = token !== null; 
    console.log('Is Authenticated:', isAuth); // Verifica el estado de autenticación
    return isAuth;  */
};

/* export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  console.log("Token present:", token); // Para depurar
  return !!token; // Retorna true si hay un token
}; */


/* export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token; // Retorna true si hay un token, false de lo contrario
}; */

/* export const isAuthenticated = () => {
  const token = localStorage.getItem('token'); // O el método que estés usando
  return token !== null; // Devuelve true si hay un token
}; */


