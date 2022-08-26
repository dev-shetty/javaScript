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
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
