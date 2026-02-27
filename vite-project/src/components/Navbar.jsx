import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-left">
        <li>Rings</li>
        <li>Necklaces</li>
        <li>Earrings</li>
      </ul>

      <div className="logo">DIVA</div>

      <ul className="nav-right">
        <li>Collections</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
