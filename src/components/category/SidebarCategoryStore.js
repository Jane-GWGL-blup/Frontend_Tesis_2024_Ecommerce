import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRing, faGem, faStar, faHandSparkles } from '@fortawesome/free-solid-svg-icons'; // Importar los iconos que necesites
import '../../styles/components/category.css'

const SidebarCategoryStore = () => {
  // Estado local para la simulación de usuario
  const [user, setUser] = useState({
    id: 1,
    username: 'AdminUser',
    email: 'admin@example.com',
    role: 'admin',
    isLoggedIn: true
  });

  return (
    <nav className="col-md-2 col-2 sidebar">
      <div className="sidebar-sticky ">
        {/* Este NavDropdown estará a la derecha en pantallas grandes */}
        <div className='d-none d-lg-flex section-category'>
        <h4><span>Category</span></h4>
        </div>
{/*         <Nav className="d-none d-lg-flex">
          <NavDropdown
            title={
              <span>
                <FontAwesomeIcon icon={faUser} className="px-2" />
                {user.username}
              </span>
            }
            id="basic-nav-dropdown"
            className="custom-dropdown admin-profile">
            <NavDropdown.Item as="div">
              <Nav.Link onClick={onLogout} className="text-dark">Logout</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav> */}

        {/* Este NavDropdown estará a la derecha en pantallas pequeñas */}
{/*         <Nav className="d-lg-none">
          <NavDropdown
            title={
              <span>
                <FontAwesomeIcon icon={faUser} className="" title="User Admin" />
              </span>
            }
            id="basic-nav-dropdown"
            className="custom-dropdown admin-profile">
            <NavDropdown.Item as="div">
              <Nav.Link onClick={onLogout} className="text-dark">Logout</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav> */}
        <div className='d-lg-none'>
        <h4 className=" mx-2"><span>Category</span></h4>
        </div>

        <div className='divider-category' />

        <Nav className="flex-column ">
          <Nav.Item>
            <Nav.Link as={Link} to="/products" className="d-flex align-items-center text-nav-color-category">
              <FontAwesomeIcon icon={faStar} size="lg" alt="Dashboard" /> {/* Icono para Inicio */}
              <span className="d-none d-md-inline mx-2 ">All products</span> {/* Texto para pantallas pequeñas */}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" className="d-flex align-items-center text-nav-color-category">
              <FontAwesomeIcon icon={faRing} size="lg" title="Orders" /> {/* Icono para Orders */}
              <span className="d-none d-md-inline mx-2 ">Rings</span> {/* Texto para pantallas pequeñas */}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/products" className="d-flex align-items-center text-nav-color-category">
              <FontAwesomeIcon icon={faGem} size="lg" title="Products" /> {/* Icono para Products */}
              <span className="d-none d-md-inline mx-2 ">Necklace</span> {/* Texto para pantallas pequeñas */}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/products" className="d-flex align-items-center text-nav-color-category">
              <FontAwesomeIcon icon={faHandSparkles} size="lg" title="Categories" /> {/* Icono para Products */}
              <span className="d-none d-md-inline mx-2 ">Bracelet</span> {/* Texto para pantallas pequeñas */}
            </Nav.Link>
          </Nav.Item>
          {/* Agregar más elementos del menú aquí */}
        </Nav>
      </div>
    </nav>
  );
};

export default SidebarCategoryStore;

