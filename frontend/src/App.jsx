import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Marks from './components/Marks';
import About from './components/About';
import MarksView from './components/MarksView';
import Syllabus from './components/syllabus';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/marks" element={<Marks />} />    
          <Route path="/about" element={<About />} /> 
          <Route path="/marks-view" element={<MarksView />} /> 
          <Route path="/syllabus" element={<Syllabus />} />                 
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
