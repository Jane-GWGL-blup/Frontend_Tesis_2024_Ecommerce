import React from 'react';
import { Card,Button,Row,Col } from 'react-bootstrap';
import "../../styles/components/cart.css";


const CartTable = ({ items, handleQuantityChange, handleRemoveItem }) => {
  return (
    <div className="cart-items">
      {items.length > 0 ? (
        items.map(item => (
          <Card key={item.id} className="mb-3">
            <Row className="align-items-center">
              <Col md={3}>
                <Card.Img variant="top" src={item.product.imageUrl || "https://via.placeholder.com/150"} />
              </Col>
              <Col md={6}>
                <Card.Body>
                  <Card.Title>{item.product.name}</Card.Title>
                  <Card.Text>{item.product.description}</Card.Text>
                  <div>
                    <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                    <input
                      type="number"
                      id={`quantity-${item.id}`}
                      value={item.quantity}
                      min="1"
                      onChange={(e) => handleQuantityChange(item.product.id, parseInt(e.target.value))}
                      className="form-control w-25 d-inline-block ml-2"
                    />
                  </div>
                  <p className="mt-2">Unit Price: ${item.product.price.toFixed(2)}</p>
                </Card.Body>
              </Col>
              <Col md={3} className="text-center">
                <Button variant="danger" onClick={() => handleRemoveItem(item.product.id)}>Remove</Button>
              </Col>
            </Row>
          </Card>
        ))
      ) : (
        <p className="text-center">No items in cart</p>
      )}
    </div>
  );
};

export default CartTable;
