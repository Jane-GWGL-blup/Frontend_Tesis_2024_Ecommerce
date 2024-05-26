import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4">
      <Container>
        <Row>
          <Col md={2}>
            <p>
              *Brand Image*
            </p>
          </Col>
          <Col md={3}>
            <h5>About Us</h5>
            <p>
              We are a company dedicated to providing the best services to our customers. Our goal is to meet your needs and exceed your expectations.
            </p>
          </Col>
          <Col md={2}>
            <h5>Help</h5>
            <div>
              <ul>
                <li>FAQ</li>
                <li>Contact us</li>
              </ul>
            </div>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> Email: info@example.com
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> Phone: +123 456 7890
            </p>
          </Col>
          <Col md={2}>
            <h5>Follow Us</h5>
            <div>
              <a href="https://facebook.com" className="text-white m-3">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://twitter.com" className="text-white m-3">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://instagram.com" className="text-white m-3">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </Col>
        </Row>
        <div className='divider'/>
        <Row className="mt-4">
          <Col className="text-center">
            <p className="mb-0">&copy; 2024 MyCompany. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
