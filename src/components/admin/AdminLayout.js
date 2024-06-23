import React, { useState, useEffect } from 'react';
import { AdminHeader, AdminSidebar } from '../../components/';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

const AdminLayout = ({ onLogout, children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (query) => {
    console.log('Buscando:', query);
    if (query) {
      navigate(`/admin/categories?search=${query}`);
    } else {
      navigate('/admin/categories');
    }
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-2 col-2 bg-light'>
          <AdminSidebar />
        </div>
        <div className='col-md-10 col-10'>
          <div className='row'>
            <div className='col-md-12'>
              <AdminHeader 
                onLogout={onLogout} 
                onSearch={handleSearch}
              />
            </div>
          </div>
          <main role='main' className='px-4 py-2'>
            <Outlet /> {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
