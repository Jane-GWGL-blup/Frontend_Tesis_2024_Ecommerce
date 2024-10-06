/* 30/05/24 */

import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { slugify } from '../../utils/stringUtils';

const ProductCard = ({ product }) => {
  return(
    <Card style={{ width: '18rem' }}>
{/*       <Card.Img variant="top" alt={product.name} src={product.imageUrl} /> */}
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
{/*         <Card.Text>{product.description}</Card.Text> */}
        <Card.Text>{product.price}</Card.Text>
        <Button as={Link} to={`/products/detail/${slugify(product.name)}`}  variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );

};

export default ProductCard;

