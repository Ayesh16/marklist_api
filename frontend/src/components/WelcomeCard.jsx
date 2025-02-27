import React, { useEffect, useState } from "react";

const WelcomeCard = () => {
  const [role, setRole] = useState("");

  useEffect(() => {
    const userRole = localStorage.getItem("role") || "User"; // Default to 'User' if no role is found
    setRole(userRole);
  }, []);

  const formattedDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-purple-500 text-white p-2 rounded-xl shadow-md mx-2 md:mx-4 flex items-center">
      {/* Text Section */}
      <div className="flex-1 text-left">
        <p className="text-xs md:text-sm">{formattedDate}</p>
        <h2 className="text-lg md:text-xl font-bold mt-1">Welcome back, {role}!</h2>
        <p className="text-gray-200 text-xs md:text-sm mt-1">Stay updated in your student portal.</p>
      </div>

      {/* Image Section */}
      <div className="flex justify-end flex-1">
        <img
          src="/User3.webp" // Replace with actual image
          alt="User"
          className="w-20 h-20 sm:w-22  sm:h-24 md:w-26 md:h-28 object-cover"
        />
      </div>
    </div>
  );
};

export default WelcomeCard;


