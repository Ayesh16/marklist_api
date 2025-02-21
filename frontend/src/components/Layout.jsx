import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const role = localStorage.getItem("role") || "user"; // Get role from localStorage
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex">
    {/* Sidebar */}
    <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} role={role} />

    {/* Main Content */}
    <div className={`flex-1 transition-all duration-300 ${isOpen ? "ml-64" : "ml-16"}`}>
      {/* Navbar */}
      <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {/* Main Page Content */}
      <main className="mt-16 p-4 bg-gray-100 min-h-screen">
        <Outlet />
      </main>
    </div>
  </div>
  );
};

export default Layout;
