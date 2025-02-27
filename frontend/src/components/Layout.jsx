import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const role = localStorage.getItem("role") || "user"; // Get role from localStorage
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  
  return (
    <div className="flex h-screen overflow-hidden"> {/* Main wrapper should take full height */}
    {/* Sidebar */}
    <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} role={role}/>
    
    {/* Main Content */}
    <div className="flex flex-col flex-1 min-h-screen bg-purple-100">
      {/* Navbar */}
      <Navbar toggleSidebar={toggleSidebar} />
      
      {/* Page Content */}
      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  </div>
  );
};

export default Layout;
