import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import OverviewApp from './Overview';

const root = ReactDOM.createRoot(document.getElementById('overview'));
root.render(
  <React.StrictMode>
    <OverviewApp />
  </React.StrictMode>
);

