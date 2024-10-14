import React from 'react';
import { Button } from 'react-bootstrap';
import "../../styles/components/cart.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CartItem = ({ item, handleQuantityChange, handleRemoveItem }) => {
  return (
    <tr className='cart-text'>
      <td></td>
      <td >
        <p>{item.product.name.toUpperCase()}</p>
        <p>{item.product.description}</p>
      </td>
      <td className="text-center">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
        >
          -
        </Button>
        <span className="mx-2">{item.quantity}</span>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
        >
          +
        </Button>
      </td>
      <td>{item.product.price}</td>

      <td className='text-center'>
        <FontAwesomeIcon
          onClick={() => handleRemoveItem(item.product.id)}
          icon={faTrash}
          size="lg"
          className='icon-nav-cart-color' />
      </td>
    </tr>
  );
};

export default CartItem;

