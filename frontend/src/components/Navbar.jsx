import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');  // Check if the user is logged in

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token
    alert('Logged out successfully!');
    navigate('/login'); // Redirect to login page
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">Marks System</Link>
        <div>
          {!token ? (
            <>
              <Link to="/login" className="text-white mr-4">Login</Link>
              <Link to="/register" className="text-white">Register</Link>
            </>
          ) : (
            <button onClick={handleLogout} className="text-white bg-red-500 px-4 py-2 rounded">Logout</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

