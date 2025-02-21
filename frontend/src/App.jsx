import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Marks from "./components/Marks";
import MarksView from "./components/MarksView";
import Syllabus from "./components/Syllabus";
import Timetable from "./components/Timetable";
import Layout from "./components/Layout";
import AddMarks from "./components/AddMarks";
import EditMarks from "./components/EditMarks";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboard Routes inside Layout */}
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />  {/* Default dashboard route */}
          <Route path="marks" element={<Marks />} />
          <Route path="marks-view" element={<MarksView />} />
          <Route path="about" element={<About />} />
          <Route path="syllabus" element={<Syllabus />} />
          <Route path="timetable" element={<Timetable />} />
        </Route>

        {/* Marks Management Routes */}
        <Route path="/marks" element={<Marks />} />
        <Route path="/add-marks" element={<AddMarks />} />
        <Route path="/edit-marks/:id" element={<EditMarks />} />
      </Routes>
    </Router>
  );
}

export default App;
