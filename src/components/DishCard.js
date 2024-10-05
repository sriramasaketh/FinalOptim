import React from 'react';

const DishCard = ({ dish, addToOrder }) => (
  <div key={dish.id}>
    <img src={dish.image_url} alt={dish.name} width="100" />
    <h3>{dish.name}</h3>
    <p>Category: {dish.category}</p>
    <p>Price: ${dish.price}</p>
    <p>Available: {dish.available_quantity}</p>
    <button 
      onClick={() => addToOrder(dish)} 
      disabled={dish.available_quantity === 0}>
      {dish.available_quantity === 0 ? 'Out of Stock' : 'Add to Order'}
    </button>
  </div>
);

export default DishCard;
