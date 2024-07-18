import Projects from "./Projects";
import Yarn from "./Yarn";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/yarn">Yarn</Link>
          </li>
        </ul>
      </nav>
      this is the Homepage
    </div>
  );
}
