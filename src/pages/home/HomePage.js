import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import LoadingComponent from '../../components/common/Spinner';
import Banner from '../../components/common/Banner';

const HomePage = () => {

  const banners = [
    {
      imageUrl: 'https://via.placeholder.com/1500x500',
      title: '¡Gran Venta de Verano!',
      subtitle: 'Aprovecha nuestras increíbles ofertas en productos seleccionados.',
      ctaText: 'Compra Ahora',
      ctaLink: '/shop',
    },
    {
      imageUrl: 'https://via.placeholder.com/1500x500',
      title: '¡Ofertas Exclusivas!',
      subtitle: 'Descuentos solo por tiempo limitado.',
      ctaText: 'Ver Ofertas',
      ctaLink: '/offers',
    },
    // Agrega más banners según sea necesario
  ];

  return (
    <div>
      <Header />
      <main>
        <LoadingComponent>
          {/* Contenido del HomePage */}
          <div>
            <Banner banners={banners} />
            <div>HomePage</div>
          </div>
        </LoadingComponent>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
