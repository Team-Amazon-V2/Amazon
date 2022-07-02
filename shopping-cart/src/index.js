import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CartApp from './CartApp';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('cart'));
root.render(
  <React.StrictMode>
    <CartApp />
  </React.StrictMode>
);

