import React, { useState, useEffect } from "react";
import { fetchMarks, updateMark } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

const EditMarks = () => {
  const { id } = useParams(); // Get mark ID from URL
  const navigate = useNavigate();
  const [editMark, setEditMark] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const getMarkDetails = async () => {
      try {
        const { data } = await fetchMarks(token);
        const markToEdit = data.find((mark) => mark._id === id);
        if (markToEdit) setEditMark(markToEdit);
      } catch (error) {
        console.error("Error fetching mark details:", error);
        alert("Failed to load mark details.");
      }
    };
    getMarkDetails();
  }, [id, token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditMark((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateMark(id, editMark, token);
      alert("Marks updated successfully!");
      navigate("/dashboard/marks"); // Redirect to marks page
    } catch (error) {
      console.error("Error updating marks:", error);
      alert("Failed to update marks.");
    }
  };

  if (!editMark) return <p className="text-center">Loading...</p>;

  return (
    <div className="p-6 mx-auto bg-white rounded-lg">
      <div className="p-6 bg-white rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Edit Marks</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Student Name */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium">Student Name</label>
            <input
              type="text"
              name="student_name"
              placeholder="Enter Student Name"
              value={editMark.student_name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          {/* Roll No */}
          <div>
            <label className="block text-gray-700 font-medium">Roll No</label>
            <input
              type="text"
              name="roll_no"
              placeholder="Enter Roll Number"
              value={editMark.roll_no}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          {/* Department Dropdown */}
<div>
  <label className="block text-gray-700 font-medium">Department</label>
  <select
    name="department"
    value={editMark.department}
    onChange={handleInputChange}
    className="w-full p-2 border border-gray-300 rounded bg-white"
    required
  >
    <option value="">Select Department</option>
    <option value="CSE">Computer Science & Engineering (CSE)</option>
    <option value="IT">Information Technology (IT)</option>
    <option value="ECE">Electronics & Communication Engineering (ECE)</option>
    <option value="MECH">Mechanical Engineering (MECH)</option>
    <option value="CIVIL">Civil Engineering (CIVIL)</option>
  </select>
</div>

          {/* OOPS */}
          <div>
            <label className="block text-gray-700 font-medium">OOPS</label>
            <input
              type="number"
              name="oops"
              placeholder="Enter OOPS Marks"
              value={editMark.oops}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          {/* Data Structures */}
          <div>
            <label className="block text-gray-700 font-medium">Data Structures (DS)</label>
            <input
              type="number"
              name="ds"
              placeholder="Enter DS Marks"
              value={editMark.ds}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          {/* Operating Systems */}
          <div>
            <label className="block text-gray-700 font-medium">Operating Systems (OS)</label>
            <input
              type="number"
              name="os"
              placeholder="Enter OS Marks"
              value={editMark.os}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          {/* Java */}
          <div>
            <label className="block text-gray-700 font-medium">Java</label>
            <input
              type="number"
              name="java"
              placeholder="Enter Java Marks"
              value={editMark.java}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          {/* Fundamentals of Data Science */}
          <div>
            <label className="block text-gray-700 font-medium">Fundamentals of Data Science (FDS)</label>
            <input
              type="number"
              name="fds"
              placeholder="Enter FDS Marks"
              value={editMark.fds}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          
          {/* Buttons at the bottom */}
          <div className="md:col-span-2 flex justify-end gap-4 mt-6">
  <button
    type="button"
    onClick={() => navigate(-1)}
    className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
  >
    Cancel
  </button>
  <button
    type="submit"
    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
  >
    Update Marks
  </button>
</div>

        </form>
      </div>
    </div>
  );
};

export default EditMarks;
