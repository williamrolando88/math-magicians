import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';

const App = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <Calculator />
    </div>
  </BrowserRouter>
);

export default App;
