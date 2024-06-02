import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
/* import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage'; */
import HomePage from './pages/home/HomePage'
import RegisterPage from './pages/auth/RegisterPage'
import LoginPage from './pages/auth/LoginPage'
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import ProductListPage from './pages/product/ProductListPage';
import ManageProductsPage from './pages/admin/ManageProductPage';
/* import UserProfile from './pages/UserProfile'; */

function App(){
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/admin-products" element={<ManageProductsPage />} />
        </Routes>
      </Router>
  );
}; 

export default App;
