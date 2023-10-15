import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppLayout } from './components/index';
import { AboutUs, ContactInfo, Home, Stores } from './pages/index';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="about-us/stores" element={<Stores />} />
            <Route path="about-us/contact-info" element={<ContactInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

