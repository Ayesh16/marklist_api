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

  if (!editMark) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Edit Marks</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["student_name", "roll_no", "department", "oops", "ds", "os", "java", "fds"].map((field) => (
          <input
            key={field}
            type={field === "student_name" || field === "roll_no" || field === "department" ? "text" : "number"}
            name={field}
            placeholder={field.replace("_", " ").toUpperCase()}
            value={editMark[field]}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        ))}
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
          Update Marks
        </button>
      </form>
    </div>
  );
};

export default EditMarks;
