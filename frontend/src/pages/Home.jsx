import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Animated.gif')" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative max-w-4xl w-full text-center text-white p-6">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Welcome to Marks Management System
        </h1>
        <p className="text-lg mb-6">Manage student marks efficiently</p>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/Student1.jpg"
            alt="Student Portal"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full border-4 border-purple-500 shadow-lg object-cover"
          />
        </div>

        {/* Buttons */}
        <div className="justify-center mt-10 flex space-x-4">
          <Link
            to="/login"
            className=" bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition duration-300 shadow-md"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition duration-300 shadow-md"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
