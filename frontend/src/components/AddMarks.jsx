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
    <div className="p-6 mx-auto bg-white rounded-lg">
  <div className="p-6 bg-white rounded-lg">
    <h2 className="text-2xl font-bold mb-6 text-center">Add Marks</h2>
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Input Fields */}
      <div className="md:col-span-2">
        <label className="block text-gray-700 font-medium">Student Name</label>
        <input
          type="text"
          name="student_name"
          placeholder="Enter Student Name"
          value={newMark.student_name}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium">Roll No</label>
        <input
          type="text"
          name="roll_no"
          placeholder="Enter Roll Number"
          value={newMark.roll_no}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium">Department</label>
        <input
          type="text"
          name="department"
          placeholder="Enter Department"
          value={newMark.department}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium">OOPS</label>
        <input
          type="number"
          name="oops"
          placeholder="Enter OOPS Marks"
          value={newMark.oops}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium">Data Structures (DS)</label>
        <input
          type="number"
          name="ds"
          placeholder="Enter DS Marks"
          value={newMark.ds}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium">Operating Systems (OS)</label>
        <input
          type="number"
          name="os"
          placeholder="Enter OS Marks"
          value={newMark.os}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium">Java</label>
        <input
          type="number"
          name="java"
          placeholder="Enter Java Marks"
          value={newMark.java}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium">Fundamentals of Data Science (FDS)</label>
        <input
          type="number"
          name="fds"
          placeholder="Enter FDS Marks"
          value={newMark.fds}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      {/* Buttons placed in a full-width row */}
      <div className="md:col-span-2 flex justify-between gap-4 mt-6">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="w-1/2 bg-gray-500 text-white py-2 rounded hover:bg-gray-600"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="w-1/2 bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add Marks
        </button>
      </div>
    </form>
  </div>
</div>
  )}
export default AddMarks;
