import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import Navbar from "../Components/Navbar/Navbar";
import FunFacts from "../Components/FunFacts/FunFacts";

function FunFactPage() {
  document.title = "API Fantasy - Fun Fact";
  return (
    <>
      <Navbar />
      <Sidebar />
      <FunFacts />
    </>
  );
}

export default FunFactPage;
