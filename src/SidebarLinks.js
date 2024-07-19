import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function SidebarLinks() {
  return (
    <div className="SidebarLinks">
      <p className="Strong">
        <Link to="/projects" className="Link">
          Projects
        </Link>
      </p>
      <p className="Strong">
        <Link to="/yarn" className="Link">
          Yarn stash
        </Link>
      </p>
      <p className="Strong">
        <Link to="/myprofile" className="Link">
          My profile
        </Link>
      </p>
      <p className="Strong">
        <Link to="/settings" className="Link">
          Settings
        </Link>
      </p>
      <p className="Strong">
        <Link to="/" className="Link">
          Logout
        </Link>
      </p>
    </div>
  );
}
