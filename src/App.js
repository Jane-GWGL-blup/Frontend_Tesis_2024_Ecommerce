import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {
  HomePage, 
  RegisterPage, LoginPage, ForgotPasswordPage, ResetPasswordPage,
  AdminDashboardPage, ManageProductPage, ManageCategoryPage, ProductCreatePage, CategoryCreatePage,
  CategoryEditPage, ProductEditPage,
  CartPage, ProductListPage
} from './pages'

import {
  StoreLayout, AdminLayout
} from './components/index'

function App() {
  return (
    <Router>
      <Routes>

        {/* Rutas para productos accesibles por usuarios y administradores */}

        {/* Rutas de administración anidadas */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboardPage />} />
          <Route path="products" element={<ManageProductPage />} />
          <Route path="products/create" element={<ProductCreatePage />} />
          <Route path="products/edit/:id" element={<ProductEditPage />} />
          <Route path="categories" element={<ManageCategoryPage />} />
          <Route path="categories/create" element={<CategoryCreatePage />} />
          <Route path="categories/edit/:id" element={<CategoryEditPage />} />
        </Route>

        {/* Rutas de la tienda anidadas */}
        <Route path="/" element={<StoreLayout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="reset-password" element={<ResetPasswordPage/>} /> 
          <Route path="products" element={<ProductListPage />} />
{/*           <Route path="product/:id" element={<ProductDetailPage />} /> */}
          <Route path="cart" element={<CartPage />} />
{/*           <Route path="checkout" element={<CheckoutPage />} />
          <Route path="profile" element={<UserProfilePage />} />
          <Route path="orders" element={<OrderHistoryPage />} />
          <Route path="order/:id" element={<OrderDetailPage />} /> */}
        </Route>

      </Routes>
    </Router>
  );
};

export default App;
