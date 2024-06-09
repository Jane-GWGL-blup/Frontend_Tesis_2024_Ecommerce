import React from 'react';
import {AdminHeader, AdminSidebar} from '../../components/'
import { Outlet } from 'react-router-dom';

const AdminLayout = ({ onLogout, children }) => {

    console.log('onLogout prop in AdminLayout:', onLogout); // Verifica si la prop onLogout se pasa correctamente
    
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-2 col-2 bg-light'>
          <AdminSidebar />
        </div>
        <div className='col-md-10 col-10'>
          <div className='row'>
            <div className='col-md-12'>
              <AdminHeader onLogout={onLogout} />
            </div>
          </div>
          <main role='main' className='px-4 py-2'>
           <Outlet/> {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
