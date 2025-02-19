import React, { useState, useEffect } from "react";
import { fetchMarks, createMark, updateMark, deleteMark } from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"; 

const Marks = () => {
  const navigate = useNavigate();
  const [marks, setMarks] = useState([]);
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
  const [isEditing, setIsEditing] = useState(false);
  const [editMark, setEditMark] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const getMarks = async () => {
      const { data } = await fetchMarks(token);
      setMarks(data);
    };
    getMarks();
  }, [token]);

  // Handle Input Change for Create and Edit
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (isEditing) {
      setEditMark((prev) => ({ ...prev, [name]: value }));
    } else {
      setNewMark((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Add New Mark
  const handleCreate = async (e) => {
    e.preventDefault();
    await createMark(newMark, token);
    alert("Marks added successfully");
    window.location.reload();
  };

  // Update Mark
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!editMark) return;

    await updateMark(editMark._id, editMark, token);
    alert("Marks updated successfully");
    setIsEditing(false);
    setEditMark(null);
    window.location.reload();
  };

  // Delete Mark
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this mark?")) return;
    await deleteMark(id, token);
    alert("Marks deleted");
    window.location.reload();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Marks Management</h2>

      {/* Add or Update Marks Form */}
      <form onSubmit={isEditing ? handleUpdate : handleCreate} className="mb-8">
        <input type="text" name="student_name" placeholder="Student Name" value={isEditing ? editMark.student_name : newMark.student_name} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded mb-2" />
        <input type="text" name="roll_no" placeholder="Roll No" value={isEditing ? editMark.roll_no : newMark.roll_no} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded mb-2" />
        <input type="text" name="department" placeholder="Department" value={isEditing ? editMark.department : newMark.department} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded mb-2" />
        <input type="number" name="oops" placeholder="Oops Marks" value={isEditing ? editMark.oops : newMark.oops} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded mb-2" />
        <input type="number" name="ds" placeholder="DS Marks" value={isEditing ? editMark.ds : newMark.ds} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded mb-2" />
        <input type="number" name="os" placeholder="OS Marks" value={isEditing ? editMark.os : newMark.os} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded mb-2" />
        <input type="number" name="java" placeholder="Java Marks" value={isEditing ? editMark.java : newMark.java} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded mb-2" />
        <input type="number" name="fds" placeholder="FDS Marks" value={isEditing ? editMark.fds : newMark.fds} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded mb-2" />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">{isEditing ? "Update Marks" : "Add Marks"}</button>
      </form>

      {/* Display Marks Table */}
      <table className="w-full table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">Student Name</th>
            <th className="border border-gray-400 px-4 py-2">Roll No</th>
            <th className="border border-gray-400 px-4 py-2">Department</th>
            <th className="border border-gray-400 px-4 py-2">Total</th>
            <th className="border border-gray-400 px-4 py-2">Grade</th>
            <th className="border border-gray-400 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {marks.map((mark) => (
            <tr key={mark._id}>
              <td className="border border-gray-400 px-4 py-2">{mark.student_name}</td>
              <td className="border border-gray-400 px-4 py-2">{mark.roll_no}</td>
              <td className="border border-gray-400 px-4 py-2">{mark.department}</td>
              <td className="border border-gray-400 px-4 py-2">{mark.total}</td>
              <td className="border border-gray-400 px-4 py-2">{mark.grade}</td>
              <td className="border border-gray-400 px-4 py-2">
                <button onClick={() => { setEditMark(mark); setIsEditing(true); }} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                <button onClick={() => handleDelete(mark._id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-4">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            <FaArrowLeft />
            Back
          </button>
        </div>
    </div>
  );
};

export default Marks;
