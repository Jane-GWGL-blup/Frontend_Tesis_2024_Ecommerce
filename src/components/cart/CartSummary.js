import React from 'react';
import CartItem from './CartItem';

const CartSummary = ({ cartItems, total, onRemove, onUpdateQuantity }) => {
  return (
    <div className="cart-text">
      <h2>Your Cart</h2>
      {cartItems.map(item => (
        <CartItem 
          key={item.productId} 
          item={item} 
          onRemove={onRemove} 
          onUpdateQuantity={onUpdateQuantity} 
        />
      ))}
      <div className="total">
        Total: ${total}
      </div>
    </div>
  );
};

export default CartSummary;
