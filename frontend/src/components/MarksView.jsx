import React, { useState, useEffect } from "react";
import { fetchMarks } from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const MarksView = () => {
    const navigate = useNavigate();
  const [marks, setMarks] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const getMarks = async () => {
      try {
        const { data } = await fetchMarks(token);
        console.log("Fetched Marks:", data); // Debugging: Check if first student exists
        setMarks(data);
      } catch (error) {
        console.error("Error fetching marks:", error);
      }
    };
    getMarks();
  }, [token]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">View Marks</h2>
      <p className="mb-4">Users can only view marks.</p>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">Student Name</th>
              <th className="border border-gray-400 px-4 py-2">Roll No</th>
              <th className="border border-gray-400 px-4 py-2">Department</th>
              <th className="border border-gray-400 px-4 py-2">Oops</th>
              <th className="border border-gray-400 px-4 py-2">DS</th>
              <th className="border border-gray-400 px-4 py-2">OS</th>
              <th className="border border-gray-400 px-4 py-2">Java</th>
              <th className="border border-gray-400 px-4 py-2">FDS</th>
              <th className="border border-gray-400 px-4 py-2 font-bold">Total</th>
              <th className="border border-gray-400 px-4 py-2">Grade</th>
            </tr>
          </thead>
          <tbody>
            {marks.length > 0 ? (
              marks.map((mark, index) => {
                console.log(`Rendering Row ${index + 1}:`, mark); // Debugging
                return (
                  <tr key={mark._id} className="hover:bg-gray-100">
                    <td className="border border-gray-400 px-4 py-2">{mark.student_name}</td> 
                    <td className="border border-gray-400 px-4 py-2">{mark.roll_no || "N/A"}</td>
                    <td className="border border-gray-400 px-4 py-2">{mark.department || "N/A"}</td>
                    <td className="border border-gray-400 px-4 py-2">{mark.oops || "0"}</td>
                    <td className="border border-gray-400 px-4 py-2">{mark.ds || "0"}</td>
                    <td className="border border-gray-400 px-4 py-2">{mark.os || "0"}</td>
                    <td className="border border-gray-400 px-4 py-2">{mark.java || "0"}</td>
                    <td className="border border-gray-400 px-4 py-2">{mark.fds || "0"}</td>
                    <td className="border border-gray-400 px-4 py-2 font-bold">{mark.total || "0"}</td>
                    <td className="border border-gray-400 px-4 py-2">{mark.grade || "-"}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="9" className="text-center p-4">
                  No marks available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
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

export default MarksView;
