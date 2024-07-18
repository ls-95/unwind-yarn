import "./App.css";
import Signup from "./Signup";
import Projects from "./Projects";
import Yarn from "./Yarn";
import Homepage from "./Homepage";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/home" element={<Homepage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/yarn" element={<Yarn />} />
            <Route path="login" element={<Login />} />
            <Route path="/" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
