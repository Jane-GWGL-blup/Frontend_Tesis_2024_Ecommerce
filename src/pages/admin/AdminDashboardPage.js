import React, { useState, useEffect } from 'react';
import { AdminDashboard } from '../../components/';

const AdminDashboardPage = () => {
    // Estado local para la simulación de usuario
    const [user, setUser] = useState({
        id: 1,
        username: 'AdminUser',
        email: 'admin@example.com',
        role: 'admin',
        isLoggedIn: true
    });

    // Estado para rastrear si el administrador ha visitado la página por primera vez
    const [showWelcome, setShowWelcome] = useState(false);

    // Simulando el cierre de sesión
    const logout = () => {
        setUser(null);
    }

    useEffect(() => {
        // Verificar si es la primera visita
        const firstVisit = localStorage.getItem('firstVisit');

        if (!firstVisit) {
            // Mostrar mensaje de bienvenida si es la primera visita
            setShowWelcome(true);
            localStorage.setItem('firstVisit', 'false');
        }
    }, []);

    if (!user) {
        return <div>Please log in.</div>;
    }

    return (
        <div>
            {showWelcome && <h2>Welcome, {user.username}!</h2>}
            <h2>Dashboard</h2>
            <div className='divider-admin'/>
            <AdminDashboard />
        </div>
    );
};

export default AdminDashboardPage;
