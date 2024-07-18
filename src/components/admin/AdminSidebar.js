import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClipboardList, faBox, faUser, faLayerGroup, faWrench } from '@fortawesome/free-solid-svg-icons';
import '../../styles/components/admin/admin-sidebar.css';
/* import logo from '../../images/logo-2.png'
import logo2 from '../../images/logo.jpg' */

import logo from '../../images/logo.svg'
import logo2 from '../../images/logo3.svg'

const AdminSidebar = ({ onLogout }) => {
  const location = useLocation();

  // Estado local para la simulación de usuario
  const [user] = useState({
    id: 1,
    username: 'AdminUser',
    email: 'admin@example.com',
    role: 'admin',
    isLoggedIn: true,
  });



  return (
    <nav className="col-md-2 col-2 sidebar">
      <div className="sidebar-sticky">
        <Nav className="d-none d-lg-flex">
          <img src={logo} className='logo-admin' />
          {/*           <NavDropdown
            title={
              <span>
                <FontAwesomeIcon icon={faUser} className="px-2" />
                {user.username}
                <img src={logo} className='logo-store'/>
              </span>
            }
            id="basic-nav-dropdown"
            className="custom-dropdown admin-profile"
          >
            <NavDropdown.Item as="div">
              <Nav.Link onClick={onLogout} className="text-dark">
                Logout
              </Nav.Link>
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        {/* PARA PANTALLAS PEQUEÑAS */}
        <Nav className="d-lg-none">
          <img src={logo2} className='logo-admin' />
          {/*           <NavDropdown
            title={
              <span>
                <FontAwesomeIcon icon={faUser} className="" title="User Admin" />
              </span>
            }
            id="basic-nav-dropdown"
            className="custom-dropdown admin-profile"
          >
            <NavDropdown.Item as="div">
              <Nav.Link onClick={onLogout} className="text-dark">
                Logout
              </Nav.Link>
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <div className="divider-admin" />
        {/* PARA PANTALLAS GRANDES*/}
        <Nav className=" d-none d-lg-flex">

          <Nav.Item>
            <NavLink
              to="/admin/dashboard"
              className="d-flex align-items-center nav-item nav-item-sidebar px-3"
              activeClassName="active"
            >
              <FontAwesomeIcon icon={faHome} size="lg" alt="Dashboard" />
              <span className="d-none d-md-inline mx-2">Dashboard</span>
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              to="/admin/orders"
              className="d-flex align-items-center nav-item nav-item-sidebar px-3"
              activeClassName="active"
            >
              <FontAwesomeIcon icon={faClipboardList} size="lg" title="Orders" />
              <span className="d-none d-md-inline mx-2">Orders</span>
            </NavLink>
          </Nav.Item>
          <section className="d-flex align-items-center d-none d-md-inline mx-2 fw-bold admin-sidebar-management">
            <span>Management
              <FontAwesomeIcon icon={faWrench} size="lg" title="Managment" className='mx-2' />
              <div className='divider-admin' />
            </span>
          </section>
          <Nav.Item>
            <NavLink
              to="/admin/products"
              className="d-flex align-items-center nav-item nav-item-sidebar px-3"
              activeClassName="active"
            >
              <FontAwesomeIcon icon={faBox} size="lg" title="Products" />
              <span className="d-none d-md-inline mx-2">Products</span>
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              to="/admin/categories"
              className="d-flex align-items-center nav-item nav-item-sidebar px-3"
              activeClassName="active"
            >
              <FontAwesomeIcon icon={faLayerGroup} size="lg" title="Categories" />
              <span className="d-none d-md-inline mx-2">Categories</span>
            </NavLink>
          </Nav.Item>


        </Nav>
        {/* PARA PANTALLAS PEQUEÑAS*/}
        <Nav className='d-lg-none'>
          <div >
            <Nav.Item>
              <NavLink
                to="/admin/dashboard"
                className="d-flex align-items-center nav-item nav-item-sidebar px-3 "
                activeClassName="active"
              >
                <FontAwesomeIcon icon={faHome} size="lg" title="Dashboard" />
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/admin/orders"
                className="d-flex align-items-center nav-item nav-item-sidebar px-3"
                activeClassName="active"
              >
                <FontAwesomeIcon icon={faClipboardList} size="lg" title="Orders" />
              </NavLink>
            </Nav.Item>
            <section className="mx-2 admin-sidebar-management px-2">
              <FontAwesomeIcon icon={faWrench} size="lg" title="Managment" />
            </section>
            <div className='divider-admin' />
            <Nav.Item>
              <NavLink
                to="/admin/products"
                className="d-flex align-items-center nav-item nav-item-sidebar px-3"
                activeClassName="active"
              >
                <FontAwesomeIcon icon={faBox} size="lg" title="Products" />
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/admin/categories"
                className="d-flex align-items-center nav-item nav-item-sidebar px-3"
                activeClassName="active"
              >
                <FontAwesomeIcon icon={faLayerGroup} size="lg" title="Categories" />
              </NavLink>
            </Nav.Item>
          </div>
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
