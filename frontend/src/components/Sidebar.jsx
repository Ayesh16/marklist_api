import { Link ,useNavigate} from "react-router-dom";
import { X } from "react-feather";
import { FaHome, FaBook, FaCalendarAlt, FaClipboardList, FaBell, FaInfoCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const Sidebar = ({ isOpen, toggleSidebar, role }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    alert("Logged out successfully!");
    navigate("/");
  };
  return (
    <>
    {/* Sidebar for larger screens */}
    <aside
      className={`bg-purple-700 h-screen flex flex-col transition-all duration-300 p-4 md:flex ${
        isOpen ? "w-40" : "w-16"
      } hidden fixed md:relative`}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="text-white p-2 mb-4 focus:outline-none hidden md:block"
      >
        {isOpen ? "⬅" : "➡"}
      </button>

      {/* Navigation Items */}
      <nav className="flex-grow">
        <ul className="space-y-2">
          <li>
            <Link to="/dashboard" className="flex items-center space-x-3 text-white p-2 rounded-lg hover:bg-purple-600 transition">
              <FaHome className="text-xl" />
              {isOpen && <span>Dashboard</span>}
            </Link>
          </li>
          <li>
            <Link to="/dashboard/timetable" className="flex items-center space-x-3 text-white p-2 rounded-lg hover:bg-purple-600 transition">
              <FaCalendarAlt className="text-xl" />
              {isOpen && <span>Timetable</span>}
            </Link>
          </li>
          <li>
            <Link to="/dashboard/syllabus" className="flex items-center space-x-3 text-white p-2 rounded-lg hover:bg-purple-600 transition">
              <FaBook className="text-xl" />
              {isOpen && <span>Syllabus</span>}
            </Link>
          </li>
        
          {/* Role-based Navigation */}
          {role === "admin" ? (
            <li>
              <Link to="/dashboard/marks" className="flex items-center space-x-3 text-white p-2 rounded-lg hover:bg-purple-600 transition">
                <FaClipboardList className="text-xl" />
                {isOpen && <span>Marks</span>}
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/dashboard/marks-view" className="flex items-center space-x-3 text-white p-2 rounded-lg hover:bg-purple-600 transition">
                <FaClipboardList className="text-xl" />
                {isOpen && <span>MarksView</span>}
              </Link>
            </li>
          )}
          <li>
            <Link to="/dashboard/about" className="flex items-center space-x-3 text-white p-2 rounded-lg hover:bg-purple-600 transition">
              <FaInfoCircle className="text-xl" />
              {isOpen && <span>About</span>}
            </Link>
          </li>
        </ul>
      </nav>


      {/* Logout Button */}
      <div className="mt-auto flex">
        <button
          onClick={handleLogout}
          className="w-32 flex items-center space-x-3 p-2 rounded-lg bg-white text-purple-700 hover:bg-gray-100 transition"
        >
          <FiLogOut size={24} />
          {isOpen && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </aside>

    {/* Mobile Sidebar (Only visible when toggled) */}
    {isOpen && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        onClick={toggleSidebar}
      ></div>
    )}

    <aside
      className={`fixed top-0 left-0 h-screen w-40 bg-purple-700 p-4 transition-transform duration-300 z-50 md:hidden ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } flex flex-col`}
    >
      {/* Close Button */}
      <button
        onClick={toggleSidebar}
        className="text-white p-2 mb-4 focus:outline-none"
      >
        <X size={24} />
      </button>

      {/* Navigation Items */}
      <nav className="flex-grow">
        <ul className="space-y-2">
          <li>
            <Link to="/dashboard" className="flex items-center space-x-3 text-white p-2 rounded-lg hover:bg-purple-600 transition">
              <FaHome className="text-xl" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/timetable" className="flex items-center space-x-3 text-white p-2 rounded-lg hover:bg-purple-600 transition">
              <FaCalendarAlt className="text-xl" />
              <span>Timetable</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/syllabus" className="flex items-center space-x-3 text-white p-2 rounded-lg hover:bg-purple-600 transition">
              <FaBook className="text-xl" />
              <span>Syllabus</span>
            </Link>
          </li>
        
          {/* Role-based Navigation */}
          {role === "admin" ? (
            <li>
              <Link to="/dashboard/marks" className="flex items-center space-x-3 text-white p-2 rounded-lg hover:bg-purple-600 transition">
                <FaClipboardList className="text-xl" />
                <span>Marks</span>
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/dashboard/marks-view" className="flex items-center space-x-3 text-white p-2 rounded-lg hover:bg-purple-600 transition">
                <FaClipboardList className="text-xl" />
                <span>MarksView</span>
              </Link>
            </li>
          )}
          <li>
            <Link to="/dashboard/about" className="flex items-center space-x-3 text-white p-2 rounded-lg hover:bg-purple-600 transition">
              <FaInfoCircle className="text-xl" />
              <span>About</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="mt-auto flex">
        <button
          onClick={handleLogout}
          className="w-32 flex items-center space-x-3 p-2 rounded-lg bg-white text-purple-700 hover:bg-gray-100 transition"
        >
          <FiLogOut size={24} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  </>
  );
};

export default Sidebar;

