import React from 'react';
import { Table,Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const AdminManageOrders = ({ orders, handleStatusChange, handleDeleteOrder }) => {
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>User</th>
            <th>Total Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.id}>
              <td>{index + 1}</td>
              <td>{order.user.name}</td>
              <td>${order.totalAmount.toFixed(2)}</td>
              <td>
                <select value={order.status} onChange={(e) => handleStatusChange(order.id, e.target.value)}>
                  <option value="PENDING">PENDING</option>
                  <option value="PAID">PAID</option>
                  <option value="SHIPPED">SHIPPED</option>
                  <option value="DELIVERED">DELIVERED</option>
                </select>
              </td>
              <td>
                {/* Botón para ver detalles de la orden */}
                <Link to={`/admin/orders/${order.id}`} className="btn btn-info">
                  Details
                </Link>
  
                {/* Botón para eliminar la orden */}
                <Button variant="danger" onClick={() => handleDeleteOrder(order.id)} className="ml-2">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };
  
  export default AdminManageOrders;