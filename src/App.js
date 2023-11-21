import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppLayout } from './components/index';
import {
  AboutUs,
  Account,
  ContactInfo,
  DeliveryPolicy,
  ExchangePolicy,
  ForgotPassword,
  Home,
  Login,
  NewArrival,
  PaymentPolicy,
  PrivacyPolicy,
  ProductDetails,
  Products,
  Register,
  Stores,
  TermsOfService
} from './pages/index';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />

            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/about-us/stores" element={<Stores />} />
            <Route path="/about-us/contact-info" element={<ContactInfo />} />

            <Route path="/collections/:alias" element={<Products />} />

            <Route path="/products/:alias" element={<ProductDetails />} />

            <Route path="/new-arrival" element={<NewArrival />} />

            <Route path="/account" element={<Account />} />
            <Route path="/account/login" element={<Login />} />
            <Route path="/account/register" element={<Register />} />
            <Route path="/account/forgot-password" element={<ForgotPassword />} />

            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/payment-policy" element={<PaymentPolicy />} />
            <Route path="/delivery-policy" element={<DeliveryPolicy />} />
            <Route path="/exchange-policy" element={<ExchangePolicy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
