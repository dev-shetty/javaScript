import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import Navbar from "../Components/Navbar/Navbar";
import Content from "../Components/Content/Content";

function Homepage() {
  document.title = "API Fantasy";
  return (
    <>
      <Navbar />
      <Sidebar />
      <Content />
    </>
  );
}

export default Homepage;
