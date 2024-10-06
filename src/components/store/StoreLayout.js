import React, { useContext } from 'react';
import { Header, Footer, LoadingComponent } from '../../components';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { logout } from '../../services/AuthService';
import { UserContext } from '../../contexts/UserContext'; // Importa el contexto


const StoreLayout = () => {
    const { userData, authenticated, setAuthenticated } = useContext(UserContext); // Accede al contexto
   // const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        setAuthenticated(false);
        logout(); // Llama a la función de logout
        console.log('La función logout se está llamando');
        navigate('/'); // Redirige a la página de inicio o a la ruta que desees
    };

    return (
        <div>
            <Header
                onLogout={handleLogout}
                isAuthenticated={authenticated}
                user={userData}
            />
            <main>
                <LoadingComponent>
                    {/* Contenido del HomePage */}
                    <Outlet /> {/* Aquí se renderizan las rutas hijas */}
                </LoadingComponent>
            </main>
            <Footer />
        </div>
    )
}

export default StoreLayout