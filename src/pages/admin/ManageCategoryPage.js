import React, { useState } from 'react';
/* import AdminHeader from '../../components/admin/AdminHeader';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminManageProduct from '../../components/admin/AdminManageProduct'; */
/* import { AdminHeader, AdminSidebar, AdminManageProduct } from '../../components';
 */
import {  AdminManageCategory } from '../../components';


const ManageCategoryPage = () => {

  

  return (
    <div>
      <h2>Manage Categories</h2>
      <div className='divider-admin'/>
      <AdminManageCategory />
    </div>
  );

};

export default ManageCategoryPage;
