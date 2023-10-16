import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppLayout } from './components/index';
import {
  AboutUs,
  ContactInfo,
  DeliveryPolicy,
  ExchangePolicy,
  Home,
  PaymentPolicy,
  PrivacyPolicy,
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
