import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome, faClipboardList, faBox, faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = ({ onLogout }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" >
      <Navbar.Brand as={Link} to="/">
        <span className="d-lg-none mx-4">*BRAND IMAGE P*</span> {/* Imagen para pantallas pequeñas */}
        <span className="d-none d-lg-inline mx-4">*BRAND IMAGE G*</span> {/* Imagen para pantallas grandes */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='mx-4' />
      <Navbar.Collapse id="basic-navbar-nav" className="align-items-center">

        {/*Navbar donde va productos, etc pantallas grandes*/}
        <Nav className="flex-row d-none d-lg-flex px-2 ">
          <Nav.Item>
            <Nav.Link href="#" className="align-items-center">
              <FontAwesomeIcon icon={faHome} size="lg" /> {/* Icono para Inicio */}
              <span className="d-none d-md-inline ml-2 mx-2">Inicio</span> {/* imagen para pantallas pequeñas */}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" className="d-flex align-items-center">
              <FontAwesomeIcon icon={faClipboardList} size="lg" /> {/* Icono para Orders */}
              <span className="d-none d-md-inline ml-2 mx-2">Orders</span> {/* Texto para pantallas pequeñas */}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" className="d-flex align-items-center">
              <FontAwesomeIcon icon={faBox} size="lg" /> {/* Icono para Products */}
              <span className="d-none d-md-inline ml-2 mx-2">Products</span> {/* Texto para pantallas pequeñas */}
            </Nav.Link>
          </Nav.Item>
          {/* Agregar más elementos del menú aquí */}
        </Nav>
        {/* El buscador y el NavDropdown para pantallas grandes siempre estará a la derecha */}
        <div className="d-none d-lg-flex align-items-center" style={{ marginLeft: 'auto' }}>
          <form className="form-inline my-2 my-lg-0 d-flex align-items-center py-2">
            <input className="form-control mr-sm-2 mx-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
          {/* Este es el NavDropdown*/}
          <Nav>
            <NavDropdown
              title={
                <span>
                  <FontAwesomeIcon icon={faUser} className="px-2" />
                  UserG
                </span>
              }
              id="basic-nav-dropdown"
              className="custom-dropdown px-5">
              <NavDropdown.Item as="div">
                <Link to="/login" className="dropdown-item">Login</Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="div">
                <Link to="/register" className="dropdown-item">Register</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as="div">
                <Nav.Link onClick={onLogout} className="text-dark">Logout</Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>

        {/*Navbar donde va productos, etc pantallas pequeñas*/}
        <Nav className="flex-column d-lg-none d-lg-flex px-2 mx-4">
          {/* El buscador */}
          <form className="form-inline my-2 my-lg-0 d-flex align-items-center mx-2 py-2">
            <input className="form-control mr-sm-2 mx-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
          <Nav.Item>
            <Nav.Link href="#" className="d-flex align-items-center">
              <FontAwesomeIcon icon={faClipboardList} size="lg" /> {/* Icono para Orders */}
              <span className="d-md-inline ml-2 mx-2">Orders</span> {/* Texto para pantallas pequeñas */}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" className="d-flex align-items-center ">
              <FontAwesomeIcon icon={faBox} size="lg" /> {/* Icono para Products */}
              <span className="d-md-inline ml-2 mx-2">Products</span> {/* Texto para pantallas pequeñas */}
            </Nav.Link>
          </Nav.Item>
          {/* Agregar más elementos del menú aquí */}
        </Nav>

        {/* Este NavDropdown estará a la derecha en pantallas pequeñas */}
        <Nav className="d-lg-none">
          <NavDropdown
            title={
              <span>
                <FontAwesomeIcon icon={faUser} className="px-2" />
                UserP
              </span>
            }
            id="basic-nav-dropdown"
            className="custom-dropdown mx-4">
            <NavDropdown.Item as="div">
              <Link to="/login" className="dropdown-item">Login</Link>
            </NavDropdown.Item>
            <NavDropdown.Item as="div">
              <Link to="/register" className="dropdown-item">Register</Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as="div">
              <Nav.Link onClick={onLogout} className="text-dark">Logout</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

