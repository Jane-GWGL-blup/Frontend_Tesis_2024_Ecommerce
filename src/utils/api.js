// utils/api.js
//GESTION DE URLS
const BASE_URL = process.env.REACT_APP_API_URL;  // Cambia esta URL por la base de tu API

export const API_URLS = {
  AUTH_REGISTER: `${BASE_URL}/register`,
  PRODUCTS: `${BASE_URL}/products`,
  USERS: `${BASE_URL}/users`,
  AUTH_LOGIN:`${BASE_URL}/login`
  // Agrega otras rutas de la API según sea necesario
};
