import "./Sidebar.css";

import YarnPhoto from "./yarn.jpg";

export default function Sidebar() {
  return (
    <div className="Sidebar">
      <h2>Laetitia's Journal</h2>
      <img src={YarnPhoto} alt="A shelf filled with colourful yarn" />
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
          <p>0</p>
        </div>
        <div className="ProjectStatus">
          <p className="Strong">Future projects:</p>
        </div>
        <div className="ProjectStatusNumber">
          <p>0</p>
        </div>
      </div>
      <hr />
      <div className="SidebarLinks">
        <p className="Strong">Projects</p>
        <p className="Strong">Yarn stash</p>
        <p className="Strong">My profile</p>
        <p className="Strong">Settings</p>
        <p className="Strong">Logout</p>
      </div>
    </div>
  );
}
