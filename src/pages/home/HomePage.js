import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useLocation } from 'react-router-dom'; // Importa useLocation

import {
  Banner, ProductList,
  CategoryListCarousel
} from '../../components';

const HomePage = () => {
  const { userData, authenticated } = useContext(UserContext);
  const [messageVisible, setMessageVisible] = useState(false); // Estado para controlar la visibilidad del mensaje
  const location = useLocation(); // Inicializa useLocation


  useEffect(() => {
    if (authenticated && userData) {
      setMessageVisible(true); // Mostrar el mensaje al iniciar sesión
    }
  }, [authenticated, userData]);

  useEffect(() => {
    // Cuando cambie la ubicación, oculta el mensaje
    setMessageVisible(false);
  }, [location]); // Dependencia en location para detectar cambios de ruta

  const banners = [
    {
      imageUrl: 'https://t4.ftcdn.net/jpg/03/83/21/85/360_F_383218557_t5fC98hOdrg0hr4BsulCZ9mPX9a4uube.jpg',
      ctaText: 'Ver Ofertas',
    },
    {
      imageUrl: 'https://www.antevenio.com/wp-content/uploads/2016/04/20-ejemplos-de-banners-creativos.jpg',
      ctaText: 'Ver Ofertas',
    },
    {
      imageUrl: 'https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg',
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


  return (
    <div>
      {messageVisible && (
        <div className='welcome-message'>
          <h2>Hi, <span>{userData.name}</span>! Welcome to Alma Jewellery</h2> 
        </div>
      )}
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
