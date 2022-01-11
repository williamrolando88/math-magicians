import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <h1>Math Magicians</h1>
        <div>
          <Link>Home</Link>
          <Link>Calculator</Link>
          <Link>Quote</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
