import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Syllabus = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const syllabusData = [
    {
      subject: "Data Structures",
      topics: [
        "Arrays and Linked Lists",
        "Stacks and Queues",
        "Trees and Graphs",
        "Sorting and Searching Algorithms",
        "Hashing and Hash Tables",
      ],
    },
    {
      subject: "Operating Systems",
      topics: [
        "Process Management",
        "Memory Management",
        "File System",
        "Deadlocks",
        "Virtual Memory",
      ],
    },
    {
      subject: "Database Management Systems",
      topics: [
        "Relational Model",
        "SQL Queries",
        "Normalization",
        "Transactions and Concurrency",
        "NoSQL Databases",
      ],
    },
    {
      subject: "Computer Networks",
      topics: [
        "Network Protocols",
        "OSI and TCP/IP Models",
        "Routing Algorithms",
        "Network Security",
        "Wireless Networks",
      ],
    },
    {
      subject: "Software Engineering",
      topics: [
        "Software Development Life Cycle (SDLC)",
        "Agile Methodologies",
        "Testing Strategies",
        "Software Maintenance",
        "Project Management",
      ],
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-5">Syllabus</h2>

      {syllabusData.map((subject, index) => (
        <div key={index} className="mb-3">
          <button
            className="w-full text-left bg-blue-600 text-white p-3 rounded-lg flex justify-between items-center"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-semibold">{subject.subject}</span>
            <span>{openIndex === index ? "▲" : "▼"}</span>
          </button>

          {openIndex === index && (
            <div className="bg-white p-4 border border-gray-300 rounded-lg mt-2">
              <ul className="list-disc pl-5">
                {subject.topics.map((topic, i) => (
                  <li key={i} className="py-1">{topic}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
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

export default Syllabus;
