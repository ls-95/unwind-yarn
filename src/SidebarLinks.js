import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SidebarLinks() {
  const navigate = useNavigate();

  function handleLogout() {
    fetch("http://localhost:3001/logout", {
      method: "POST",
      body: JSON.stringify({
        text: "The user has logged out",
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.message);
      });
    navigate("/");
  }
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
        <Link to="/" className="Link" onClick={handleLogout}>
          Logout
        </Link>
      </p>
    </div>
  );
}
