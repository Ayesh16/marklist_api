import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const About = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">About This Project</h2>
      <p className="text-lg">
        This is a **Marks Management System** built using **React, Node.js, Express, and MongoDB**.
      </p>
      <h3 className="text-xl font-bold mt-4">Features:</h3>
      <ul className="list-disc ml-6">
        <li> Add, update, and delete student marks</li>
        <li> Secure login with authentication</li>
        <li> Responsive design with Tailwind CSS</li>
        <li> Easy navigation via sidebar</li>
      </ul>
      <div className="p-4">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            <FaArrowLeft />
            Back
          </button>
        </div>
    </div>
  );
};

export default About;
