import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import "../../styles/components/cart.css"

const CartSummary = ({ totalItems, totalPrice, discountCode, setDiscountCode, handleApplyDiscount }) => {
  return (
    <Card className="p-3 cart-summary">
      <h3 className="text-center">Summary</h3>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ${totalPrice}</p>
      <Form>
        <Form.Group controlId="discountCode">
          <Form.Label>Discount Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter discount code"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleApplyDiscount} className="mt-2">
          Apply Discount
        </Button>
      </Form>
      <Button variant="success" className="w-100 mt-3">Proceed to Checkout</Button>
    </Card>
  );
};

export default CartSummary;
