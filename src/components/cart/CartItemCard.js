// src/components/CartItemCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/components/cart.css';

const CartItemCard = ({ item }) => {
  return (
    <Card className="cart-item-card">
      <Card.Img variant="top" src={item.imageUrl} alt={item.name} className="cart-item-image" />
      <Card.Body>
        <Card.Title className="cart-item-title">{item.name}</Card.Title>
        <Card.Text className="cart-item-price">${item.price}</Card.Text>
        <Button as={Link} to={`/product/${item.slug}`} variant="primary" className="btn-view-product">
          Ver producto
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CartItemCard;
