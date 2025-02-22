import { FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isOpen }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem('token');
    alert('Logged out successfully!');
    navigate('/');
  };

  return (
    <nav 
  className={`fixed top-0 bg--300 bg-gradient-to-l from-blue-500 to-blue-100 p-4 flex justify-between items-center  z-50
    transition-all duration-300 ${isOpen ? "left-64" : "left-16"} right-0`}
>

      {/* Logo */}
      <Link to="/" className="text-xl font-bold flex items-center">Marks System</Link>

      {/* Logout Button */}
      <button onClick={handleLogout} className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
        <FaSignOutAlt className="mr-2" />
        <span>Logout</span>
      </button>
    </nav>
  );
};

export default Navbar;


