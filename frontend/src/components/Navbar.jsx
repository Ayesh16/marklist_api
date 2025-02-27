import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FiMenu, FiLogOut, FiMoreHorizontal } from "react-icons/fi";

const Navbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    alert("Logged out successfully!");
    navigate("/");
  };

  return (
    <div className="bg-purple-100 rounded-2xl p-2 flex justify-between items-center shadow-md relative">
    {/* Menu Button for Mobile */}
    <button className="md:hidden" onClick={toggleSidebar}>
      <FiMenu size={24} />
    </button>

    {/* Search Input */}
    <input
      type="text"
      placeholder="Search"
      className="bg-white px-4 py-2 rounded-lg w-1/8 md:w-1/6 outline-none"
    />

    {/* User Profile Section */}
    <div className="relative">
      {/* User Image (Triggers Dropdown) */}
      <button
        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-purple-200 transition"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <img
          src="/User.png" // Dummy user image
          alt="User"
          className="w-10 h-10 rounded-full border-2 border-gray-300"
        />
      </button>

      {/* Dropdown Menu */}
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
          <button className="flex items-center px-4 py-2 hover:bg-gray-100 w-full text-left">
            <img
              src="/User.png"
              alt="User"
              className="w-6 h-6 rounded-full mr-2"
            />
            User Details
          </button>
          <button className="flex items-center px-4 py-2 hover:bg-gray-100 w-full text-left">
            <FiMoreHorizontal className="mr-2" /> More
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 hover:bg-gray-100 w-full text-left text-red-600"
          >
            <FiLogOut className="mr-2" /> Logout
          </button>
        </div>
      )}
    </div>
  </div>
  );
};

export default Navbar;


