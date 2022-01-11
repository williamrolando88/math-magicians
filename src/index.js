import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <main className="h-screen bg-slate-50">
      <Home />
      {/* <Calculator /> */}
    </main>
  </React.StrictMode>,
  document.getElementById('root'),
);
