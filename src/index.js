import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/bootswatch/dist/litera/bootstrap.min.css'; 
import './App.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

