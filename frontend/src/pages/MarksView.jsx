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
        console.log("Fetched Marks:", data);
        setMarks(data);
      } catch (error) {
        console.error("Error fetching marks:", error);
      }
    };
    getMarks();
  }, [token]);

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">Student Marks</h2>
      <p className="text-sm md:text-base mb-4">Student's Marklists</p>

      {/* Table for larger screens */}
      <div className="hidden sm:block max-w-full overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full border border-gray-300 text-xs md:text-sm">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-[10px] md:text-sm">
              <th className="border px-2 py-2">Student Name</th>
              <th className="border px-2 py-2">Roll No</th>
              <th className="border px-2 py-2">Department</th>
              <th className="border px-2 py-2">Oops</th>
              <th className="border px-2 py-2">DS</th>
              <th className="border px-2 py-2">OS</th>
              <th className="border px-2 py-2">Java</th>
              <th className="border px-2 py-2">FDS</th>
              <th className="border px-2 py-2 font-bold">Total</th>
              <th className="border px-2 py-2">Grade</th>
            </tr>
          </thead>
          <tbody>
            {marks.length > 0 ? (
              marks.map((mark) => (
                <tr key={mark._id} className="hover:bg-gray-100 text-center">
                  <td className="border px-2 py-2">{mark.student_name || "N/A"}</td>
                  <td className="border px-2 py-2">{mark.roll_no || "N/A"}</td>
                  <td className="border px-2 py-2">{mark.department || "N/A"}</td>
                  <td className="border px-2 py-2">{mark.oops || "0"}</td>
                  <td className="border px-2 py-2">{mark.ds || "0"}</td>
                  <td className="border px-2 py-2">{mark.os || "0"}</td>
                  <td className="border px-2 py-2">{mark.java || "0"}</td>
                  <td className="border px-2 py-2">{mark.fds || "0"}</td>
                  <td className="border px-2 py-2 font-bold">{mark.total || "0"}</td>
                  <td className="border px-2 py-2">{mark.grade || "-"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="text-center p-4">
                  No marks available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Card layout for Mobile */}
      <div className="block sm:hidden">
        {marks.length > 0 ? (
          marks.map((mark) => (
            <div
              key={mark._id}
              className="border rounded-lg p-4 mb-4 shadow-md bg-white"
            >
              <p className="font-semibold text-lg">📌 {mark.student_name}</p>
              <p className="text-sm">🎓 Roll No: <span className="font-semibold">{mark.roll_no}</span></p>
              <p className="text-sm">🏛️ Dept: <span className="font-semibold">{mark.department}</span></p>
              <p className="text-sm">🖥️ Oops: <span className="font-semibold">{mark.oops || "0"}</span></p>
              <p className="text-sm">📊 DS: <span className="font-semibold">{mark.ds || "0"}</span></p>
              <p className="text-sm">🖥️ OS: <span className="font-semibold">{mark.os || "0"}</span></p>
              <p className="text-sm">☕ Java: <span className="font-semibold">{mark.java || "0"}</span></p>
              <p className="text-sm">📘 FDS: <span className="font-semibold">{mark.fds || "0"}</span></p>
              <p className="text-sm font-bold">Total: {mark.total || "0"}</p>
              <p className="text-sm">📜 Grade: <span className="font-semibold">{mark.grade || "-"}</span></p>
            </div>
          ))
        ) : (
          <p className="text-center text-sm p-4">No marks available.</p>
        )}
      </div>
    </div>
  );
};

export default MarksView;
