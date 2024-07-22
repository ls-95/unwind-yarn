import Navbar from "../navbar/Navbar";
import "./Projects.css";
import ProjectsSidebar from "./ProjectsSidebar";
import DisplayProjects from "./DisplayProjects";

export default function Projects() {
  return (
    <div className="Projects">
      <Navbar />
      <div className="ProjectsContainer">
        <div className="SideBarContent">
          <ProjectsSidebar />
        </div>
        <div className="MainProjectsContent">
          <div className="DisplayProjects">
            <DisplayProjects />
          </div>
        </div>
      </div>
    </div>
  );
}
