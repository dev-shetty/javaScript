import React from "react";
import { useRef } from "react";
import ISROnavbar from "../ISROnavbar/ISROnavbar";
import "../ISRO.css";

function SpaceCrafts() {
  const individualSpaceCraft = useRef(null);
  let endPoint = "spacecrafts";
  function getISROData() {
    fetch(`https://isro.vercel.app/api/${endPoint}`)
      .then((response) => response.json())
      .then((spaceCraftData) => {
        // console.log(spaceCraftData);

        const { spacecrafts } = spaceCraftData;
        // console.log(spacecrafts);
        spacecrafts.forEach((item) => {
          //   console.log(item.id);
          //   console.log(item.name);

          const h3 = document.createElement("h3");
          h3.classList.add("space-craft-name");
          h3.innerHTML = item.name;
          individualSpaceCraft.current.append(h3);
        });
      })
      .catch((error) => {
        console.error(error);
        individualSpaceCraft.current.textContent = `Some Issues with the API continue with others by then.
          Sorry for Inconvinence.`;
      });
  }
  getISROData();
  return (
    <div className="space-crafts">
      <ISROnavbar />
      <h1>Space Crafts</h1>
      <div className="space-crafts-content" ref={individualSpaceCraft}>
        {/* divs will be appended by js */}
      </div>
    </div>
  );
}

export default SpaceCrafts;
