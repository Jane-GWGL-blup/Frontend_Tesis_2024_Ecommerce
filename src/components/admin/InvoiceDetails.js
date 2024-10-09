import React from 'react';
import { Table } from 'react-bootstrap';

const InvoiceDetails = ({ invoice }) => {
  return (
    <div>
      <p>Invoice Number: {invoice.invoiceNumber}</p>
      <p>Total Amount: ${invoice.totalAmount.toFixed(2)}</p>
      <p>Date: {new Date(invoice.createdAt).toLocaleDateString()}</p>

      <h4>Items:</h4>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {invoice.invoiceDetails.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.product.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>${(item.quantity * item.price).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default InvoiceDetails;