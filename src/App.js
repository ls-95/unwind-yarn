import "./App.css";
import Signup from "./pages/auth/signup/Signup";
import Projects from "./pages/projects/Projects";
import Yarn from "./pages/yarn/Yarn";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/auth/login/Login";
import MyProfile from "./MyProfile";
import Settings from "./Settings";
import CreateProject from "./pages/projects/CreateProject";
import AddYarn from "./pages/yarn/AddYarn";
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
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/createproject" element={<CreateProject />} />
            <Route path="/addyarn" element={<AddYarn />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
