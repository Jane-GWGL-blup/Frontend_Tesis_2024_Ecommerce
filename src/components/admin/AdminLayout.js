import React, { useState, useEffect, useContext } from 'react';
import { AdminHeader, AdminSidebar } from '../../components/';
import { Outlet, useNavigate } from 'react-router-dom';
import { logout, isAuthenticated } from '../../services/AuthService';
import { UserContext } from '../../contexts/UserContext'; // Importa el contexto
import { useCart } from '../../contexts/CartContext';

const AdminLayout = ({  children }) => {
  const { userData, authenticated, setAuthenticated } = useContext(UserContext); // Accede al contexto
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const handleLogout = async () => {
    clearCart(); // Limpia el carrito antes de cerrar sesión
    setAuthenticated(false);
    await logout(); // Llama a la función de logout
    navigate('/'); // Redirige a la página de inicio o a la ruta que desees
  };

  const handleSearch = (query) => {
    console.log('Buscando:', query);
    if (query) {
      navigate(`/admin/categories?search=${query}`);
    } else {
      navigate('/admin/categories');
    }
  };

  useEffect(() => {
    const isUserAuthenticated = isAuthenticated();
    if (!isUserAuthenticated) {
      navigate('/'); // Redirige si el usuario no está autenticado
    }
  }, [navigate]);


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
                onLogout={handleLogout} 
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
