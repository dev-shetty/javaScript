import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside>
      <ul>
        <li>APIs</li>
        <li>
          <Link to="/jokes">Jokes</Link>
        </li>
        <li>
          <Link to="/quotes">Quotes</Link>
        </li>
        <li>
          <Link to="/isro">ISRO</Link>
        </li>
        <li>
          <Link to="/dictionary">Dictionary</Link>
        </li>
        <li>
          <Link to="/pincode">Pincode</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
