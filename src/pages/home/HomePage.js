import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import LoadingComponent from '../../components/common/Spinner';
import Banner from '../../components/common/Banner';
import ProductList from '../../components/product/ProductList';


const HomePage = () => {

  const banners = [
    {
      imageUrl: 'https://via.placeholder.com/1500x500',
    },
    {
      imageUrl: 'https://www.antevenio.com/wp-content/uploads/2016/04/20-ejemplos-de-banners-creativos.jpg',
    },
    // Agrega más banners según sea necesario
  ];

  const featuredProducts = [
    {
      id: 10,
      name: 'Fitness Tracker',
      description: 'Wearable fitness tracker with sleep monitoring.',
      price: 79.99,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 11,
      name: 'Fitness Tracker',
      description: 'Wearable fitness tracker with sleep monitoring.',
      price: 79.99,
      imageUrl: 'https://via.placeholder.com/150',
    },

  ];

  const newProducts = [
    // Nuevos productos
    {
      id: 8,
      name: 'Bluetooth Speaker',
      description: 'Portable Bluetooth speaker with deep bass and long battery life.',
      price: 59.99,
      imageUrl: 'https://via.placeholder.com/150',
    }
  ];


  /*   const banners = [
      {
        imageUrl: 'https://via.placeholder.com/1500x500',
        title: '¡Gran Venta de Verano!',
        subtitle: 'Aprovecha nuestras increíbles ofertas en productos seleccionados.',
        ctaText: 'Compra Ahora',
        ctaLink: '/shop',
      },
      {
        imageUrl: 'https://www.antevenio.com/wp-content/uploads/2016/04/20-ejemplos-de-banners-creativos.jpg',
        title: '¡Ofertas Exclusivas!',
        subtitle: 'Descuentos solo por tiempo limitado.',
        ctaText: 'Ver Ofertas',
        ctaLink: '/offers',
      },
   
    ]; */

  return (
    <div>
      <Header />
      <main>
        <LoadingComponent>
          {/* Contenido del HomePage */}
          <Banner banners={banners} />
          <div className="container">
            <ProductList products={featuredProducts} title="Featured Products" />
            <ProductList products={newProducts} title="New Arrivals" />
          </div>
        </LoadingComponent>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
