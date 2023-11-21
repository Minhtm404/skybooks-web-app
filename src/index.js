import React from 'react';
import { createRoot } from 'react-dom/client';

import { Provider as AuthProvider } from './contexts/AuthContext';
import { Provider as ProductProvider } from './contexts/ProductContext';
import { Provider as PostProvider } from './contexts/PostContext';

import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <AuthProvider>
    <ProductProvider>
      <PostProvider>
        <App />
      </PostProvider>
    </ProductProvider>
  </AuthProvider>
);
