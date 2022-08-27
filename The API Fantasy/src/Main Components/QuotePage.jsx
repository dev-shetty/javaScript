import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import Navbar from "../Components/Navbar/Navbar";
import Quotes from "../Components/Quotes/Quotes";

function FunFactPage() {
  document.title = "API Fantasy - Fun Fact";
  return (
    <>
      <Navbar />
      <Sidebar />
      <Quotes />
    </>
  );
}

export default FunFactPage;
