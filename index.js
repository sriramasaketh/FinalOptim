import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import MenuPage from './components/MenuPage';
import OrderForm from './components/OrderForm';
import OrderHistory from './components/OrderHistory';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/order" element={<OrderForm />} />
        <Route path="/history" element={<OrderHistory />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
