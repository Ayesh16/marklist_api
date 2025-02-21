import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  useEffect(() => {
    const userRole = localStorage.getItem("role");
    if (!userRole) {
      alert("Please log in first!");
      navigate("/login");
    } else {
      setRole(userRole);
    }
  }, [navigate]);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="bg-white p-6 rounded-lg shadow-md text-center w-96">
        <h2 className="text-2xl font-bold text-center">Dashboard</h2>
        <p className="text-gray-500">Welcome to Aprendo</p>
        <p className="mt-4 text-lg">Logged in as: <strong>{role}</strong></p>
      </div>
    </div>
  );
};

export default Dashboard;
