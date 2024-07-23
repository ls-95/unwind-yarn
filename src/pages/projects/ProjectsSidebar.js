import SidebarLinks from "../homepage/SidebarLinks";
import "./Projects.css";
import YarnOne from "./yarn1.jpg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function ProjectsSidebar() {
  return (
    <div className="Sidebar">
      <h2>Laetitia's Projects</h2>
      <img src={YarnOne} alt="A shelf filled with colourful yarn" />
      <div className="SidebarPrjoectsSection">
        <div className="ProjectStatus">
          <p className="Strong">Current WIP's:</p>
        </div>
        <div className="ProjectStatusNumber">
          <p className="TextFont">0</p>
        </div>
        <div className="ProjectStatus">
          <p className="Strong">Finished projects:</p>
        </div>
        <div className="ProjectStatusNumber">
          <p className="TextFont">4</p>
        </div>
        <div className="ProjectStatus">
          <p className="Strong">Future projects:</p>
        </div>
        <div className="ProjectStatusNumber">
          <p className="TextFont">0</p>
        </div>
      </div>
      <hr />
      <div className="CreateProject">
        <p className="Strong">Add a new project:</p>
        <Link to="/createproject">Create Project</Link>
      </div>
      <hr />
      <div className="SidebarLinksSection">
        <SidebarLinks />
      </div>
    </div>
  );
}
