import React, { createContext, useState, useEffect } from 'react';
import { fetchUserData, isAuthenticated } from '../services/AuthService';

// Crear el contexto
export const UserContext = createContext();

// Proveedor de contexto
export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [authenticated, setAuthenticated] = useState(isAuthenticated());

    useEffect(() => {
        const userId = localStorage.getItem('userId');

        // Solo buscar datos si está autenticado y hay un ID de usuario
        if (authenticated && userId) {
            const fetchUser = async () => {
                try {
                    const data = await fetchUserData(userId);
                    setUserData(data);
                } catch (error) {
                    console.error('Error fetching user data:', error);
                    setAuthenticated(false);
                    localStorage.removeItem('userId');
                }
            };
            fetchUser();
        } else if (!authenticated) {
            setUserData(null);
        }
    }, [authenticated]);

    // Función para actualizar autenticación y datos después de login
    const updateAuthStatus = () => {
        const isAuth = isAuthenticated();
        setAuthenticated(isAuth);
        if (isAuth) {
            const userId = localStorage.getItem('userId');
            if (userId) {
                fetchUserData(userId)
                    .then(data => {
                        setUserData(data);
                    })
                    .catch((error) => {
                        console.error('Error fetching user data after login:', error);
                        setAuthenticated(false);
                        setUserData(null);
                    });
            }
        } else {
            setUserData(null); // Limpiar datos de usuario si no está autenticado
        }
    };

    // Función para cerrar sesión
    const logout = () => {
        setAuthenticated(false);
        setUserData(null);
        localStorage.removeItem('userId');
        localStorage.removeItem(`cart_${userData?.id}`); // Borrar el carrito del usuario autenticado
    };

    return (
        <UserContext.Provider
            value={{
                userData,
                authenticated,
                setAuthenticated,
                updateAuthStatus,
                logout, // Agregando la función logout al contexto
            }}
        >
            {children}
        </UserContext.Provider>
    );
};