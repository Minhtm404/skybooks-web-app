import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppLayout } from './components/index';
import {
  AboutUs,
  ContactInfo,
  DeliveryPolicy,
  ExchangePolicy,
  Home,
  Login,
  NewArrival,
  PaymentPolicy,
  PrivacyPolicy,
  ProductDetails,
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

            <Route path="/products/:alias" element={<ProductDetails />} />

            <Route path="/new-arrival" element={<NewArrival />} />

            <Route path="/login" element={<Login />} />

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
