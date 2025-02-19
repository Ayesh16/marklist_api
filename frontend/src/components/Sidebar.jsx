import React from "react";

const Sidebar = ({ userRole, setActivePage }) => {
  return (
    <div className="w-64 bg-gray-secondary">
      <h2 className="text-2xl font-bold">Marks System</h2>

      <button
        onClick={() => setActivePage("dashboard")}
        className="w-full text-left px-4 py-2"
      >
        Dashboard
      </button>

      {userRole === "admin" && (
        <>
          <button
            onClick={() => setActivePage("addMarks")}
            className="w-full text-left px-4 py-2"
          >
            Add Marks
          </button>
          <button
            onClick={() => setActivePage("editMarks")}
            className="w-full text-left px-4 py-2"
          >
            Edit Marks
          </button>
          <button
            onClick={() => setActivePage("deleteMarks")}
            className="w-full text-left px-4 py-2"
          >
            Delete Marks
          </button>
        </>
      )}

      {userRole === "user" && (
        <button
          onClick={() => setActivePage("myMarks")}
          className="w-full text-left px-4 py-2"
        >
          My Marks
        </button>
      )}

      <button
        onClick={() => setActivePage("aboutUs")}
        className="w-full text-left px-4 py-2"
      >
        About Us
      </button>

      <button
        onClick={() => setActivePage("yourDetails")}
        className="w-full text-left px-4 py-2"
      >
        Your Details
      </button>
    </div>
  );
};

export default Sidebar;