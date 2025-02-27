import React from "react";
import { Link } from "react-router-dom"; // If using React Router

const Notices = () => {
  return (
    <div className="bg-white shadow-lg rounded-xl border border-purple-300 p-4 md:p-5 w-full">
      <h3 className="text-lg font-semibold text-purple-700">Daily Notice</h3>

      <ul className="space-y-3 mt-3">
        {/* First Notice */}
        <li className="bg-gray-100 p-3 rounded-lg shadow-sm hover:bg-gray-200  transition-all duration-300 hover:scale-105">
          <p className="font-semibold text-sm md:text-base">Prelim Payment Due</p>
          <p className="text-gray-500 text-xs md:text-sm">Some details about payment</p>
          <Link to="/payment" className="text-purple-500 text-xs md:text-sm font-medium hover:underline">
            See more
          </Link>
        </li>

        {/* Second Notice */}
        <li className="bg-gray-100 p-3 rounded-lg shadow-sm hover:bg-gray-200  transition-all duration-300 hover:scale-105">
          <p className="font-semibold text-sm md:text-base">Exam Schedule</p>
          <p className="text-gray-500 text-xs md:text-sm">Upcoming exams details</p>
          <Link to="/exams" className="text-purple-500 text-xs md:text-sm font-medium hover:underline">
            See more
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Notices;
