import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/* import HomePage from './pages/home/HomePage'
import RegisterPage from './pages/auth/RegisterPage'
import LoginPage from './pages/auth/LoginPage'
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import ProductListPage from './pages/product/ProductListPage';
import ManageProductsPage from './pages/admin/ManageProductPage';
import AdminProductCreate from './pages/admin/AdminProductCreate';
import AdminLayout from './components/admin/AdminLayout'; */
/* import UserProfile from './pages/UserProfile'; */

import {
  HomePage, 
  RegisterPage, LoginPage, ForgotPasswordPage, ResetPasswordPage,
  AdminDashboardPage, ManageProductPage, ManageCategoryPage, ProductCreatePage, CategoryCreatePage,
  ProductListPage
} from './pages'

import AdminLayout from './components/admin/AdminLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage/>} />

        {/* Rutas para productos accesibles por usuarios y administradores */}
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/categories" element={<ProductListPage />} />

        {/* Rutas de administración anidadas */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboardPage />} />
          <Route path="products" element={<ManageProductPage />} />
          <Route path="products/create" element={<ProductCreatePage />} />
          <Route path="categories" element={<ManageCategoryPage />} />
          <Route path="categories/create" element={<CategoryCreatePage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
