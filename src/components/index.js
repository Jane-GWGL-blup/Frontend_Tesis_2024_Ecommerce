// src/components/index.js
export { default as AdminLayout } from './admin/AdminLayout';
export { default as StoreLayout } from './store/StoreLayout';

export { default as AdminHeader } from './admin/AdminHeader';
export { default as AdminSidebar } from './admin/AdminSidebar';
export { default as AdminDashboard } from './admin/AdminDashboard';
export { default as AdminProductForm} from './admin/AdminProductForm';
export { default as AdminManageProduct } from './admin/AdminManageProduct';
export { default as AdminEditProductForm } from './admin/AdminEditProductForm';
export { default as AdminCategoryForm} from './admin/AdminCategoryForm';
export { default as AdminManageCategory } from './admin/AdminManageCategory';
export { default as AdminEditCategoryForm } from './admin/AdminEditCategoryForm';


export { default as LoginForm } from './auth/LoginForm';
export { default as RegisterForm } from './auth/RegisterForm';
export { default as ForgotPasswordForm } from './auth/ForgotPasswordForm';
export { default as ResetPasswordForm } from './auth/ResetPasswordForm';

export { default as CartItem } from './cart/CartItem';
export { default as CartSummary } from './cart/CartSummary';

export { default as Banner } from './common/Banner';
export { default as Header } from './common/Header';
export { default as Footer } from './common/Footer';
/* export { default as Navigation } from './common/Navigation';
 */export { default as LoadingComponent } from './common/Spinner';
export { default as NotFound } from './common/NotFound';

export { default as ProductCard } from './product/ProductCard';
/* export { default as ProductDetail } from './product/ProductDetail';
 */
export { default as ProductList } from './product/ProductList';
/* export { default as ProductReview } from './product/ProductReview';
 */
/* export { default as UserProfile } from './user/UserProfile';
export { default as OrderHistory } from './user/OrderHistory';
export { default as OrderDetail } from './user/OrderDetail';
export { default as AddressForm } from './user/AddressForm';
 */

export { default as SidebarCategoryStore } from './category/SidebarCategoryStore';
export { default as CategoryListCarousel } from './category/CategoryListCarousel';

//MODAL
export {default as AlertModal } from './common/modals/AlertModal';

//ADMINMODAL

//CHARTS
export {default as ConversionRateChart } from './admin/charts/ConversionRateChart';
export {default as InventoryStatusChart } from './admin/charts/InventoryStatusChart';
export {default as MonthlySalesChart } from './admin/charts/MonthlySalesChart';
