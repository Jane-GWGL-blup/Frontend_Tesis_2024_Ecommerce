import React, { useEffect, useState } from 'react';
import AdminManageOrders from '../../components/admin/AdminManageOrders';
import { getAllOrders, updateOrderStatus, deleteOrder } from '../../services/OrderService';

const AdminManageOrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersList = await getAllOrders();
        setOrders(ordersList);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await updateOrderStatus(orderId, newStatus);
      setOrders(orders.map(order =>
        order.id === orderId ? { ...order, status: newStatus } : order
      ));
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };

  const handleDeleteOrder = async (orderId) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      try {
        await deleteOrder(orderId);
        setOrders(orders.filter(order => order.id !== orderId));
        alert('Order deleted successfully!');
      } catch (error) {
        console.error('Error deleting order:', error);
        alert('Error deleting order');
      }
    }
  };

  return (
    <div>
      <h2>Manage Orders</h2>
      <AdminManageOrders
        orders={orders}
        handleStatusChange={handleStatusChange}
        handleDeleteOrder={handleDeleteOrder}
      />
    </div>
  );
};

export default AdminManageOrdersPage;