import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import Animals from "../Components/Animals/Animals";

function AnimalPage() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Animals />
    </>
  );
}

export default AnimalPage;
