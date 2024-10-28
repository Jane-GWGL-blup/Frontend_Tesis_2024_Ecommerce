import React from 'react';
import { Navigate } from 'react-router-dom';

// Componente de Ruta Protegida
const ProtectedRoute = ({ element, isAllowed, isAdminRoute, isAuthenticated, isAdmin }) => {
  // Si el usuario no está autenticado, redirigir a la página de login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Si el usuario es un administrador y la ruta es de admin, renderizar el elemento
  if (isAdmin && isAdminRoute) {
    return element;
  }

  // Si el usuario es un usuario regular y la ruta no es de admin, renderizar el elemento
  if (!isAdmin && !isAdminRoute) {
    return element;
  }

  // Si el usuario está autenticado pero no tiene permiso, redirigir a la página principal o dashboard
  return isAdmin ? <Navigate to="/admin/dashboard" /> : <Navigate to="/" />;
};

export default ProtectedRoute;
