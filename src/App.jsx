import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
