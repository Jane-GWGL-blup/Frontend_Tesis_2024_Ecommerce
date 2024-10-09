import React from 'react';
import { Table, Button } from 'react-bootstrap';

const InvoiceTable = ({ invoices, onDownload }) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Invoice Number</th>
          <th>Total Amount</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {invoices.map((invoice, index) => (
          <tr key={invoice.id}>
            <td>{index + 1}</td>
            <td>{invoice.invoiceNumber}</td>
            <td>${invoice.totalAmount.toFixed(2)}</td>
            <td>{new Date(invoice.createdAt).toLocaleDateString()}</td>
            <td>
              <Button onClick={() => onDownload(invoice.id)}>Download PDF</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default InvoiceTable;