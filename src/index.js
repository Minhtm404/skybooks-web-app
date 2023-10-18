import React from 'react';
import { createRoot } from 'react-dom/client';

import { Provider as ProductProvider } from './contexts/ProductContext';

import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <ProductProvider>
    <App />
  </ProductProvider>
);
