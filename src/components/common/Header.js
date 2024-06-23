import React, { useState, useEffect, useRef } from 'react';
import { Link} from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Dropdown, Badge, DropdownDivider } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome, faClipboardList, faBox, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../../styles/components/header.css'

const Header = ({ onLogout, cartItems }) => {




  return (
    <Navbar className='header-store' expand="lg" >
      {/*   <div className="d-flex  align-items-center w-100"> */}
      <Navbar.Brand as={Link} to="/">
        <span className="d-lg-none mx-2">*BRAND IMAGE P*</span> {/* Imagen para pantallas pequeñas */}
        <span className="d-none d-lg-inline mx-4">*BRAND IMAGE G*</span> {/* Imagen para pantallas grandes */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-toggle ml-auto' />
      {/* Dropdown para pantallas pequeñas  */}
      <div className="d-lg-none d-flex align-items-center ml-auto">
        {/* Dropdown del usuario para pantallas pequeñas*/}
        <Dropdown align="end" className="ml-2">
          <Dropdown.Toggle id="dropdown-user" className='user-dropdown-toggle'>
            <FontAwesomeIcon icon={faUser} size="lg" className='icon-nav-header-color' />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item >
              <Link to="/login" className="dropdown-item">Login</Link>
            </Dropdown.Item>
            <Dropdown.Item >
              <Link to="/register" className="dropdown-item">Register</Link>
            </Dropdown.Item>
            <Dropdown.Item >
              <span className="dropdown-item" >Perfil</span>
            </Dropdown.Item>
            <DropdownDivider />
            <Dropdown.Item >
              <Link onClick={onLogout} className=" dropdown-item text-dark">Logout</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* Dropdown del Carrito de Compras para pantallas pequeñas*/}
        <Dropdown align="end" className="ml-2 mx-2">
          <Dropdown.Toggle variant="success" id="dropdown-cart" className='cart-dropdown-toggle'>
            <FontAwesomeIcon icon={faShoppingCart} size="lg" className='icon-nav-header-color'/>
            <Badge bg="warning" pill className="ml-1">#</Badge>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/checkout">Tu carrito esta vacio</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      {/* </div> */}

      {/* ELEMENTOS QUE VAN A COLAPSAR  */}
      <Navbar.Collapse id="basic-navbar-nav" className="align-items-center">
        {/*Navbar donde va productos, etc pantallas grandes*/}
        <Nav className="flex-row d-none d-lg-flex px-2 ">
          <Nav.Item>
            {/*             <Nav.Link href="#" className="align-items-center">
              <FontAwesomeIcon icon={faHome} size="lg" /> /* Icono para Inicio 
              <span className="d-none d-md-inline ml-2 mx-2">Categorias</span> /* imagen para pantallas pequeñas 
            </Nav.Link> */}
            <Dropdown  align="start" className="ml-2 mx-2">
              <Dropdown.Toggle id="dropdown-cart" className='dropdown-toggle-header-category'  >
              <FontAwesomeIcon icon={faHome} size="lg" className='icon-nav-header-color'/>
              <span className="d-none d-md-inline ml-2 mx-2 text-nav-header">Categorias</span>
              </Dropdown.Toggle>
              <Dropdown.Menu className='dropdown-menu-categories-bg'>
                <div className='dropdown-menu-categories'>
                <Dropdown.Item as={Link} to="/necklace" className='dropdown-item '>Collar</Dropdown.Item>
                <Dropdown.Item as={Link} to="/necklace" className='dropdown-item '>Collar</Dropdown.Item>
                <Dropdown.Item as={Link} to="/necklace" className='dropdown-item '>Collar</Dropdown.Item>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" className="d-flex align-items-center">
              <FontAwesomeIcon icon={faClipboardList} size="lg" className='icon-nav-header-color'/> {/* Icono para Orders */}
              <span className="d-none d-md-inline ml-2 mx-2 text-nav-header">Orders</span> {/* Texto para pantallas pequeñas */}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/products" className="d-flex align-items-center">
              <FontAwesomeIcon icon={faBox} size="lg" className='icon-nav-header-color'/> {/* Icono para Products */}
              <span className="d-none d-md-inline ml-2 mx-2 text-nav-header">Products</span> {/* Texto para pantallas pequeñas */}
            </Nav.Link>
          </Nav.Item>
          {/* Agregar más elementos del menú aquí */}
        </Nav>
        {/* El buscador y el NavDropdown para pantallas grandes siempre estará a la derecha */}
        <div className="d-none d-lg-flex align-items-center" style={{ marginLeft: 'auto' }}>
          <form className="form-inline my-2 my-lg-0 d-flex align-items-center py-2 search-header">
            <input className="form-control mr-sm-2 mx-2 " type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0 icon-nav-header-color" type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
          {/* Este es el NavDropdown del usuario*/}
          <Dropdown align="end" className="ml-2">
          <Dropdown.Toggle id="dropdown-user" className='user-dropdown-toggle'>
            <FontAwesomeIcon icon={faUser} size="lg" className='icon-nav-header-color' />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item >
              <Link to="/login" className="dropdown-item">Login</Link>
            </Dropdown.Item>
            <Dropdown.Item >
              <Link to="/register" className="dropdown-item">Register</Link>
            </Dropdown.Item>
            <Dropdown.Item >
              <span className="dropdown-item" >Perfil</span>
            </Dropdown.Item>
            <DropdownDivider />
            <Dropdown.Item >
              <Link onClick={onLogout} className=" dropdown-item text-dark">Logout</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

          {/* Dropdown del Carrito de Compras  cartItems.length */}
          <Dropdown align="end" className="mx-3">
            <Dropdown.Toggle variant="success" id="dropdown-cart" className='cart-dropdown-toggle'>
              <FontAwesomeIcon icon={faShoppingCart} size="lg" className='icon-nav-header-color' />
              <Badge bg="warning" pill className="ml-1">#</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {/*             {cartItems.length === 0 ? (
              <Dropdown.Item href="#">Tu carrito está vacío</Dropdown.Item>
            ) : (
              cartItems.map((item, index) => (
                <Dropdown.Item href="#" key={index}>
                  {item.name} - ${item.price}
                </Dropdown.Item>
              ))
            )}
            {cartItems.length > 0 && (
              <Dropdown.Item as={Link} to="/checkout">Ir al pago</Dropdown.Item>
            )} */}
              <Dropdown.Item as={Link} to="/checkout">Tu carrito esta vacio</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {/*Navbar donde va productos, etc pantallas pequeñas*/}
        <Nav className="flex-column d-lg-none d-lg-flex px-2 mx-4">
          {/* El buscador */}
          <form className="form-inline my-2 my-lg-0 d-flex align-items-center mx-2 py-2 search-header">
            <input className="form-control mr-sm-2 mx-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0 icon-nav-header-color" type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
          <Nav.Item>
            <Nav.Link href="#" className="d-flex align-items-center">
              <FontAwesomeIcon icon={faClipboardList} size="lg" className='icon-nav-header-color'/> {/* Icono para Orders */}
              <span className="d-md-inline ml-2 mx-2 text-nav-header">Orders</span> {/* Texto para pantallas pequeñas */}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" className="d-flex align-items-center ">
              <FontAwesomeIcon icon={faBox} size="lg" className='icon-nav-header-color'/> {/* Icono para Products */}
              <span className="d-md-inline ml-2 mx-2 text-nav-header">Products</span> {/* Texto para pantallas pequeñas */}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Dropdown align="start" >
              <Dropdown.Toggle id="dropdown-cart" className='dropdown-toggle-header-category'>
              <FontAwesomeIcon icon={faHome} size="lg" className='icon-nav-header-color'/>
              <span className="d-md-inline ml-2 mx-2 text-nav-header">Categorias</span>
              </Dropdown.Toggle>
              <Dropdown.Menu className='dropdown-menu-categories-ss-bg'>
                <div className='dropdown-menu-categories-ss'>
                <Dropdown.Item as={Link} to="/necklace" className='dropdown-item '>Collar</Dropdown.Item>
                <Dropdown.Item as={Link} to="/necklace" className='dropdown-item '>Collar</Dropdown.Item>
                <Dropdown.Item as={Link} to="/necklace" className='dropdown-item '>Collar</Dropdown.Item>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Item>
          {/* Agregar más elementos del menú aquí */}
        </Nav>


      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

