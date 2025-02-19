import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  
  const [role, setRole] = useState("");

  useEffect(() => {
    const userRole = localStorage.getItem("role");
    console.log("Fetched role from storage:", userRole);
    setRole(userRole || "undefined");
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-blue-900 text-white p-5 md:min-h-screen">
        <h2 className="text-xl font-bold mb-5">Dashboard</h2>
        <ul>
          <li className="mb-3 p-2 hover:bg-blue-700 rounded">
            <Link to="/about">About</Link>
          </li>
          <li className="mb-3 p-2 hover:bg-blue-700 rounded">
            <Link to="/syllabus">Syllabus</Link>
          </li>
          <li className="mb-3 p-2 hover:bg-blue-700 rounded">
            <Link to="/timetable">Timetable</Link>
          </li>

          {role === "admin" ? (
            <li className="mb-3 p-2 hover:bg-blue-700 rounded">
              <Link to="/marks">Marks Management</Link>
            </li>
           ) : (
            <li className="mb-3 p-2 hover:bg-blue-700 rounded">
              <Link to="/marks-view">View Marks</Link>
            </li>
          )}
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Mark Management System</h1>
        </header>

        <main className="p-6 text-center md:text-left max-w-lg mx-auto flex-grow">
          <h2 className="text-2xl font-bold">Welcome to Dashboard</h2>
          <p className="mb-4">Logged in as: <strong>{role}</strong></p>
          
          {/* Responsive Image */}
          <div className="flex justify-center">
          <img
            src="/student.jpg"
            alt="Student Portal"
            className="w-40  mt-15 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full border-4 border-purple-500 shadow-lg"
          />
        </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
