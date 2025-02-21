import React, { useState } from "react";
import { createMark } from "../services/api";
import { useNavigate } from "react-router-dom";

const AddMarks = () => {
  const navigate = useNavigate();
  const [newMark, setNewMark] = useState({
    student_name: "",
    roll_no: "",
    department: "",
    oops: "",
    ds: "",
    os: "",
    java: "",
    fds: "",
  });

  const token = localStorage.getItem("token");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMark((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createMark(newMark, token);
      alert("Marks added successfully!");
      navigate("/dashboard/marks"); // Redirect back to marks page
    } catch (error) {
      console.error("Error adding marks:", error);
      alert("Failed to add marks.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Marks</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["student_name", "roll_no", "department", "oops", "ds", "os", "java", "fds"].map((field) => (
          <input
            key={field}
            type={field === "student_name" || field === "roll_no" || field === "department" ? "text" : "number"}
            name={field}
            placeholder={field.replace("_", " ").toUpperCase()}
            value={newMark[field]}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        ))}
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Add Marks
        </button>
      </form>
    </div>
  );
};

export default AddMarks;
