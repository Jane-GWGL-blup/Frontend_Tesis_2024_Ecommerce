import React, { createContext, useState, useEffect } from 'react';
import { fetchUserData, isAuthenticated } from '../services/AuthService';
//manejo de userData y authenticated en un solo lugar
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
                }
            };
            fetchUser();      
        } else if(!authenticated){
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
                fetchUserData(userId).then(setUserData);
            }
        } else {
            setUserData(null); // Limpiar datos de usuario si no está autenticado
        }
    };

    return (
        <UserContext.Provider value={{ userData, authenticated, setAuthenticated, updateAuthStatus}}>
            {children}
        </UserContext.Provider>
    );
};

