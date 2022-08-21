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
          <a href="#">API 2</a>
        </li>
        <li>
          <a href="#">API 3</a>
        </li>
        <li>
          <a href="#">API 4</a>
        </li>
        <li>
          <a href="#">API 5</a>
        </li>
        <li>
          <a href="#">API 6</a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
