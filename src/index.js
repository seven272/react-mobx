import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'uimini'
import { BrowserRouter } from 'react-router-dom'
import Store from './Store.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Store>
      <App />
    </Store>
    </BrowserRouter>
  </React.StrictMode>
);

