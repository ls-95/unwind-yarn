import SidebarLinks from "../homepage/SidebarLinks";
import ProfilePhoto from "./profilephoto.jpg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./MyProfile.css";

export default function YarnSidebar() {
  return (
    <div className="Sidebar">
      <h2>Laetitia's Profile</h2>
      <img src={ProfilePhoto} alt="profile image" />
      <div className="SidebarPrjoectsSection">
        <div className="ProjectStatus">
          <p className="Strong">Projects:</p>
        </div>
        <div className="ProjectStatusNumber">
          <p className="TextFont">4</p>
        </div>
        <div className="ProjectStatus">
          <p className="Strong">Yarn:</p>
        </div>
        <div className="ProjectStatusNumber">
          <p className="TextFont">9</p>
        </div>
      </div>
      <hr />
      <div className="AddYarn">
        <p className="Strong">Edit your profile:</p>
        <Link to="/editprofile">Edit</Link>
      </div>
      <hr />
      <div className="SidebarLinksSection">
        <SidebarLinks />
      </div>
    </div>
  );
}
