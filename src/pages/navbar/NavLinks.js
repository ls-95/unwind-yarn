import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Navbar.css";

const NavLinks = ({ isClicked, closeMenu }) => {
  return (
    <div className="NavLinks">
      <nav>
        <ul>
          <li>
            <Link to="/home" onClick={closeMenu}>
              Homepage
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/yarn">Yarn stash</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default NavLinks;
