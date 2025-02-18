import React, { useEffect, useState } from "react";
import { getMarks, deleteMark } from "../api/marksApi";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [marks, setMarks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMarks();
  }, []);

  const fetchMarks = async () => {
    const data = await getMarks();
    setMarks(data);
  };

  const handleDelete = async (id) => {
    await deleteMark(id);
    fetchMarks();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Marks List</h1>
      <button onClick={() => navigate("/add-mark")} className="bg-green-500 px-4 py-2 rounded text-white">
        Add Mark
      </button>
      <table className="w-full mt-4 border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Student</th>
            <th className="p-2">Total</th>
            <th className="p-2">Grade</th>
          </tr>
        </thead>
        <tbody>
          {marks.map((mark) => (
            <tr key={mark._id} className="border">
              <td className="p-2">{mark.student_name}</td>
              <td className="p-2">{mark.total}</td>
              <td className="p-2">
                <button onClick={() => navigate(`/edit-mark/${mark._id}`)} className="bg-blue-500 text-white px-2 rounded">Edit</button>
                <button onClick={() => handleDelete(mark._id)} className="bg-red-500 text-white px-2 ml-2 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
