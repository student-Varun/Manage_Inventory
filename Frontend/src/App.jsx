import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import HomePage from './pages/HomePage'; 
import Contact from './pages/Contact';
import './index.css';
import Services from './pages/Services';
import AboutPage from './pages/AboutPage';
import FirstPage from './pages/FirstPage';
import ProductInfo from './components/ProductInfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services/>} />
        <Route path= "/about" element={<AboutPage/>} />
        <Route path= "/FirstPage" element={<FirstPage/>} />
        <Route path= "/ProductInfo" element={<ProductInfo/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
