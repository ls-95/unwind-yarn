import NavLinks from "./NavLinks";
import "./Navbar.css";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const MobileNavigation = () => {
  const [click, setclick] = useState(false);

  const Hamburger = (
    <TiThMenu
      className="HamburgerMenu"
      size="30px"
      color="black"
      onClick={() => setclick(!click)}
    />
  );

  const Close = (
    <IoMdCloseCircleOutline
      className="HamburgerMenu"
      size="30px"
      color="black"
      onClick={() => setclick(!click)}
    />
  );

  const closeMenu = () => setclick(false);

  return (
    <nav className="MobileNavigation">
      <h2 className="logo">Unwind Yarn</h2>
      {click ? Close : Hamburger}
      {click && <NavLinks closeMenu={closeMenu} />}
    </nav>
  );
};

export default MobileNavigation;
