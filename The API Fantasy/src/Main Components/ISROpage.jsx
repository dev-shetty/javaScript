import React from "react";
import ISRO from "../Components/ISRO/ISRO";
import ISROnavbar from "../Components/ISRO/ISROnavbar/ISROnavbar";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";

function ISROpage() {
  return (
    <>
      <Navbar />
      <ISROnavbar />
      <Sidebar />
      <ISRO />
    </>
  );
}

export default ISROpage;
