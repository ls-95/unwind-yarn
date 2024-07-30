import SidebarLinks from "../homepage/SidebarLinks";
import YarnStash from "./yarnstash.png";
import AddButton from "../../components/atoms/buttons/AddButton";
import "./Yarn.css";

export default function ProjectsSidebar() {
  return (
    <div className="Sidebar">
      <h2>Laetitia's Yarn Stash</h2>
      <img src={YarnStash} alt="A shelf filled with colourful yarn" />
      <div className="SidebarPrjoectsSection">
        <div className="ProjectStatus">
          <p className="Strong">Yarn in stash:</p>
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
      <div className="AddYarn">
        <p className="Strong">Add yarn to your stash:</p>
        <AddButton to="/addyarn" value="Add yarn" />
      </div>
      <hr />
      <div className="SidebarLinksSection">
        <SidebarLinks />
      </div>
    </div>
  );
}
