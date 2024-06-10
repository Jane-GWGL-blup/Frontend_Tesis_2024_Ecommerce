import React from 'react';
import { useState } from 'react';
/* import AdminHeader from '../../components/admin/AdminHeader';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminDashboard from '../../components/admin/AdminDashboard'; */
/* import {AdminHeader, AdminSidebar, AdminDashboard} from '../../components/'
 */

import { AdminDashboard } from '../../components/'

const AdminDashboardPage = () => {
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
        <h1>Welcome, {user.username}!</h1>

        <h2>Admin Dashboard</h2>
        <div className='row'>
            <div className='col'>

            </div>
            <div className='col'>

            </div>
            <div className='col-lg-4'>
            <AdminDashboard />
            </div>
        </div>

    </div>
    );
};

export default AdminDashboardPage;
