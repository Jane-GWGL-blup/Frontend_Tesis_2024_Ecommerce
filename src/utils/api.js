// utils/api.js
//GESTION DE URLS
const BASE_URL = process.env.REACT_APP_API_URL;  // Cambia esta URL por la base de tu API

export const API_URLS = {
  AUTH_REGISTER: `${BASE_URL}/register`,
  AUTH_LOGIN:`${BASE_URL}/login`,
  PRODUCTS: `${BASE_URL}/products`,
  //PRODUCTS_EDIT: (id) => `${BASE_URL}/products/${id}`, // Hacer que sea una función que reciba el ID
  CATEGORIES: `${BASE_URL}/categories`,
  USERS: `${BASE_URL}/users`,
  // Agrega otras rutas de la API según sea necesario
};