import React, { useState, useEffect} from 'react';
import {
    Header, Footer, LoadingComponent
} from '../../components';
import { Outlet, useNavigate } from 'react-router-dom';
import { logout, isAuthenticated } from '../../services/AuthService';

const StoreLayout = ({ children }) => {

    const navigate = useNavigate();
    const [authenticated, setAuthenticated] = useState(isAuthenticated());

    const handleLogout = () => {
        logout(); // Llama a la función de logout
        setAuthenticated(false);
        navigate('/'); // Redirige a la página de inicio o a la ruta que desees
    };

    useEffect(() => {
        const checkAuthentication = () => {
            setAuthenticated(isAuthenticated());
        };
    
        checkAuthentication(); // Verifica el estado de autenticación al montar
    
        const handleStorageChange = () => {
            checkAuthentication(); // Actualiza el estado si hay un cambio en el almacenamiento
        };
    
        window.addEventListener('storage', handleStorageChange);
    
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);
    
    return (
        <div>
            <Header
                onLogout={handleLogout}
                isAuthenticated={authenticated}
            />
            <main>
                <LoadingComponent>
                    {/* Contenido del HomePage */}
                    <Outlet /> {children}
                </LoadingComponent>
            </main>
            <Footer />
        </div>
    )
}

export default StoreLayout