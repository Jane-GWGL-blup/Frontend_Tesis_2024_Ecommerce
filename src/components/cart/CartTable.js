import React from 'react';
import { Table } from 'react-bootstrap';
import CartItem from './CartItem';

const CartTable = ({ items, handleQuantityChange, handleRemoveItem }) => {
  return (
    <Table  bordered hover>
      <thead>
        <tr className="text-center">
          <th>Product</th>
          <th>Description</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>Total Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.length > 0 ? (
          items.map(item => (
            <CartItem 
              key={item.id} 
              item={item} 
              handleQuantityChange={handleQuantityChange} 
              handleRemoveItem={handleRemoveItem} 
            />
          ))
        ) : (
          <tr>
            <td colSpan="5">No items in cart</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default CartTable;
