import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="fixed top-0 left-0 shadow w-full px-6 py-4">
    <nav className="flex justify-between items-center text-2xl">
      <h1 className="text-3xl font-semibold font-serif">Math Magicians</h1>
      <div>
        <Link className="border-r px-4 hover:text-orange-500" to="/">
          Home
        </Link>
        <Link
          className="border-r px-4 hover:text-orange-500"
          to="/basic-calculator">
          Calculator
        </Link>
        <Link className="px-4 hover:text-orange-500" to="/quote">
          Quote
        </Link>
      </div>
    </nav>
  </header>
);

export default Navbar;
