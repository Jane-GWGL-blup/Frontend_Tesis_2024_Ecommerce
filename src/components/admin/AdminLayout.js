import React, { useState, useEffect } from 'react';
import { AdminHeader, AdminSidebar } from '../../components/';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

const AdminLayout = ({  children }) => {
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

      // Estado local para la simulación de usuario
      const [user, setUser] = useState({
        id: 1,
        username: 'AdminUser',
        email: 'admin@example.com',
        role: 'admin',
        isLoggedIn: true
    });

 // Función para simular el cierre de sesión
 const onLogout = () => {
  setUser(null); // Establece el usuario como null
  // También puedes realizar otras tareas como redirigir al usuario a la página de inicio de sesión
  navigate('/login'); // Redirige a la página de inicio de sesión
};

  return (
    <div className='container-fluid admin-container'>
      <div className='row'>
        <div className='col-md-2 col-2 admin-sidebar'>
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
