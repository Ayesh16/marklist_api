import React, { useState, useEffect } from 'react';
import { fetchMarks, createMark, updateMark, deleteMark } from '../services/api';

const Dashboard = () => {
  const [marks, setMarks] = useState([]);
  const [newMark, setNewMark] = useState({
    student_name: '',
    roll_no: '',
    department: '',
    oops: '',
    ds: '',
    os: '',
    java: '',
    fds: '',
  });
  const [isEditing, setIsEditing] = useState(false);  // Flag for editing state
  const [editMark, setEditMark] = useState(null);  // Store the mark being edited
  const token = localStorage.getItem('token');

  useEffect(() => {
    const getMarks = async () => {
      const { data } = await fetchMarks(token);
      setMarks(data);
    };
    getMarks();
  }, [token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMark((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await createMark(newMark, token);
      alert('Marks added successfully');
      setNewMark({ student_name: '', roll_no: '', department: '', oops: '', ds: '', os: '', java: '', fds: '' });
  
      // Fetch marks again to update the state
      const { data } = await fetchMarks(token);
      setMarks(data);
    } catch (error) {
      alert('Error adding marks');
    }
  };
  
  const handleDelete = async (id) => {
    try {
      await deleteMark(id, token);
      alert('Marks deleted');
      setMarks((prevMarks) => prevMarks.filter((mark) => mark._id !== id));  // Remove deleted mark from state
    } catch (error) {
      alert('Error deleting marks');
    }
  };

  const handleUpdate = async (id) => {
    console.log("Attempting to update marks for ID:", id);

    try {
      if (!id) {
        alert("Error: No ID provided for update");
        console.error("Update failed: ID is undefined or null");
        return;
      }

      const updatedMark = {
        student_name: editMark.student_name,
        roll_no: editMark.roll_no,
        department: editMark.department,
        oops: editMark.oops,
        ds: editMark.ds,
        os: editMark.os,
        java: editMark.java,
        fds: editMark.fds,
      };

      console.log("Updated Mark Data:", updatedMark);
      console.log("Token:", token); // Log the token

      const response = await updateMark(id, updatedMark, token);

      if (response && response.data) {
        alert("Marks updated successfully");
        console.log("Updated Response from API:", response.data);

        setMarks((prevMarks) =>
          prevMarks.map((mark) =>
            mark._id === id ? { ...mark, ...updatedMark } : mark
          )
        );

        setIsEditing(false);
        setEditMark(null);
      } else {
        alert("Failed to update marks: No response data");
      }
    } catch (error) {
      if (error.response) {
        alert(`Update failed: ${error.response.status} - ${error.response.data.message || "Server error"}`);
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        alert("Update failed: No response from server");
        console.error("Request:", error.request);
      } else {
        alert("Update failed: " + error.message);
        console.error("Error message:", error.message);
      }
      console.log("Update error:", error);
    }
  };
  

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditMark((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      {/* Add Marks */}
      <form onSubmit={handleCreate} className="mb-8">
        <input
          type="text"
          name="student_name"
          placeholder="Student Name"
          value={newMark.student_name}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <input
          type="text"
          name="roll_no"
          placeholder="Roll No"
          value={newMark.roll_no}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={newMark.department}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <input
          type="number"
          name="oops"
          placeholder="Oops Marks"
          value={newMark.oops}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <input
          type="number"
          name="ds"
          placeholder="DS Marks"
          value={newMark.ds}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <input
          type="number"
          name="os"
          placeholder="OS Marks"
          value={newMark.os}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <input
          type="number"
          name="java"
          placeholder="Java Marks"
          value={newMark.java}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <input
          type="number"
          name="fds"
          placeholder="FDS Marks"
          value={newMark.fds}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Add Marks</button>
      </form>

      {/* Edit Marks (Only shown when editing) */}
      {isEditing && editMark && (
        <form onSubmit={(e) => { e.preventDefault(); handleUpdate(editMark._id); }} className="mb-8">
          <input
            type="text"
            name="student_name"
            value={editMark.student_name}
            onChange={handleEditChange}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="text"
            name="roll_no"
            value={editMark.roll_no}
            onChange={handleEditChange}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="text"
            name="department"
            value={editMark.department}
            onChange={handleEditChange}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="number"
            name="oops"
            value={editMark.oops}
            onChange={handleEditChange}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="number"
            name="ds"
            value={editMark.ds}
            onChange={handleEditChange}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="number"
            name="os"
            value={editMark.os}
            onChange={handleEditChange}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="number"
            name="java"
            value={editMark.java}
            onChange={handleEditChange}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="number"
            name="fds"
            value={editMark.fds}
            onChange={handleEditChange}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Update Marks</button>
        </form>
      )}

      {/* Display Marks */}
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Student Name</th>
            <th className="px-4 py-2">Roll No</th>
            <th className="px-4 py-2">Department</th>
            <th className="px-4 py-2">Total</th>
            <th className="px-4 py-2">Grade</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {marks.map((mark) => (
            <tr key={mark._id}>
              <td className="px-4 py-2">{mark.student_name}</td>
              <td className="px-4 py-2">{mark.roll_no}</td>
              <td className="px-4 py-2">{mark.department}</td>
              <td className="px-4 py-2">{mark.total}</td>
              <td className="px-4 py-2">{mark.grade}</td>
              <td className="px-4 py-2">
                <button
                  onClick={() => {
                    setEditMark(mark);
                    setIsEditing(true);
                  }}
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(mark._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
