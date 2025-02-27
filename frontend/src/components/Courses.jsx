import { FaBook, FaUserGraduate, FaUsers } from "react-icons/fa";

const Courses = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  px-1">
      
      {/* Total Courses */}
      <div className="p-4 rounded-xl shadow-md flex flex-col items-center border bg-white border-purple-300 
        transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <FaBook className="text-3xl text-purple-500 mb-1" />
        <div className="text-xl font-bold text-purple-500">8</div>
        <div className="text-sm text-gray-500">Total Courses</div>
      </div>

      {/* Students Enrolled */}
      <div className="p-4 rounded-xl shadow-md flex flex-col items-center border bg-white border-purple-300 
        transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <FaUsers className="text-3xl text-purple-700 mb-1" />
        <div className="text-xl font-bold text-purple-700">150</div>
        <div className="text-sm text-gray-500">Students Enrolled</div>
      </div>

      {/* Students Completed */}
      <div className="p-4 rounded-xl shadow-md flex flex-col items-center border bg-white border-purple-300 
        transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <FaUserGraduate className="text-3xl text-purple-500 mb-1" />
        <div className="text-xl font-bold text-purple-500">120</div>
        <div className="text-sm text-gray-500">Students Completed</div>
      </div>

    </div>
  );
};

export default Courses;
