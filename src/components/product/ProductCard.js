/* 30/05/24 */
/* ProductCard para cada producto individual. */
import React from 'react';
import { Card, Button } from 'react-bootstrap';



const ProductCard = ({ product }) => {
  return(
    <Card style={{ width: '18rem' }}>
{/*       <Card.Img variant="top" alt={product.name} src={product.imageUrl} /> */}
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
{/*         <Card.Text>{product.description}</Card.Text> */}
        <Card.Text>{product.price}</Card.Text>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );

};

export default ProductCard;

