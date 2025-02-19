import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">About This Project</h2>
      <p className="text-lg text-gray-800 dark:text-gray-300">
        The <strong>Marks Management System</strong> is a web application designed to efficiently manage student marks. 
        It is built using <strong>React</strong> for the frontend, <strong>Node.js</strong> and <strong>Express</strong> for the backend, and <strong>MongoDB</strong> as the database.
      </p>

      <h3 className="text-xl font-bold mt-4 text-gray-900 dark:text-white">Key Features:</h3>
      <ul className="list-disc ml-6 text-gray-800 dark:text-gray-300">
        <li><strong>Student Marks Management:</strong> Add, update, and delete student marks easily.</li>
        <li><strong>Authentication & Security:</strong> Secure login and access control for users.</li>
        <li><strong>Responsive UI:</strong> Fully responsive design built with Tailwind CSS.</li>
        <li><strong>Search & Sorting:</strong> Quickly find and organize student records.</li>
        <li><strong>User-Friendly Navigation:</strong> Intuitive sidebar and clean UI for easy use.</li>
      </ul>

      <div className="mt-6">
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
