import axios from 'axios'
import { API_URLS } from '../utils/api'

//obtener todos los descuentois
export const getAllDiscounts= async () =>{
    try {
        const response = await axios.get(API_URLS.DISCOUNTS,{
            headers: {
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
        return response.data
    } catch (error) {
        console.error('Error fetching discounts:',error)        
        throw error
    }
}

// Crear un nuevo descuento
export const createDiscount = async (discountData) => {
    try {
        const response = await axios.post(API_URLS.DISCOUNTS, discountData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating discount:', error);
        throw error;
    }
};

// Actualizar un descuento
export const updateDiscount = async (discountId, discountData) => {
    try {
        const response = await axios.put(`${API_URLS.DISCOUNTS}/${discountId}`, discountData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error updating discount:', error);
        throw error;
    }
};

// Eliminar un descuento
export const deleteDiscount = async (discountId) => {
    try {
        const response = await axios.delete(`${API_URLS.DISCOUNTS}/${discountId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error deleting discount:', error);
        throw error;
    }
};
export const getDiscountById = async (discountId) => {
    try {
      const response = await axios.get(`${API_URLS.DISCOUNTS}/${discountId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      return response.data;
    } catch (error) {
      console.error(`Error fetching discount with id ${discountId}:`, error);
      throw error;
    }
  };

// Aplicar código de descuento
export const applyDiscountCode = async (code) => {
    try {
      const response = await axios.get(`${API_URLS.DISCOUNTS}/code/${code}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error applying discount:', error);
      throw error;
    }
}