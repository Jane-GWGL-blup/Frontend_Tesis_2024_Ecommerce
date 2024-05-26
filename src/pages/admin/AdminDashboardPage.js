import React from 'react';
import { useState } from 'react';
import AdminHeader from '../../components/admin/AdminHeader';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminDashboard from '../../components/admin/AdminDashboard';

const AdminDashboardPage = () => {
/*   const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
      setShowSidebar(!showSidebar);
  }; */
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
        <div className='container-fluid'>
            <div className='row'>
                {/* Contenedor de Sidebar */}
                <div className='col-md-2 col-2 bg-light'>
                    <AdminSidebar />
                </div>
                <div className='col-md-10 col-10'>
                    <div className='row'>
                        <div className='col-md-12'>
                            {/* Contenido del Header */}
                            <AdminHeader onLogout={logout} />
                        </div>
                    </div>
                    {/* Contenido principal */}
                    <main role='main' className='px-4 py-2'>
                        {/* Contenido del Dashboard */}
                        <div id="content">
                            <div className="container">
                                <h1>Welcome, {user.username}!</h1>
                                {/* Aquí irían los detalles del dashboard */}
                                <AdminDashboard />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardPage;
