// pages/admin/InvoiceListPage.js
import React, { useEffect, useState } from 'react';
import { getAllInvoices, downloadInvoicePDF } from '../../services/InvoiceService';
import InvoiceTable from '../../components/admin/InvoiceTable';

const InvoiceListPage = () => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const invoiceList = await getAllInvoices();
        setInvoices(invoiceList);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching invoices:', error);
        setLoading(false);
      }
    };

    fetchInvoices();
  }, []);

  const handleDownload = async (invoiceId) => {
    try {
      await downloadInvoicePDF(invoiceId);
    } catch (error) {
      console.error('Error downloading invoice:', error);
    }
  };

  if (loading) {
    return <p>Loading invoices...</p>;
  }

  return (
    <div>
      <h2>Invoices</h2>
      <InvoiceTable invoices={invoices} onDownload={handleDownload} />
    </div>
  );
};

export default InvoiceListPage;