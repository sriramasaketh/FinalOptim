import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DishCard from './DishCard';
import { getMenu } from '../services/menuService';
import './MenuPage.css';

const MenuPage = () => {
  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    getMenu().then(data => setMenu(data));
  }, []);

  const addToOrder = (dish) => {
    if (dish.available_quantity > 0) {
      setOrder([...order, dish]);
    }
  };

  return (
    <div className="menu-page">
      <h1>Menu</h1>
      <div className="menu-items">
        {menu.map((dish) => (
          <DishCard key={dish.id} dish={dish} addToOrder={addToOrder} />
        ))}
      </div>
      <Link to="/order" state={{ order }}>
        <button>Proceed to Order</button>
      </Link>
    </div>
  );
};

export default MenuPage;
