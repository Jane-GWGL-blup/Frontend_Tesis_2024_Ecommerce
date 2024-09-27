import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { isAdmin, isAuthenticated } from './services/AuthService'; 

import {
  HomePage, 
  RegisterPage, LoginPage, ForgotPasswordPage, ResetPasswordPage,
  AdminDashboardPage, ManageProductPage, ManageCategoryPage, ProductCreatePage, CategoryCreatePage,
  CategoryEditPage, ProductEditPage,
  CartPage, ProductListPage
} from './pages'

import {
  StoreLayout, AdminLayout, ProtectedRoute
} from './components/index'

function App() {

  // Verifica si el usuario está autenticado y si es admin
  const isUserAuthenticated = isAuthenticated();
  const isUserAdmin = isAdmin();

  return (
    <Router>
      <Routes>

        {/* Rutas para productos accesibles por usuarios y administradores */}

        {/* Rutas de administración anidadas */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<ProtectedRoute element={<AdminDashboardPage />} isAllowed={isUserAdmin} />} />
          <Route path='dashboard' element={<ProtectedRoute element={<AdminDashboardPage />} isAllowed={isUserAdmin} />} />
          <Route path="products" element={<ProtectedRoute element={<ManageProductPage />} isAllowed={isUserAdmin} />} />
          <Route path="products/create" element={<ProtectedRoute element={<ProductCreatePage />} isAllowed={isUserAdmin} />} />
          <Route path="products/edit/:id" element={<ProtectedRoute element={<ProductEditPage />} isAllowed={isUserAdmin} />} />
          <Route path="categories" element={<ProtectedRoute element={<ManageCategoryPage />} isAllowed={isUserAdmin} />} />
          <Route path="categories/create" element={<ProtectedRoute element={<CategoryCreatePage />} isAllowed={isUserAdmin} />} />
          <Route path="categories/edit/:id" element={<ProtectedRoute element={<CategoryEditPage />} isAllowed={isUserAdmin} />} />
        </Route>

        {/* Rutas de la tienda anidadas */}
        <Route path="/" element={<StoreLayout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
{/*           <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="reset-password" element={<ResetPasswordPage/>} />  */}
          <Route path="products" element={<ProductListPage />} />
          <Route path="cart" element={<CartPage />} />
          {/* Rutas de usuario normal protegidas */}
          {/* <Route path="profile" element={<ProtectedRoute element={<UserProfilePage />} isAllowed={isUserAuthenticated} />} />
          <Route path="orders" element={<ProtectedRoute element={<OrderHistoryPage />} isAllowed={isUserAuthenticated} />} />
          <Route path="order/:id" element={<ProtectedRoute element={<OrderDetailPage />} isAllowed={isUserAuthenticated} />} /> */}
        </Route>

      </Routes>
    </Router>
  );
};

export default App;
