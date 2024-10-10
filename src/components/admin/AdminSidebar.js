import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClipboardList, faBox, faUser, faLayerGroup, faWrench, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import '../../styles/components/admin/admin-sidebar.css';

import logo from '../../images/logo.svg';
import logo2 from '../../images/logo3.svg';

const AdminSidebar = () => {
  


  return (
    <nav className="col-md-2 col-2 sidebar">
      <div className="sidebar-sticky">
        <Nav className="d-none d-lg-flex">
          <img src={logo} className='logo-admin' />
        </Nav>
        {/* PARA PANTALLAS PEQUEÑAS */}
        <Nav className="d-lg-none">
          <img src={logo2} className='logo-admin' />
        </Nav>
        <div className="divider-admin" />
        {/* PARA PANTALLAS GRANDES*/}
        <Nav className="d-none d-lg-flex">
          <Nav.Item>
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) => 
                `d-flex align-items-center nav-item nav-item-sidebar px-3 ${isActive ? 'active' : ''}`
              }
            >
              <FontAwesomeIcon icon={faHome} size="lg" alt="Dashboard" />
              <span className="d-none d-md-inline mx-2">Dashboard</span>
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              to="/admin/users"
              className={({ isActive }) => 
                `d-flex align-items-center nav-item nav-item-sidebar px-3 ${isActive ? 'active' : ''}`
              }
            >
              <FontAwesomeIcon icon={faUser} size="lg" title="Orders" />
              <span className="d-none d-md-inline mx-2">users</span>
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              to="/admin/orders"
              className={({ isActive }) => 
                `d-flex align-items-center nav-item nav-item-sidebar px-3 ${isActive ? 'active' : ''}`
              }
            >
              <FontAwesomeIcon icon={faClipboardList} size="lg" title="Orders" />
              <span className="d-none d-md-inline mx-2">Orders</span>
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              to="/admin/invoices"
              className={({ isActive }) => 
                `d-flex align-items-center nav-item nav-item-sidebar px-3 ${isActive ? 'active' : ''}`
              }
            >
              <FontAwesomeIcon icon={faClipboardCheck} size="lg" title="Orders" />
              <span className="d-none d-md-inline mx-2">Invoices</span>
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
              className={({ isActive }) => 
                `d-flex align-items-center nav-item nav-item-sidebar px-3 ${isActive ? 'active' : ''}`
              }
            >
              <FontAwesomeIcon icon={faBox} size="lg" title="Products" />
              <span className="d-none d-md-inline mx-2">Products</span>
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              to="/admin/categories"
              className={({ isActive }) => 
                `d-flex align-items-center nav-item nav-item-sidebar px-3 ${isActive ? 'active' : ''}`
              }
            >
              <FontAwesomeIcon icon={faLayerGroup} size="lg" title="Categories" />
              <span className="d-none d-md-inline mx-2">Categories</span>
            </NavLink>
          </Nav.Item>
        </Nav>
        {/* PARA PANTALLAS PEQUEÑAS*/}
        <Nav className='d-lg-none'>
          <div>
            <Nav.Item>
              <NavLink
                to="/admin/dashboard"
                className={({ isActive }) => 
                  `d-flex align-items-center nav-item nav-item-sidebar px-3 ${isActive ? 'active' : ''}`
                }
              >
                <FontAwesomeIcon icon={faHome} size="lg" title="Dashboard" />
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/admin/orders"
                className={({ isActive }) => 
                  `d-flex align-items-center nav-item nav-item-sidebar px-3 ${isActive ? 'active' : ''}`
                }
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
                className={({ isActive }) => 
                  `d-flex align-items-center nav-item nav-item-sidebar px-3 ${isActive ? 'active' : ''}`
                }
              >
                <FontAwesomeIcon icon={faBox} size="lg" title="Products" />
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/admin/categories"
                className={({ isActive }) => 
                  `d-flex align-items-center nav-item nav-item-sidebar px-3 ${isActive ? 'active' : ''}`
                }
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
