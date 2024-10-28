// components/AuthModal.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLock } from '@fortawesome/free-solid-svg-icons'; // Importa el icono de Font Awesome
import '../../../styles/components/modals.css'; // Asegúrate de importar tu archivo CSS

const AuthModal = ({ show, handleClose }) => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/login"); // Redirige al login
        handleClose(); // Cierra el modal
    };

    const handleRegisterClick = () => {
        navigate("/register"); // Redirige al register
        handleClose(); // Cierra el modal
    };

    return (
        <Modal show={show} onHide={handleClose} centered className="auth-modal">
            <Modal.Header closeButton className="modal-header">
                <Modal.Title>
                    <FontAwesomeIcon icon={faUserLock} className="me-2" />
                    Autenticación Requerida
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center modal-body">
                <h5 className="mb-3">Hello! To access your cart,</h5>
                <p><span> you need to </span>
                    <Button className="link-authmodal" variant="outline-warning" onClick={handleLoginClick}>
                       Login.
                    </Button>
                    <span> Not got a Account? Join now in </span>
                    <Button className="link-authmodal" variant="outline-warning" onClick={handleRegisterClick}>
                        Resgister.
                    </Button>
                </p>
            </Modal.Body>
            <Modal.Footer className="modal-footer">
                <Button variant="outline-secondary" onClick={handleClose}>
                    Close 
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AuthModal;
