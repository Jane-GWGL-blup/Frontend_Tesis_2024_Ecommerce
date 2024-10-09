// components/admin/AdminOrderDetails.js
import React from 'react';
import { Table } from 'react-bootstrap';

const AdminOrderDetails = ({ order }) => {
  // Asegurarse de que los datos de la orden estén presentes antes de renderizar
  if (!order) {
    return <p>Loading order details...</p>;
  }

  return (
    <div>
      <h2>Order Details for Order ID: {order.id}</h2>
      <p>User: {order.user.name}</p>
      <p>Status: {order.status}</p>
      <p>Total Amount: ${order.totalAmount.toFixed(2)}</p>

      <h3>Items</h3>
      {order.items && order.items.length > 0 ? (
        <Table responsive>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item, index) => (
              <tr key={index}>
                <td>{item.product.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>No items found for this order.</p>
      )}
    </div>
  );
};

export default AdminOrderDetails;