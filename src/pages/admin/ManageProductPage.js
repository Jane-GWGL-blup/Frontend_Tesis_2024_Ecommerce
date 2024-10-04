import React, { useState } from 'react';
/* import AdminHeader from '../../components/admin/AdminHeader';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminManageProduct from '../../components/admin/AdminManageProduct'; */
/* import { AdminHeader, AdminSidebar, AdminManageProduct } from '../../components';
 */
import {  AdminManageProduct } from '../../components';


const ManageProductPage = () => {

  

  return (
    <div>
      <h2>Product management</h2>
      <div className='divider-admin'/>
      <AdminManageProduct />
    </div>
  );

};

export default ManageProductPage;
