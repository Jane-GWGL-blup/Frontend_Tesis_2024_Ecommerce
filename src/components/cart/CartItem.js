import React from 'react';

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  const handleChange = (e) => {
    onUpdateQuantity(item.productId, parseInt(e.target.value, 10));
  };

  return (
    <div className="cart-item">
      <span>{item.name}</span>
      <span>{item.price}</span>
      <input type="number" value={item.quantity} onChange={handleChange} />
      <button onClick={() => onRemove(item.productId)}>Remove</button>
    </div>
  );
};

export default CartItem;
