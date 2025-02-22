import React, { useState, useEffect } from "react";
import { fetchMarks, deleteMark } from "../services/api";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

const Marks = () => {
  const navigate = useNavigate();
  const [marks, setMarks] = useState([]);
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

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this mark?")) return;
    try {
      await deleteMark(id, token);
      alert("Marks deleted successfully!");
      setMarks(marks.filter((mark) => mark._id !== id));
    } catch (error) {
      console.error("Error deleting marks:", error);
      alert("Failed to delete marks.");
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Marks Management</h2>
        <button
          onClick={() => navigate("/dashboard/marks/add")}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-md mt-2 sm:mt-0"
        >
          Add Marks
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200 text-sm sm:text-base">
              <th className="border px-2 py-2">Name</th>
              <th className="border px-2 py-2">Roll No</th>
              <th className="border px-2 py-2">Dept</th>
              <th className="border px-2 py-2">Total</th>
              <th className="border px-2 py-2">Grade</th>
              <th className="border px-2 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {marks.map((mark) => (
              <tr key={mark._id} className="text-sm sm:text-base">
                <td className="border px-2 py-2">{mark.student_name}</td>
                <td className="border px-2 py-2">{mark.roll_no}</td>
                <td className="border px-2 py-2">{mark.department}</td>
                <td className="border px-2 py-2">{mark.total}</td>
                <td className="border px-2 py-2">{mark.grade}</td>
                <td className="border px-2 py-2 flex gap-2 justify-center">
                  <button
                    onClick={() => navigate(`/dashboard/marks/edit/${mark._id}`)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(mark._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Marks;
