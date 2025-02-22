import React, { useState, useEffect } from "react";
import { fetchMarks } from "../services/api";
import { useNavigate } from "react-router-dom";

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
    <h2 className="text-2xl font-bold mb-4">Student Marks</h2>
    <p className="mb-4">Student's Marklists</p>
  
    {/* Responsive Table Wrapper */}
    <div className="overflow-x-auto">
      <table className="w-full table-auto border-collapse border border-gray-400 text-sm md:text-base">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-2 md:px-4 py-2">Roll No</th>
            <th className="border border-gray-400 px-2 md:px-4 py-2">Department</th>
            <th className="border border-gray-400 px-2 md:px-4 py-2">Oops</th>
            <th className="border border-gray-400 px-2 md:px-4 py-2">DS</th>
            <th className="border border-gray-400 px-2 md:px-4 py-2">OS</th>
            <th className="border border-gray-400 px-2 md:px-4 py-2">Java</th>
            <th className="border border-gray-400 px-2 md:px-4 py-2">FDS</th>
            <th className="border border-gray-400 px-2 md:px-4 py-2 font-bold">Total</th>
            <th className="border border-gray-400 px-2 md:px-4 py-2">Grade</th>
          </tr>
        </thead>
        <tbody>
          {marks.length > 0 ? (
            marks.map((mark) => (
              <tr key={mark._id} className="hover:bg-gray-100 text-center">
                <td className="border border-gray-400 px-2 md:px-4 py-2">{mark.roll_no || "N/A"}</td>
                <td className="border border-gray-400 px-2 md:px-4 py-2">{mark.department || "N/A"}</td>
                <td className="border border-gray-400 px-2 md:px-4 py-2">{mark.oops || "0"}</td>
                <td className="border border-gray-400 px-2 md:px-4 py-2">{mark.ds || "0"}</td>
                <td className="border border-gray-400 px-2 md:px-4 py-2">{mark.os || "0"}</td>
                <td className="border border-gray-400 px-2 md:px-4 py-2">{mark.java || "0"}</td>
                <td className="border border-gray-400 px-2 md:px-4 py-2">{mark.fds || "0"}</td>
                <td className="border border-gray-400 px-2 md:px-4 py-2 font-bold">{mark.total || "0"}</td>
                <td className="border border-gray-400 px-2 md:px-4 py-2">{mark.grade || "-"}</td>
              </tr>
            ))
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
  </div>
  )}  

export default MarksView;
