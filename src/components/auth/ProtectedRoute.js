import React from 'react';
import { Navigate } from 'react-router-dom';

// Componente de Ruta Protegida
const ProtectedRoute = ({ element, isAllowed }) => {
  return isAllowed ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
