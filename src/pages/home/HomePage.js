import React from 'react';
/* import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import LoadingComponent from '../../components/common/Spinner';
import Banner from '../../components/common/Banner';
import ProductList from '../../components/product/ProductList'; */
import {
  Header, Footer, LoadingComponent,
  Banner, ProductList,
  CategoryListCarousel
} from '../../components';

const HomePage = () => {

  const banners = [
    {
      imageUrl: 'https://via.placeholder.com/1500x500',
      ctaText: 'Ver Ofertas',
    },
    {
      imageUrl: 'https://www.antevenio.com/wp-content/uploads/2016/04/20-ejemplos-de-banners-creativos.jpg',
      ctaText: 'Ver Ofertas',
    },
    // Agrega más banners según sea necesario
  ];


  const categoryBanners = [
    {
      imageUrl: 'https://belcorpperu.vtexassets.com/arquivos/ids/273286-800-auto?v=638242852684430000&width=800&height=auto&aspect=true',
      title: 'Earrings',
      ctaLink: '/shop',
    },
    {
      imageUrl: 'https://esikaperu.vtexassets.com/arquivos/ids/271247-500-auto?v=638242754909030000&width=500&height=auto&aspect=true',
      title: 'Rings',
      ctaLink: '/shop',
    },
    {
      imageUrl: 'https://esikaperu.vtexassets.com/arquivos/ids/295680-500-auto?v=638448262268900000&width=500&height=auto&aspect=true',
      title: 'Bracelet',
      ctaLink: '/shop',
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
      <Banner banners={banners} />
      <div className="container">
        <ProductList products={featuredProducts} title="Featured Products" />
        <ProductList products={newProducts} title="New Arrivals" />
        <CategoryListCarousel categoryBanners={categoryBanners} title="Categories" />
      </div>
    </div>
  );
}

export default HomePage;

{/* <div>
<Header />
<main>
  <LoadingComponent>
    <Banner banners={banners} />
    <div className="container">
      <ProductList products={featuredProducts} title="Featured Products" />
      <ProductList products={newProducts} title="New Arrivals" />
    </div>
  </LoadingComponent>
</main>
<Footer />
</div> */}