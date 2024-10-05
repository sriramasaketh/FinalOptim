import React, { useState, useEffect } from 'react';
import { getOrderHistory } from '../services/menuService';
import './OrderHistory.css';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrderHistory().then(data => setOrders(data));
  }, []);

  return (
    <div className="order-history">
      <h1>Order History</h1>
      {orders.map(order => (
        <div key={order.id} className="order-card">
          <h3>Order Date: {order.order_date}</h3>
          <p>Total Price: ${order.total_price}</p>
          <p>Status: {order.status}</p>
          <ul>
            {order.items.map(item => (
              <li key={item.id}>
                {item.name} - Quantity: {item.quantity} - Price: ${item.price}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
