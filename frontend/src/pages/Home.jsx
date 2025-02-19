import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full  rounded-lg  text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
          Welcome to Marks Management System
        </h1>
        <p className="text-lg text-gray-700 mb-6">Manage student marks efficiently</p>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/Student1.jpg"
            alt="Student Portal"
            className="w-40 h-40 mt-15 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full border-4 border-purple-500 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
