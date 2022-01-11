import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 bg-slate-50 w-screen shadow">
      <nav className="flex justify-between px-6 py-4">
        <h1 className="text-2xl font-semibold font-serif">Math Magicians</h1>
        <div className="flex text-xl">
          <a className="border-r px-4 hover:text-orange-400" href="#">
            Home
          </a>
          <a className="border-r px-4 hover:text-orange-400" href="#">
            Calculator
          </a>
          <a className="px-4 hover:text-orange-400" href="#">
            Quote
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
