import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRing, faGem, faStar, faHandSparkles } from '@fortawesome/free-solid-svg-icons';
import '../../styles/components/user.css'; // Importa el archivo CSS

const UserProfile = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  const handleToggleView = () => {
    setIsMobileView(!isMobileView);
  };

  return (
    <div className="container">
      {/* Pantallas Grandes */}
      <div className="row">
        <div className={`col-md-4 ${isMobileView ? 'd-none' : 'd-block'}`}>
          <img src=''/>
          <Nav className="flex-column sidebar-profile">
            <Nav.Item>
              <Nav.Link as={Link} to="/profile/products" className="d-flex align-items-center text-nav-color-category">
                <FontAwesomeIcon icon={faStar} size="lg" alt="Dashboard" />
                <span className="mx-2">All Products</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/profile/orders" className="d-flex align-items-center text-nav-color-category">
                <FontAwesomeIcon icon={faRing} size="lg" title="Orders" />
                <span className="mx-2">Orders</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/profile/necklaces" className="d-flex align-items-center text-nav-color-category">
                <FontAwesomeIcon icon={faGem} size="lg" title="Products" />
                <span className="mx-2">Necklaces</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/profile/bracelets" className="d-flex align-items-center text-nav-color-category">
                <FontAwesomeIcon icon={faHandSparkles} size="lg" title="Categories" />
                <span className="mx-2">Bracelets</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className={`col-md-8 ${isMobileView ? 'd-none' : 'd-block'}`}>
          <p>Nombre Apellido</p>
          {/* Contenido del perfil */}
        </div>
      </div>

      {/* Pantallas pequeñas */}
      {isMobileView && (
        <div className="mobile-view">
          <Nav className="flex-column sidebar-profile">
            <Nav.Item>
              <Nav.Link as={Link} to="/profile/products" className="d-flex align-items-center text-nav-color-category">
                <FontAwesomeIcon icon={faStar} size="lg" alt="Dashboard" />
                <span className="mx-2">All Products</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/profile/orders" className="d-flex align-items-center text-nav-color-category">
                <FontAwesomeIcon icon={faRing} size="lg" title="Orders" />
                <span className="mx-2">Orders</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/profile/necklaces" className="d-flex align-items-center text-nav-color-category">
                <FontAwesomeIcon icon={faGem} size="lg" title="Products" />
                <span className="mx-2">Necklaces</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/profile/bracelets" className="d-flex align-items-center text-nav-color-category">
                <FontAwesomeIcon icon={faHandSparkles} size="lg" title="Categories" />
                <span className="mx-2">Bracelets</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Button variant="secondary" onClick={handleToggleView} className="mt-3">
            Back to Profile
          </Button>
        </div>
      )}

      {/* Botón para cambiar a vista móvil en pantallas pequeñas */}
      {!isMobileView && (
        <div className="d-block d-md-none text-center mt-3">
          <Button variant="primary" onClick={handleToggleView}>
            Open Menu
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
