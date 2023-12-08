import React from 'react';
import { createRoot } from 'react-dom/client';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { Provider as AuthProvider } from './contexts/AuthContext';
import { Provider as ProductProvider } from './contexts/ProductContext';
import { Provider as PostProvider } from './contexts/PostContext';
import { Provider as CartItemProvider } from './contexts/CartItemContext';
import { Provider as OrderProvider } from './contexts/OrderContext';

import './index.css';
import App from './App';
import global_en from './translations/en/global.json';
import global_vi from './translations/vi/global.json';

i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: localStorage.getItem('lng') ? localStorage.getItem('lng') : 'vi',
  resources: {
    en: {
      global: global_en
    },
    vi: {
      global: global_vi
    }
  }
});

const root = createRoot(document.getElementById('root'));

root.render(
  <AuthProvider>
    <ProductProvider>
      <PostProvider>
        <CartItemProvider>
          <OrderProvider>
            <App />
          </OrderProvider>
        </CartItemProvider>
      </PostProvider>
    </ProductProvider>
  </AuthProvider>
);
