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
      </div>
    </main>
  );
}

export default ISRO;
