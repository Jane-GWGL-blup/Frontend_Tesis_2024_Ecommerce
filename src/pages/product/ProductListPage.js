/* 30/05/24 */
/* ProductListPage, muestra la lista completa de productos. */
import React from 'react';
/* import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import LoadingComponent from '../../components/common/Spinner';
import ProductList from '../../components/product/ProductList'; */
import { Header, Footer, LoadingComponent, ProductList} from '../../components';

const ProductListPage = () => {
  const allProducts = [
    {
      id: 1,
      name: 'Gaming Laptop',
      description: 'High performance laptop for gaming.',
      price: 1299.99,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Wireless Mouse',
      description: 'Ergonomic wireless mouse with long battery life.',
      price: 49.99,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Mechanical Keyboard',
      description: 'RGB backlit mechanical keyboard with customizable keys.',
      price: 99.99,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: '4K Monitor',
      description: '27-inch 4K UHD monitor with HDR support.',
      price: 399.99,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      name: 'Gaming Headset',
      description: 'Surround sound gaming headset with noise-cancelling mic.',
      price: 79.99,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 6,
      name: 'Smartphone',
      description: 'Latest model smartphone with high resolution camera.',
      price: 999.99,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 7,
      name: 'Smartwatch',
      description: 'Smartwatch with fitness tracking and heart rate monitor.',
      price: 199.99,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 8,
      name: 'Bluetooth Speaker',
      description: 'Portable Bluetooth speaker with deep bass and long battery life.',
      price: 59.99,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 9,
      name: 'Tablet',
      description: '10-inch tablet with high resolution display and large storage.',
      price: 499.99,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 10,
      name: 'Fitness Tracker',
      description: 'Wearable fitness tracker with sleep monitoring.',
      price: 79.99,
      imageUrl: 'https://via.placeholder.com/150',
    },
    // Agrega más productos según sea necesario
  ];

  return (
    <div>
      <Header />
      <main>
        <LoadingComponent>
          <div className="container">
            <h1>Products</h1>
            <ProductList products={allProducts} title="All Products" />
          </div>
        </LoadingComponent>
      </main>
      <Footer />
    </div>
  );
}

export default ProductListPage;
