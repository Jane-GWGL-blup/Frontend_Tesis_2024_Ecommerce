import React, { useState } from 'react';
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
