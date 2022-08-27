import React from "react";
import { useEffect } from "react";
import "./ISRO.css";
import ISROnavbar from "./ISROnavbar/ISROnavbar";

function ISRO() {
  return (
    <main id="isro-main">
      <ISROnavbar />
      <div className="isro-content">
        {/* TODO: Add content here */}
        <h1>ISRO PAGE</h1>
        <p>
          Get information about the ISRO centres, spacecrafts and launchers in
          this page
        </p>
        <p>You can see them from the above navbar</p>
      </div>
    </main>
  );
}

export default ISRO;
