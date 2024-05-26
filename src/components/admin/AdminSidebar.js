import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClipboardList, faBox, faUser } from '@fortawesome/free-solid-svg-icons'; // Importar los iconos que necesites

const AdminSidebar = ({onLogout}) => {
  return (
      <nav className="col-md-2 col-2 bg-light sidebar">
        <div className="sidebar-sticky ">
          {/* Este NavDropdown estará a la derecha en pantallas grandes */}
          <Nav className="d-none d-lg-flex">
            <NavDropdown 
              title={
                <span>
                  <FontAwesomeIcon icon={faUser} className="px-2" />
                  AdministradorG
                </span>
              } 
              id="basic-nav-dropdown"
              className="custom-dropdown admin-profile">
              <NavDropdown.Item as="div">
                <Nav.Link onClick={onLogout} className="text-dark">Logout</Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* Este NavDropdown estará a la derecha en pantallas pequeñas */}
          <Nav className="d-lg-none">
            <NavDropdown 
              title={
                <span>
                  <FontAwesomeIcon icon={faUser} className="px-2"  />
                </span>
              } 
              id="basic-nav-dropdown"
              className="custom-dropdown admin-profile">
              <NavDropdown.Item as="div">
                <Nav.Link onClick={onLogout} className="text-dark">Logout</Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="flex-column px-2">
            <Nav.Item>
              <Nav.Link href="#" className="d-flex align-items-center">
                <FontAwesomeIcon icon={faHome} size="lg"/> {/* Icono para Inicio */}
                <span className="d-none d-md-inline ml-2 mx-2">Inicio</span> {/* Texto para pantallas pequeñas */}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="d-flex align-items-center">
                <FontAwesomeIcon icon={faClipboardList} size="lg"/> {/* Icono para Orders */}
                <span className="d-none d-md-inline ml-2 mx-2">Orders</span> {/* Texto para pantallas pequeñas */}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="d-flex align-items-center">
                <FontAwesomeIcon icon={faBox} size="lg"/> {/* Icono para Products */}
                <span className="d-none d-md-inline ml-2 mx-2">Products</span> {/* Texto para pantallas pequeñas */}
              </Nav.Link>
            </Nav.Item>
            {/* Agregar más elementos del menú aquí */}
          </Nav>
        </div>
      </nav>
  );
};

export default AdminSidebar;

/* const AdminSidebar = () => {
  return (
    <div className='admin-sidebar-container'>
      <nav className="col-md-2 col-2 bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active d-flex align-items-center" href="#">
                <FontAwesomeIcon icon={faHome} className="px-2"/> 
                <span className="d-none d-md-inline ml-2">Inicio</span> 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center" href="#">
                <FontAwesomeIcon icon={faClipboardList} className="px-2"/> 
                <span className="d-none d-md-inline ml-2">Orders</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center" href="#">
                <FontAwesomeIcon icon={faBox} className="px-2"/> 
                <span className="d-none d-md-inline ml-2">Products</span> 
              </a>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default AdminSidebar; */
