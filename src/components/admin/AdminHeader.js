import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../../styles/components/admin/admin-header.css';

const AdminHeader = ({ onLogout, onSearch }) => {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
  };


  return (
    <Navbar /* bg="dark" variant="dark" */ className="admin-header" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav " className='mx-4 nav-toggle' />



      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
        {/* El buscador siempre estará a la derecha */}
        <form className="d-none form-inline my-2 my-lg-0 d-lg-flex align-items-center mx-4 py-2 ml-auto " onSubmit={handleSearchSubmit}>
          <input
            className="form-control mr-sm-2 mx-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        {/* Este NavDropdown estará a la izquierda en pantallas grandes */}
        <Nav className="d-none d-lg-flex ">

          <NavDropdown
            title={
              <span className='nav-item'>
                <FontAwesomeIcon icon={faUser} className="px-2 " />
                AdministradorG
              </span>
            }
            id="basic-nav-dropdown"
            className="custom-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item  onClick={onLogout}>
              Logout
              {/*<Nav.Link as={Link} to="/" onClick={onLogout} className="text-dark">Logout</Nav.Link>*/}
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>

        {/* Este NavDropdown estará a la derecha en pantallas pequeñas */}
        <Nav className="d-lg-none">
          <form className=" form-inline my-2 my-lg-0 d-flex align-items-center mx-4 py-2 ml-auto " onSubmit={handleSearchSubmit}>
            <input
              className="form-control mr-sm-2 mx-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          <NavDropdown
            title={
              <span className='nav-item'>
                <FontAwesomeIcon icon={faUser} className="px-2" />
                AdministradorP
              </span>
            }
            id="basic-nav-dropdown"
            className="custom-dropdown mx-4">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={onLogout}>
              Logout
              {/* <Nav.Link onClick={onLogout} className="text-dark">Logout</Nav.Link> */}
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AdminHeader;

