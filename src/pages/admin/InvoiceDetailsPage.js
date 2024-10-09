import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getInvoiceById } from '../../services/InvoiceService';
import InvoiceDetails from '../../components/admin/InvoiceDetails';

const InvoiceDetailsPage = () => {
  const { id } = useParams(); // Obtener el ID de la factura desde la URL
  const [invoice, setInvoice] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        const fetchedInvoice = await getInvoiceById(id);
        setInvoice(fetchedInvoice);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching invoice:', error);
        setLoading(false);
      }
    };

    fetchInvoice();
  }, [id]);

  if (loading) {
    return <p>Loading invoice details...</p>;
  }

  if (!invoice) {
    return <p>Invoice not found</p>;
  }

  return (
    <div>
      <h2>Invoice Details</h2>
      <InvoiceDetails invoice={invoice} />
    </div>
  );
};

export default InvoiceDetailsPage;