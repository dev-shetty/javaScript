import React from "react";
import ISROnavbar from "../ISROnavbar/ISROnavbar";
import { useRef } from "react";

function Centres() {
  const individualCentre = useRef(null);
  let endPoint = "centres";
  function getISROData() {
    fetch(`https://isro.vercel.app/api/${endPoint}`)
      .then((response) => response.json())
      .then((centresData) => {
        const { centres } = centresData;

        centres.forEach((item) => {
          const { name, Place, State } = item;

          const h2 = document.createElement("h2");
          const PlaceP = document.createElement("p");
          const StateP = document.createElement("p");
          const div = document.createElement("div");

          div.classList.add("centre-container");

          h2.textContent = name;
          PlaceP.textContent = Place;
          StateP.textContent = State;

          div.append(h2);
          div.append(PlaceP);
          div.append(StateP);

          individualCentre.current.append(div);
        });
      })
      .catch((error) => {
        console.error(error);
        individualCentre.current.textContent = `Some Issues with the API continue with others by then.
          Sorry for Inconvinence.`;
      });
  }
  getISROData();
  return (
    <div className="centres">
      <ISROnavbar />
      <h1>Centres</h1>
      <div className="centres-parent" ref={individualCentre}>
        {/* divs will be appended by js */}
      </div>
    </div>
  );
}

export default Centres;
