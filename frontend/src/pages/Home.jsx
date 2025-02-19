import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Marks Management System</h1>
      <p className="text-lg mb-4">Manage student marks </p>
      <div>
        <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded">Login</Link>
        <Link to="/register" className="ml-4 bg-green-500 text-white px-4 py-2 rounded">Register</Link>
      </div>
    </div>
  );
};

export default Home;
