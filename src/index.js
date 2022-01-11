import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Quote from './components/Quote';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className="h-screen bg-slate-50 flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<App />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
