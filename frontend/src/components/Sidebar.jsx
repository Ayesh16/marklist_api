import { Link } from "react-router-dom";
import { FaBars, FaInfoCircle, FaCalendarAlt, FaBook, FaClipboardList } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar, role }) => {
  return (
    <aside className={`fixed top-0 left-0 h-full bg-blue-400  shadow-md transition-all duration-300 z-10
        ${isOpen ? "w-64" : "w-16"}`}>

      {/* Sidebar Links */}
      <nav className=" mt-24">
        <ul className="space-y-2">
        <li>
            <Link to="/dashboard/timetable" className="flex items-center px-4 py-2 hover:bg-blue-500 cursor-pointer">
              <FaCalendarAlt className="text-xl" />
              {isOpen && <span className="ml-3">Timetable</span>}
            </Link>
          </li>
          <li>
            <Link to="/dashboard/syllabus" className="flex items-center px-4 py-2 hover:bg-blue-500 cursor-pointer">
              <FaBook className="text-xl" />
              {isOpen && <span className="ml-3">Syllabus</span>}
            </Link>
          </li>
          {/* Show Marks options based on role */}
          {role === "admin" ? (
            <li>
              <Link to="/dashboard/marks" className="flex items-center px-4 py-2 hover:bg-blue-500 cursor-pointer">
                <FaClipboardList className="text-xl" />
                {isOpen && <span className="ml-3">Marks</span>}
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/dashboard/marks-view" className="flex items-center px-4 py-2 hover:bg-blue-500 cursor-pointer">
                <FaClipboardList className="text-xl" />
                {isOpen && <span className="ml-3">MarksView</span>}
              </Link>
            </li>
          )}
          <li>
            <Link to="/dashboard/about" className="flex items-center  px-4 py-2 hover:bg-blue-500 cursor-pointer">
              <FaInfoCircle className="text-xl" />
              {isOpen && <span className="ml-3">About</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

