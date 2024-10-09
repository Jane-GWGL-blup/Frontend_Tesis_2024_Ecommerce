// pages/admin/AdminOrderDetailsPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AdminOrderDetails from '../../components/admin/AdminOrderDetails';
import { getOrderById } from '../../services/OrderService';

const AdminOrderDetailsPage = () => {
  const { id } = useParams();  // Obtener el ID de la orden desde la URL
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);  // Estado para manejar el loading

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const orderData = await getOrderById(id);
        setOrder(orderData);
      } catch (error) {
        console.error('Error fetching order details:', error);
      } finally {
        setLoading(false);  // Asegurarse de que loading pase a false
      }
    };

    fetchOrder();
  }, [id]);

  if (loading) {
    return <p>Loading order details...</p>;
  }

  return (
    <div>
      <AdminOrderDetails order={order} />
    </div>
  );
};

export default AdminOrderDetailsPage;