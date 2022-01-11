import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <nav>
      <h1>Math Magicians</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/basic-calculator">Calculator</Link>
        <Link to="/quote">Quote</Link>
      </div>
    </nav>
  </div>
);

export default Navbar;
