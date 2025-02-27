import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

// Data for Pie Chart (Course Statistics)
const courseData = [
  { name: "Total Courses", value: 8, color: "#a855f7" },
  { name: "Students Enrolled", value: 150, color: "#6b21a8" },
  { name: "Students Completed", value: 120, color: "#9333ea" },
];

// Data for Bar Chart (Yearly Progress)
const yearlyData = [
  { year: "2021", students: 50 },
  { year: "2022", students: 80 },
  { year: "2023", students: 120 },
  { year: "2024", students: 150 },
];

const CourseChart = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-2 w-full">
      {/* Pie Chart Section */}
      <div className="p-4 rounded-xl shadow-md flex flex-col items-center border bg-white border-purple-300 transition-all duration-300 hover:scale-105 hover:shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg">
        <h3 className="text-lg font-semibold text-purple-700 mb-2">Course Statistics</h3>
        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie data={courseData} cx="50%" cy="50%" outerRadius={70} dataKey="value" label>
              {courseData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart Section */}
      <div className="p-4 rounded-xl shadow-md flex flex-col items-center border bg-white border-purple-300 transition-all duration-300 hover:scale-105 hover:shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg">
        <h3 className="text-lg font-semibold text-purple-700 mb-2">Yearly Progress</h3>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={yearlyData}>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="students" fill="#6b21a8" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CourseChart;
