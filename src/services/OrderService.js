import axios from 'axios'
import { API_URLS } from '../utils/api'

//obtener todas las ordenes
export const getAllOrders = async () => {
    try {
        const response = await axios.get(API_URLS.ORDERS,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        return response.data
    } catch (error) {
        console.error('Error fetching orders:',error)
        throw error
    }
}
// Obtener detalles de una orden por ID
export const getOrderById = async (orderId) => {
    try {
      const response = await axios.get(`${API_URLS.ORDERS}/${orderId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      return response.data;
    } catch (error) {
      console.error(`Error fetching order with id ${orderId}:`, error);
      throw error;
    }
};

//Actualizar el estado del pedido
export const updateOrderStatus = async (orderId,status) => {
    try {
        const response = await axios.put(`${API_URLS.ORDERS}/${orderId}/status`,{status},{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        return response.data
    } catch (error) {
        console.error('Error updating order status',error)
        throw error
    }
}

//Eliminar un pedido
export const deleteOrder = async (orderId) => {
    try {
        const response = await axios.delete(`${API_URLS.ORDERS}/${orderId}`,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        return response.data
    } catch (error) {
        console.error('Error deliting order: ',error)
        throw error
    }
}