import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  bg-gradient-to-r from-gray-200 via-purple-400 to-pink-400 text-white  px-6">

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Navbar Section */}
      <nav className="w-full flex justify-between items-center py-4 px-8 absolute top-0">
        {/* Logo */}
        <img src="/student.jpg" alt="Logo" className="h-12 rounded-full border-2 border-purple-500 shadow-lg object-cover" />
        
        {/* Navigation Buttons */}
        <div className="flex space-x-4">
          <Link to="/login" className="bg-gray-300 hover:bg-gray-400 text-purple-700 px-6 py-2 rounded-lg transition duration-300 shadow-md">
            Login
          </Link>
          <Link to="/register" className="bg-gray-300 hover:bg-gray-400 text-purple-700 px-6 py-2 rounded-lg transition duration-300 shadow-md">
            Register
          </Link>
        </div>
      </nav>
      
      {/* Image Section */}
      <div className="relative flex justify-center mt-20">
        <img
          src="/Student1.jpg"
          alt="Student Portal"
          className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full border-4 border-purple-500 shadow-lg object-cover"
        />
      </div>
      
      {/* Hero Section */}
      <div className="relative max-w-4xl w-full text-center text-white p-6">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Welcome to Marks Management System
        </h1>
        <p className="text-lg mb-6">Manage student marks efficiently</p>
      </div>
    </div>
  );
};

export default Home;
