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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Layout with Sidebar + Navbar */}
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="marks" element={<Marks />} />
          <Route path="marks-view" element={<MarksView />} />
          <Route path="about" element={<About />} />
          <Route path="syllabus" element={<Syllabus />} />
          <Route path="timetable" element={<Timetable />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
