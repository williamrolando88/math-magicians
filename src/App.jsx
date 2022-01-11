import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BasicCalculator from './components/BasicCalculator';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Quote from './components/Quote';

const App = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/basic-calculator" element={<BasicCalculator />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
