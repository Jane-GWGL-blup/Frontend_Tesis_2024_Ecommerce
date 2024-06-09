import React, { useState } from 'react';
/* import AdminHeader from '../../components/admin/AdminHeader';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminManageProduct from '../../components/admin/AdminManageProduct'; */
/* import { AdminHeader, AdminSidebar, AdminManageProduct } from '../../components';
 */
import {  AdminManageCategory } from '../../components';


const ManageCategoryPage = () => {

  // Estado local para la simulación de usuario
  const [user, setUser] = useState({
    id: 1,
    username: 'AdminUser',
    email: 'admin@example.com',
    role: 'admin',
    isLoggedIn: true
  });

  // Simulando el cierre de sesión
  const logout = () => {
    setUser(null);
  }

  if (!user) {
    return <div>Please log in.</div>;
  }

  return (
    <div>
      <h1>Manage Categories</h1>
      <AdminManageCategory />
    </div>
  );

};

export default ManageCategoryPage;
