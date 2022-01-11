import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Quote from './components/Quote';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <div className="h-screen bg-slate-50 flex items-center justify-center">
      {/* <Home /> */}
      {/* <Calculator /> */}
      <Quote />
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);
