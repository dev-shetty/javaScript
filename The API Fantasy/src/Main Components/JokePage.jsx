import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import Navbar from "../Components/Navbar/Navbar";
import Jokes from "../Components/JokesContent/Jokes";

function JokePage() {
  document.title = "API Fantasy - Jokes";
  return (
    <>
      <Navbar />
      <Sidebar />
      <Jokes />
    </>
  );
}

export default JokePage;
