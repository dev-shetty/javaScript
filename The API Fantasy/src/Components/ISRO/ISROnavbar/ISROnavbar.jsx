import React from "react";
import { Link } from "react-router-dom";

function ISROnavbar() {
  return (
    <nav id="isro-nav">
      <ul>
        <li>
          <Link to="/centres">Centres</Link>
        </li>
        <li>
          <a href="#">Launchers</a>
        </li>
        <li>
          <Link to="isro/spacecrafts">Spacecrafts</Link>
          {/* It showed no routes matched then just removed "/" from /isro/spacecrafts */}
        </li>
      </ul>
    </nav>
  );
}

export default ISROnavbar;
