import React, {
  useEffect,
  useState
} from 'react';
import AdminManageOrders from '../../components/admin/AdminManageOrders';
import {
  getAllOrders,
  updateOrderStatus,
  deleteOrder
} from '../../services/OrderService';
import { Form } from 'react-bootstrap';

const AdminManageOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("")

  //obtener todas las ordenes al cargar la pagina
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersList = await getAllOrders();
        setOrders(ordersList);
        setFilteredOrders(ordersList) //inicialmente se muestran todos los pedidos
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  //funcion para mejorar la busqueda por nombre del usario
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
    filterOrders(e.target.value, filterStatus)
  }

  //funcion para manejar filtro por usuario
  const handleStatusFilter = (e) => {
    setFilterStatus(e.target.value)
    filterOrders(searchTerm, e.target.value)
  }

  //funcion que filtra los pedidos segun busqueda y estado
  const filterOrders = (searchTerm, statusFilter) => {
    let updatedOrders = orders
    //filtrar por termino de busqueda (nombre del usuario)
    if (searchTerm) {
      updatedOrders = updatedOrders.filter((order) =>
        order.user.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (statusFilter) {
      updatedOrders = updatedOrders.filter((order) => order.status === statusFilter);
    }

    setFilteredOrders(updatedOrders);
  }

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await updateOrderStatus(orderId, newStatus);
      setOrders(orders.map(order =>
        order.id === orderId ? {
          ...order,
          status: newStatus
        } : order
      ));
      filterOrders(searchTerm, filterStatus)
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };

  const handleDeleteOrder = async (orderId) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      try {
        await deleteOrder(orderId);
        setOrders(orders.filter(order => order.id !== orderId));
        setFilteredOrders(filteredOrders.filter(order => order.id !== orderId))
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

      {/* Filtros y Búsqueda */}
      <div className="d-flex my-3">
        <Form.Control
          type="text"
          placeholder="Search by user name"
          value={searchTerm}
          onChange={handleSearch}
          className="me-2"
        />
        <Form.Select value={filterStatus} onChange={handleStatusFilter}>
          <option value="">Filter by Status</option>
          <option value="PENDING">Pending</option>
          <option value="PAID">Paid</option>
          <option value="SHIPPED">Shipped</option>
          <option value="DELIVERED">Delivered</option>
        </Form.Select>
      </div>

      {/* Tabla de gestión de pedidos */}
      <AdminManageOrders
        orders={filteredOrders}
        handleStatusChange={handleStatusChange}
        handleDeleteOrder={handleDeleteOrder}
      />
    </div>
  );
};

export default AdminManageOrdersPage;