import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CategoryListCarousel = ({ categoryBanners, title }) => {
  // Verifica si banners existe y tiene elementos antes de renderizar el Carousel
  if (!categoryBanners || categoryBanners.length === 0) {
    return null;
  }

  // Dividir los elementos en grupos de tres
  const groupedItems = [];
  for (let i = 0; i < categoryBanners.length; i += 3) {
    groupedItems.push(categoryBanners.slice(i, i + 3));
  }

  return (
    <Container className='mt-5'>
      <h2>{title}</h2>

      {/* Carrusel para pantallas grandes */}
      <div className='d-none d-lg-block'>
        <Carousel fade controls={false} indicators={false}>
          {groupedItems.map((group, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                {group.map((categoryBanner, idx) => (
                  <Col md={4} key={idx} className="carousel-col">
                    <div className="carousel-content">
                      <img
                        className='d-block w-100 banner-image-category-banner'
                        src={categoryBanner.imageUrl}
                        alt={`Slide ${index * 3 + idx + 1}`}
                      />
                      <div className="carousel-caption">
                       <Link to={categoryBanner.catLink} className='button-category-home'><h3>{categoryBanner.title}</h3></Link> 
                        {/* 
                          <Button href={categoryBanner.ctaLink} variant="primary" className="banner-button">
                            {categoryBanner.ctaText}
                          </Button> 
                        */}
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Carrusel para pantallas pequeñas */}
      <div className='d-block d-lg-none'>
        <Carousel fade indicators={false}>
          {categoryBanners.map((categoryBanner, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100 banner-image-category-banner"
                src={categoryBanner.imageUrl}
                alt={`Slide ${index + 1}`}
              />
              <Carousel.Caption className="carousel-caption">
                <h3>{categoryBanner.title}</h3>
                {/* 
                <Button href={banner.ctaLink} variant="primary" className="banner-button">
                  {banner.ctaText}
                </Button>
                */}
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Container>
  );
};

export default CategoryListCarousel;
