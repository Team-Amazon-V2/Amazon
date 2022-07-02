import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PhotoApp from './PhotoApp';

const root = ReactDOM.createRoot(document.getElementById('photo-gallery'));
root.render(
  <React.StrictMode>
    <PhotoApp />
  </React.StrictMode>
);
