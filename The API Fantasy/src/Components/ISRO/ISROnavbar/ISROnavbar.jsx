import React from "react";
import { Link } from "react-router-dom";

function ISROnavbar() {
  return (
    <nav id="isro-nav">
      <ul>
        <li>
          <Link to="/isro/centres">Centres</Link>
        </li>
        <li>
          <Link to="/isro/launchers">Launchers</Link>
        </li>
        <li>
          <Link to="/isro/spacecrafts">Spacecrafts</Link>
          {/* Add / on both main navbar link and child nav link to have them linked them */}
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}

export default ISROnavbar;
