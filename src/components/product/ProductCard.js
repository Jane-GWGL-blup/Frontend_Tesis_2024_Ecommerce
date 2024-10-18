/* 30/05/24 */

import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { slugify } from '../../utils/stringUtils';
import '../../styles/components/productCard.css';

const ProductCard = ({ product }) => {
  return (
    <Card className="product-card shadow-sm">
      <Card.Img
        variant="top"
        alt={product.name}
        src={product.imageUrl || 'https://via.placeholder.com/150'}
        className="product-card-img"
      />
      <Card.Body>
        <Card.Title className="product-card-title">{product.name}</Card.Title>
        <Card.Text className="product-card-price">${product.price.toFixed(2)}</Card.Text>
        <Button
          as={Link}
          to={`/products/detail/${slugify(product.name)}`}
          variant="primary"
          className="w-100 mt-2"
        >
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

