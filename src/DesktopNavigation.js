import NavLinks from "./NavLinks";
import "./Navbar.css";

const DesktopNavigation = () => {
  return (
    <nav className="DesktopNavigation">
      <h2 className="logo">Unwind Yarn</h2>
      <NavLinks />
    </nav>
  );
};

export default DesktopNavigation;
