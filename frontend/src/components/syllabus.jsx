import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Syllabus = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const syllabusData = [
    {
      subject: "Java Programming",
      topics: [
        "Introduction to Java & JVM",
        "OOPs Concepts (Classes, Objects, Inheritance, Polymorphism)",
        "Exception Handling",
        "Multithreading",
        "Collections Framework",
        "File Handling",
        "Java 8 Features (Lambda, Streams, Functional Interfaces)",
        "Spring Boot Basics",
      ],
    },
    {
      subject: "Operating Systems",
      topics: [
        "Process Management",
        "Memory Management",
        "File System & Storage Management",
        "CPU Scheduling Algorithms",
        "Deadlocks",
        "Virtual Memory & Paging",
        "Security & Protection",
        "Distributed Systems",
      ],
    },
    {
      subject: "Data Structures",
      topics: [
        "Arrays and Linked Lists",
        "Stacks and Queues",
        "Trees (Binary Trees, BST, AVL, B-Trees)",
        "Graphs (BFS, DFS, Dijkstra’s Algorithm)",
        "Sorting and Searching Algorithms",
        "Hashing Techniques",
        "Dynamic Programming Basics",
      ],
    },
    {
      subject: "Object-Oriented Programming (OOPs)",
      topics: [
        "Principles of OOP (Encapsulation, Inheritance, Polymorphism, Abstraction)",
        "Classes & Objects",
        "Constructors & Destructors",
        "Method Overloading & Overriding",
        "Interfaces & Abstract Classes",
        "Design Patterns (Singleton, Factory, Observer, etc.)",
        "SOLID Principles",
      ],
    },
    {
      subject: "Foundations of Data Science",
      topics: [
        "Introduction to Data Science",
        "Data Preprocessing & Cleaning",
        "Exploratory Data Analysis (EDA)",
        "Probability & Statistics for Data Science",
        "Machine Learning Basics",
        "Feature Engineering",
        "Python for Data Science (NumPy, Pandas, Matplotlib)",
        "Big Data & Cloud Computing Basics",
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
    
    </div>
  );
};

export default Syllabus;
