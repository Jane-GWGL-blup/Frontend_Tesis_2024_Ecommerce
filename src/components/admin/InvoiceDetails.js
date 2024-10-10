import React from 'react';
import { Table } from 'react-bootstrap';

const InvoiceDetails = ({ invoice }) => {
  const companyName = "Alma Jewerly";
  return (
    <div>
      {/* Información general de la factura */}
      <h2>{companyName}</h2>
      <p>Invoice Number: {invoice.invoiceNumber}</p>
      <p>Total Amount: ${invoice.totalAmount.toFixed(2)}</p>
      <p>Date: {new Date(invoice.createdAt).toLocaleDateString()}</p>
      
      {/* Información del comprador */}
      <h4>Customer Information</h4>
      <p><strong>Customer Name:</strong> {invoice.order?.user?.name}</p>
      <p><strong>Email:</strong> {invoice.order.user.email}</p>

      {/* Detalles de los productos */}
      <h4>Product Details</h4>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
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

      {/* Total final */}
      <div>
        <h5>Total Amount: ${invoice.totalAmount.toFixed(2)}</h5>
      </div>
    </div>
  );
};

export default InvoiceDetails;