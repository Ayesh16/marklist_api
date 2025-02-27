import React from "react";
import { useNavigate } from "react-router-dom";

const timetableData = [
  {
    day: "Monday",
    schedule: [
      { time: "9:00 AM - 10:30 AM", subject: "Java Programming" },
      { time: "10:45 AM - 12:15 PM", subject: "Operating Systems" },
      { time: "1:30 PM - 3:00 PM", subject: "Data Structures" },
    ],
  },
  {
    day: "Tuesday",
    schedule: [
      { time: "9:00 AM - 10:30 AM", subject: "Object-Oriented Programming" },
      { time: "10:45 AM - 12:15 PM", subject: "Foundations of Data Science" },
      { time: "1:30 PM - 3:00 PM", subject: "Java Programming (Advanced)" },
    ],
  },
  {
    day: "Wednesday",
    schedule: [
      { time: "9:00 AM - 10:30 AM", subject: "Operating Systems" },
      { time: "10:45 AM - 12:15 PM", subject: "Data Structures" },
      { time: "1:30 PM - 3:00 PM", subject: "OOPs (Design Patterns)" },
    ],
  },
  {
    day: "Thursday",
    schedule: [
      { time: "9:00 AM - 10:30 AM", subject: "Foundations of Data Science" },
      { time: "10:45 AM - 12:15 PM", subject: "Java Programming" },
      { time: "1:30 PM - 3:00 PM", subject: "Operating Systems (Case Study)" },
    ],
  },
  {
    day: "Friday",
    schedule: [
      { time: "9:00 AM - 10:30 AM", subject: "Data Structures (Graph Theory)" },
      { time: "10:45 AM - 12:15 PM", subject: "OOPs (SOLID Principles)" },
      { time: "1:30 PM - 3:00 PM", subject: "Data Science (Python & ML Basics)" },
    ],
  },
];

const Timetable = () => {
  const navigate = useNavigate();
  const today = new Date().toLocaleString("en-US", { weekday: "long" });

  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">
        Weekly Timetable
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white">
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Day</th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Time</th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Subject</th>
            </tr>
          </thead>
          <tbody>
            {timetableData.map((daySchedule, index) => (
              <React.Fragment key={index}>
                {daySchedule.schedule.map((session, i) => (
                  <tr
                    key={i}
                    className={`${
                      daySchedule.day === today
                        ? "bg-blue-100 dark:bg-blue-900"
                        : "bg-white dark:bg-gray-900"
                    } text-gray-900 dark:text-white`}
                  >
                    {i === 0 && (
                      <td
                        rowSpan={daySchedule.schedule.length}
                        className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold text-blue-800 dark:text-blue-300 text-center"
                      >
                        {daySchedule.day}
                      </td>
                    )}
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                      {session.time}
                    </td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                      {session.subject}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
       
    </div>
  );
};

export default Timetable;
