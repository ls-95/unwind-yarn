import YarnSidebar from "./YarnSidebar";
import Navbar from "../navbar/Navbar";
import YarnForm from "./YarnForm";

export default function AddYarn() {
  return (
    <div className="Projects">
      <Navbar />
      <div className="ProjectsContainer">
        <div className="SideBarContent">
          <YarnSidebar />
        </div>
        <div className="MainProjectFormContent">
          <YarnForm />
        </div>
      </div>
    </div>
  );
}
