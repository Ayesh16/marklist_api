import { Link } from "react-router-dom";
import { FaBars, FaInfoCircle, FaCalendarAlt, FaBook, FaClipboardList } from "react-icons/fa";
import { useState } from "react";

const Sidebar = ({ isOpen, toggleSidebar, role }) => {

  return (
    <aside className={`fixed top-0 left-0 h-full bg-white shadow-md transition-all duration-300 z-10
        ${isOpen ? "w-64" : "w-16"}`}>
      
      {/* Sidebar Toggle Button */}
      <button className="p-4 flex items-center space-x-3 cursor-pointer" onClick={toggleSidebar}>
        <FaBars className="text-2xl" />
        {isOpen && <span className="text-lg font-semibold">Menu</span>}
      </button>

      {/* Sidebar Links */}
      <nav className="mt-4">
        <ul className="space-y-2">
          <li>
            <Link to="/about" className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer">
              <FaInfoCircle className="text-xl" />
              {isOpen && <span className="ml-3">About</span>}
            </Link>
          </li>
          <li>
            <Link to="/syllabus" className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer">
              <FaBook className="text-xl" />
              {isOpen && <span className="ml-3">Syllabus</span>}
            </Link>
          </li>
          <li>
            <Link to="/timetable" className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer">
              <FaCalendarAlt className="text-xl" />
              {isOpen && <span className="ml-3">Timetable</span>}
            </Link>
          </li>

          {/* Show Marks options based on role */}
          {role === "admin" ? (
            <li>
              <Link to="/marks" className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer">
                <FaClipboardList className="text-xl" />
                {isOpen && <span className="ml-3">Marks</span>}
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/marks-view" className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer">
                <FaClipboardList className="text-xl" />
                {isOpen && <span className="ml-3">MarksView</span>}
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
