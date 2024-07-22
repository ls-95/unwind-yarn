import SidebarLinks from "../homepage/SidebarLinks";
import "../homepage/Sidebar.css";
import YarnOne from "./yarn1.jpg";

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
          <p>0</p>
        </div>
        <div className="ProjectStatus">
          <p className="Strong">Finished projects:</p>
        </div>
        <div className="ProjectStatusNumber">
          <p>4</p>
        </div>
        <div className="ProjectStatus">
          <p className="Strong">Future projects:</p>
        </div>
        <div className="ProjectStatusNumber">
          <p>0</p>
        </div>
      </div>
      <hr />
      <div className="SidebarLinksSection">
        <SidebarLinks />
      </div>
    </div>
  );
}
