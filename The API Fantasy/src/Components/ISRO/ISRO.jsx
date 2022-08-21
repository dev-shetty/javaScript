import React from "react";
import { useEffect } from "react";
import "./ISRO.css";

function ISRO() {
  let endPoint = "spacecrafts";
  function getISROData() {
    fetch(`https://isro.vercel.app/api/${endPoint}`)
      .then((response) => response.json())
      .then((isroData) => {
        console.log(isroData);
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getISROData();
  }, []);
  return (
    <>
      <h1>ISRO PAGE</h1>
    </>
  );
}

export default ISRO;
