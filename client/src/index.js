import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


const container = document.getElementById('root')
const rootContainer = ReactDOM.createRoot(container);
rootContainer.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);