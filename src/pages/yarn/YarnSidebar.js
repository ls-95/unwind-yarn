import SidebarLinks from "../homepage/SidebarLinks";
import "./Yarn.css";

export default function ProjectsSidebar() {
  return (
    <div className="Sidebar">
      <h2>Laetitia's Yarn Stash</h2>

      <div className="SidebarPrjoectsSection">
        <div className="ProjectStatus">
          <p className="Strong">Yarn quantity:</p>
        </div>
        <div className="ProjectStatusNumber">
          <p className="TextFont">9</p>
        </div>
        <div className="ProjectStatus">
          <p className="Strong">Yarn used:</p>
        </div>
        <div className="ProjectStatusNumber">
          <p className="TextFont">0</p>
        </div>
        <div className="ProjectStatus">
          <p className="Strong">Wish list:</p>
        </div>
        <div className="ProjectStatusNumber">
          <p className="TextFont">0</p>
        </div>
      </div>
      <hr />
      <div className="CreateProject"></div>
      <hr />
      <div className="SidebarLinksSection">
        <SidebarLinks />
      </div>
    </div>
  );
}
