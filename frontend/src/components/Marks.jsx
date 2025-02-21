import React, { useState, useEffect } from "react";
import { fetchMarks, createMark, updateMark, deleteMark } from "../services/api";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

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
      try {
        const { data } = await fetchMarks(token);
        setMarks(data);
      } catch (error) {
        console.error("Error fetching marks:", error);
        alert("Failed to load marks.");
      }
    };
    getMarks();
  }, [token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (isEditing) {
      setEditMark((prev) => ({ ...prev, [name]: value }));
    } else {
      setNewMark((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await createMark(newMark, token);
      alert("Marks added successfully");
      setMarks([...marks, newMark]);
      setNewMark({ student_name: "", roll_no: "", department: "", oops: "", ds: "", os: "", java: "", fds: "" });
    } catch (error) {
      console.error("Error adding marks:", error);
      alert("Failed to add marks.");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!editMark) return;

    try {
      await updateMark(editMark._id, editMark, token);
      alert("Marks updated successfully");
      setMarks(marks.map((mark) => (mark._id === editMark._id ? editMark : mark)));
      setIsEditing(false);
      setEditMark(null);
    } catch (error) {
      console.error("Error updating marks:", error);
      alert("Failed to update marks.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this mark?")) return;
    try {
      await deleteMark(id, token);
      alert("Marks deleted");
      setMarks(marks.filter((mark) => mark._id !== id));
    } catch (error) {
      console.error("Error deleting marks:", error);
      alert("Failed to delete marks.");
    }
  };

  const calculateTotal = (mark) => {
    return (
      Number(mark.oops || 0) +
      Number(mark.ds || 0) +
      Number(mark.os || 0) +
      Number(mark.java || 0) +
      Number(mark.fds || 0)
    );
  };

  const calculateGrade = (total) => {
    if (total >= 450) return "O";
    if (total >= 400) return "A+";
    if (total >= 350) return "A";
    if (total >= 300) return "B+";
    return "C";
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Marks Management</h2>

      {/* Add or Update Marks Form */}
      <form onSubmit={isEditing ? handleUpdate : handleCreate} className="mb-8 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {["student_name", "roll_no", "department", "oops", "ds", "os", "java", "fds"].map((field) => (
            <input
              key={field}
              type={field==="student_name"||field === "roll_no" || field === "department" ? "text" : "number"}
              name={field}
              placeholder={field.replace("_", " ").toUpperCase()}
              value={isEditing ? editMark[field] : newMark[field]}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          ))}
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
          {isEditing ? "Update Marks" : "Add Marks"}
        </button>
      </form>

      {/* Display Marks Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200 text-sm sm:text-base">
              <th className="border border-gray-400 px-2 py-2">Name</th>
              <th className="border border-gray-400 px-2 py-2">Roll No</th>
              <th className="border border-gray-400 px-2 py-2">Dept</th>
              <th className="border border-gray-400 px-2 py-2">Total</th>
              <th className="border border-gray-400 px-2 py-2">Grade</th>
              <th className="border border-gray-400 px-2 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {marks.map((mark) => {
              const total = mark.total || calculateTotal(mark);
              const grade = mark.grade || calculateGrade(total);
              return (
                <tr key={mark._id} className="text-sm sm:text-base">
                  <td className="border border-gray-400 px-2 py-2">{mark.student_name}</td>
                  <td className="border border-gray-400 px-2 py-2">{mark.roll_no}</td>
                  <td className="border border-gray-400 px-2 py-2">{mark.department}</td>
                  <td className="border border-gray-400 px-2 py-2">{total}</td>
                  <td className="border border-gray-400 px-2 py-2">{grade}</td>
                  <td className="border border-gray-400 px-2 py-2 flex justify-center gap-2">
                    <button
                      onClick={() => {
                        setEditMark(mark);
                        setIsEditing(true);
                      }}
                      className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600 transition"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(mark._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

     
      </div>
    
  );
};

export default Marks;
