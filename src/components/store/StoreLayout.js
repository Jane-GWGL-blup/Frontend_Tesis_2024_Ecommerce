import React, { useState, useEffect } from 'react';
import { Header, Footer, LoadingComponent } from '../../components';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { logout, isAuthenticated } from '../../services/AuthService';

const StoreLayout = ({ children }) => {

    const location = useLocation();
    const navigate = useNavigate();
    /*     const [hasLoggedOut, setHasLoggedOut] = useState(false); // Estado adicional para controlar si se ha hecho logout
     */
/*     const [authenticated, setAuthenticated] = useState(isAuthenticated(false));
 */    
const publicRoutes = ['/login', '/register', '/products', '/cart'];


    const handleLogout = () => {
        logout(); // Llama a la función de logout
        console.log('La función logout se está llamando');
/*         setAuthenticated(false); */
        navigate('/products'); // Redirige a la página de inicio o a la ruta que desees
    };


    useEffect(() => {
        const isUserAuthenticated = isAuthenticated();
        const isPublicRoute = publicRoutes.includes(location.pathname);
        // Verifica si el usuario no está autenticado y no está en la página de inicio de sesión o registro u otro
        if (!isUserAuthenticated && !isPublicRoute) {
            navigate('/'); // Redirige si el usuario no está autenticado
        }
    }, [ navigate, location]);

/*     useEffect(() => {

        // Función que verifica si el usuario está autenticado
        const checkAuthentication = () => {
            const verifyAuthentication = isAuthenticated();
            setAuthenticated(verifyAuthentication);
        };

        // Llama a la función de verificación de autenticación
        checkAuthentication();

        // Función que se llama cuando cambia el evento de almacenamiento
        // Escucha cambios en el almacenamiento local
        const handleStorageChange = (event) => {
            if (event.key === 'token') { // Si el token cambia, actualiza el estado
                checkAuthentication();
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);



    useEffect(() => {

        const isPublicRoute = publicRoutes.includes(location.pathname);
        // Verifica si el usuario no está autenticado y no está en la página de inicio de sesión o registro u otro
        if (!authenticated && !isPublicRoute) {
            navigate('/'); // Redirige si el usuario no está autenticado
        }
    }, [authenticated, , location]); */



    return (
        <div>
            <Header
                onLogout={handleLogout}
                /* isAuthenticated={authenticated} */
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