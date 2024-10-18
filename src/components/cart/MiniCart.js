import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Badge, Card, Row, Button, Col } from 'react-bootstrap';
import { useCart } from '../../contexts/CartContext';

const MiniCart = () => {
    const { cart, loading } = useCart(); // Accede al estado del carrito y la bandera de carga

    if (loading) {
        // Mostrar un estado de carga si el carrito aún no está listo
        return <Badge bg="warning" pill>Loading...</Badge>;
    }

    return (
        <Dropdown align="end" className="mx-2">
            <Dropdown.Toggle variant="success" id="dropdown-cart">
                <Badge bg="warning" pill>{cart.items.length}</Badge> {/* Muestra la cantidad de items */}
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ width: '360px' }}> {/* Ajusta el ancho del menú */}
                {cart.items.length > 0 ? (
                    <div className="mini-cart-items">
                        {cart.items.map((item, index) => (
                            <Card key={index} className="mb-2">
                                <Card.Body>
                                    <Row>
                                        <Col xs={4}>
                                            <Card.Img
                                                variant="top"
                                                src={item.product.imageUrl || "https://via.placeholder.com/150"}
                                                style={{ height: '80px', objectFit: 'cover' }} // Estilo de la imagen
                                            />
                                        </Col>
                                        <Col xs={8}>
                                            <Card.Title className=''>{item.product.name}</Card.Title>
                                            <Card.Text>
                                                <div className="d-flex align-items-center ">
                                                    <p className='mini-cart-item'>Cantidad: <span>{item.quantity}</span></p>
                                                    <p className='mini-cart-item'>Precio:<span> ${item.product.price.toFixed(2)}</span></p>
                                                </div>
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <Dropdown.Item disabled>
                        Tu carrito está vacío
                    </Dropdown.Item>
                )}
                <Dropdown.Item as={Link} to="/cart">Ver Carrito</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default MiniCart;