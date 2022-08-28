import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../Assets/api-logo.png";

function Navbar() {
  return (
    <nav id="main-nav">
      <ul>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
