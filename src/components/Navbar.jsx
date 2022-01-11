import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="fixed top-0 left-0 bg-slate-50 w-screen shadow">
    <nav className="flex justify-between px-6 py-4">
      <h1 className="text-3xl font-semibold font-serif">Math Magicians</h1>
      <div className="flex text-xl">
        <Link className="border-r px-4 hover:text-orange-400" to="/">
          Home
        </Link>
        <Link className="border-r px-4 hover:text-orange-400" to="/calculator">
          Calculator
        </Link>
        <Link className="px-4 hover:text-orange-400" to="/quote">
          Quote
        </Link>
      </div>
    </nav>
  </header>
);

export default Navbar;
