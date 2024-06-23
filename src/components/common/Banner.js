import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import '../../styles/components/banner.css'

const Banner = ({ banners }) => {
  return (
    <Carousel>
      {banners.map((banner, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 banner-image-home"
            src={banner.imageUrl}
            alt={`Slide ${index + 1}`}
          />
          <div className='carousel-caption-banner'>
            <Button href={banner.ctaLink} variant="primary" className="banner-button-home">
              {banner.ctaText}
            </Button>
          </div>
          {/*<Carousel.Caption className="banner-content">
            <h2>{banner.title}</h2>
            <p>{banner.subtitle}</p>
            <Button href={banner.ctaLink} variant="primary" className="banner-button">
              {banner.ctaText}
            </Button>
          </Carousel.Caption>*/}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Banner;

