import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WelcomeCard  from  "../components/WelcomeCard";
import Courses from "../components/Courses";
import Notices from "../components/Notices";
import CourseChart from "./CourseChart";

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
    <div className="min-h-screen p-6">

    {/* Main Content */}
    <main className="flex-1 p-6">
      <WelcomeCard />

      {/* Main Layout with Courses, Charts & Notices */}
      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        {/* Left Section: Courses & CourseChart */}
        <div className="flex flex-col gap-6 lg:w-3/4">
          <Courses />
          <CourseChart />
        </div>

        {/* Right Section: Notices */}
        <div className="lg:w-1/4">
          <Notices />
        </div>
      </div>
    </main>
  </div>

  );
};

export default Dashboard;