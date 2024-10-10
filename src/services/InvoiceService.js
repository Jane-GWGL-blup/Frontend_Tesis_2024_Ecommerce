import axios from 'axios';
import { API_URLS } from '../utils/api';

// Obtener todas las facturas
export const getAllInvoices = async () => {
    try {
        const response = await axios.get(API_URLS.INVOICES, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching invoices:', error);
        throw error;
    }
};
// Descargar el PDF de la factura
export const downloadInvoicePDF = async (invoiceId) => {
  try {
    const token = localStorage.getItem('token'); // Obtener el token de localStorage
    const response = await axios.get(`${API_URLS.INVOICES}/${invoiceId}/download`, {
      headers: {
        Authorization: `Bearer ${token}`, // Agregar el token en el encabezado
      },
      responseType: 'blob',  // Importante para manejar archivos binarios
    });

    // Crear una URL para descargar el archivo
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `invoice-${invoiceId}.pdf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error downloading invoice PDF:', error);
    throw error;
  }
};
// Obtener una factura por ID
export const getInvoiceById = async (invoiceId) => {
    try {
      const response = await axios.get(`${API_URLS.INVOICES}/${invoiceId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching invoice:', error);
      throw error;
    }
  };