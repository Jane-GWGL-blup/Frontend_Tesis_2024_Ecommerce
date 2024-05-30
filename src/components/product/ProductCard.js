/* 30/05/24 */
/* ProductCard para cada producto individual. */
import React from 'react';
import { Card, Button } from 'react-bootstrap';



const ProductCard = ({ product }) => {
  return(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" alt={product.name} src={product.imageUrl} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>{product.price}</Card.Text>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );

};

export default ProductCard;

/* const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.imageUrl} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text"><strong>${product.price}</strong></p>
        <a href={`/product/${product.id}`} className="btn btn-primary">View Details</a>
      </div>
    </div>
  );
};

export default ProductCard; */