import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <Link to="/" className="text-xl font-bold">Marks Management</Link>
      <div>
        {user ? (
          <>
            <span className="mr-4">Hello, {user?.name || "User"}!</span>
            <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="mr-4">Login</Link>
            <Link to="/register" className="bg-green-500 px-3 py-1 rounded">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
