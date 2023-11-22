import React from 'react';
import { createRoot } from 'react-dom/client';

import { Provider as AuthProvider } from './contexts/AuthContext';
import { Provider as ProductProvider } from './contexts/ProductContext';
import { Provider as PostProvider } from './contexts/PostContext';
import { Provider as CartItemProvider } from './contexts/CartItemContext';

import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <AuthProvider>
    <ProductProvider>
      <PostProvider>
        <CartItemProvider>
          <App />
        </CartItemProvider>
      </PostProvider>
    </ProductProvider>
  </AuthProvider>
);
