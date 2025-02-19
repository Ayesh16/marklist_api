import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">Marks System</Link>
        <div>
          <Link to="/login" className="text-white mr-4">Login</Link>
          <Link to="/register" className="text-white">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

