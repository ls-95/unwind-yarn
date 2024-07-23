import ProjectsSidebar from "./ProjectsSidebar";
import Navbar from "../navbar/Navbar";
import ProjectForm from "./ProjectForm";

export default function CreateProject() {
  return (
    <div className="Projects">
      <Navbar />
      <div className="ProjectsContainer">
        <div className="SideBarContent">
          <ProjectsSidebar />
        </div>
        <div className="MainProjectFormContent">
          <ProjectForm />
        </div>
      </div>
    </div>
  );
}
