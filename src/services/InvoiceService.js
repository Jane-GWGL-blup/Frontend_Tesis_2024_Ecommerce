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
// Descargar una factura en formato PDF
export const downloadInvoicePDF = async (invoiceId) => {
    try {
      const response = await axios.get(`${API_URLS.INVOICES}/${invoiceId}/download`, {
        responseType: 'blob',  // Para manejar archivos binarios (PDF)
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
  
      // Crear un enlace para descargar el archivo PDF
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `invoice-${invoiceId}.pdf`); // Nombre del archivo PDF
      document.body.appendChild(link);
      link.click();
      link.remove();
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