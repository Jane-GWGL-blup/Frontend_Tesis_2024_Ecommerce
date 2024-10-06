import axios from 'axios';
import { API_URLS } from '../utils/api';

//obtener todos los usuarios
export const getAllUsers = async () => {
  try {
    const response = await axios.get(API_URLS.USERS, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

//Crear nuevo usuario
export const createUser = async (userData) =>{
    try {
        const response = await axios.post(API_URLS.USERS,userData,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        return response.data
    } catch (error) {
        console.error('Error creating user:',error)
        throw error
    }
}

//Edit user
export const updateUser = async (userId,userData) => {
    try {
        const response = await axios.put(`${API_URLS.USERS}/${userId}`,userData,{
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
        return response.data
    } catch (error) {
        console.error('Error updating user: ',error)
        throw error
    }
}

//Eliminar usuario
export const deleteUser = async (userId) =>{
    try {
        const response = await axios.delete(`${API_URLS.USERS}/${userId}`,{
            headers:{ Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
        return response.data
    } catch (error) {
        console.error('Error deleting user:' ,error)
        throw error
    }
}

// Cambiar rol de usuario
export const updateUserRole = async (userId, role) => {
    try {
        const response = await axios.put(`${API_URLS.USERS}/${userId}/role`, { role }, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        return response.data;
    } catch (error) {
        console.error('Error updating user role:', error);
        throw error;
    }
};