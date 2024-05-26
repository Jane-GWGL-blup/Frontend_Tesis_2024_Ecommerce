import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const AdminHeader = ({ onLogout }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='mx-4' />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
        {/* El buscador siempre estará a la derecha */}
        <form className="form-inline my-2 my-lg-0 d-flex align-items-center mx-4 py-2 ml-auto">
          <input className="form-control mr-sm-2 mx-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        {/* Este NavDropdown estará a la izquierda en pantallas grandes */}
        <Nav className="d-none d-lg-flex">
          <NavDropdown 
            title={
              <span>
                <FontAwesomeIcon icon={faUser} className="px-2" />
                AdministradorG
              </span>
            } 
            id="basic-nav-dropdown"
            className="custom-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
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
                <FontAwesomeIcon icon={faUser} className="px-2" />
                AdministradorP
              </span>
            } 
            id="basic-nav-dropdown"
            className="custom-dropdown mx-4">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
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

export default AdminHeader;



/* const AdminHeader = ({ onLogout }) => {
  return (
    <div className='row admin-header-container'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark flex-md-column flex-row align-items-center p-2 px-md-4 mb-3">
        <div className='container'>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <form className="form-inline my-2 my-lg-0 d-flex align-items-center py-2 ">
              <input className="form-control mr-sm-2 mx-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0 " type="submit">Search</button>
            </form>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a className="nav-link d-flex align-items-center" href="#">
                  <FontAwesomeIcon icon={faUser} className="px-2"/> 
                  <span className="d-none d-md-inline ml-2">Products</span> 
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#"><button className="btn btn-outline-light" onClick={onLogout}>Logout</button></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AdminHeader; */
