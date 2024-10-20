import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { CartProvider } from './contexts/CartContext';

import { isAdmin, isAuthenticated } from './services/AuthService';

import {
  HomePage,
  RegisterPage, LoginPage,
  UserProfilePage,
  AdminDashboardPage, ManageProductPage, ManageCategoryPage, ProductCreatePage, CategoryCreatePage,
  ProductDetailPage,
  CategoryEditPage, ProductEditPage,
  CartPage, ProductListPage, ManageUserPage,UserCreatePage,AdminManageOrdersPage,AdminOrderDetailsPage,InvoiceDetailsPage,InvoiceListPage, 
  UserOrderHistoryPagePage,AdminManageDiscountsPage,AdminCreateDiscountPage,DiscountEditPage,
  UserOrderHistoryPage} from './pages'

import {
  StoreLayout, AdminLayout, ProtectedRoute
} from './components/index'


function App() {

  // Verifica si el usuario está autenticado y si es admin
  /* const [authenticated, setAuthenticated] = useState(isAuthenticated()); */ // Estado de autenticación
  const isUserAuthenticated = isAuthenticated();
  const isUserAdmin = isAdmin();

  return (
    <UserProvider>
      <CartProvider>
      <Router>
        <Routes>

          {/* Rutas para productos accesibles por usuarios y administradores */}
          <Route path="users/userid/orders" element={<ProtectedRoute element={<UserOrderHistoryPage/>} isAllowed={isUserAdmin} />} />

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
            <Route path="users" element={<ProtectedRoute element={<ManageUserPage/>} isAllowed={isUserAdmin} />} />
            <Route path="users/create" element={<ProtectedRoute element={<UserCreatePage/>} isAllowed={isUserAdmin} />} />
            <Route path="orders" element={<ProtectedRoute element={<AdminManageOrdersPage/>} isAllowed={isUserAdmin} />} />
            <Route path="orders/:id" element={<ProtectedRoute element={<AdminOrderDetailsPage/>} isAllowed={isUserAdmin} />} />
            
            <Route path="invoices/:id" element={<ProtectedRoute element={<InvoiceDetailsPage/>} isAllowed={isUserAdmin} />} />
            <Route path="invoices" element={<ProtectedRoute element={<InvoiceListPage/>} isAllowed={isUserAdmin} />} />
            {/* Rutas para la gestión de descuentos */}
            <Route path="discounts" element={<ProtectedRoute element={<AdminManageDiscountsPage/>} isAllowed={isUserAdmin} />} />
            <Route path="discounts/create" element={<ProtectedRoute element={<AdminCreateDiscountPage/>} isAllowed={isUserAdmin} />} />
            <Route path="discounts/edit/:id" element={<ProtectedRoute element={<DiscountEditPage/>} isAllowed={isUserAdmin} />} />

          </Route>

          {/* Rutas de la tienda anidadas */}
          <Route path="/" element={<StoreLayout />}>
            <Route index element={<HomePage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            {/*           <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="reset-password" element={<ResetPasswordPage/>} />  */}
            <Route path="products" element={<ProductListPage />} />
            <Route path="products/detail/:productName" element={<ProductDetailPage />} />
            <Route path="cart" element={<CartPage />} />
            {/* Rutas de usuario normal protegidas que se usaran despues*/}
            <Route path="profile" element={<ProtectedRoute element={<UserProfilePage />} isAllowed={isUserAuthenticated} />} />
            {/* <Route path="profile" element={<ProtectedRoute element={<UserProfilePage />} isAllowed={isUserAuthenticated} />} />
          <Route path="orders" element={<ProtectedRoute element={<OrderHistoryPage />} isAllowed={isUserAuthenticated} />} />
          <Route path="order/:id" element={<ProtectedRoute element={<OrderDetailPage />} isAllowed={isUserAuthenticated} />} /> */}
          </Route>

        </Routes>
      </Router>
      </CartProvider>
    </UserProvider>
  );
};

export default App;
