import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Layout from "./components/Layout"; // Import the layout
import Dashboard from "./components/Dashboard";
import About from "./Pages/About";
import Marks from "./Pages/Marks";
import MarksView from "./Pages/MarksView";
import Syllabus from "./Pages/Syllabus";
import Timetable from "./Pages/Timetable";
import AddMarks from "./Pages/AddMarks";
import EditMarks from "./Pages/EditMarks";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Redirect Root to Dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" />} />

        {/* Dashboard Layout (Wraps all Dashboard Pages) */}
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="marks" element={<Marks />} />
          <Route path="marks-view" element={<MarksView />} />
          <Route path="about" element={<About />} />
          <Route path="syllabus" element={<Syllabus />} />
          <Route path="timetable" element={<Timetable />} />
          <Route path="marks/add" element={<AddMarks />} />
          <Route path="marks/edit/:id" element={<EditMarks />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

