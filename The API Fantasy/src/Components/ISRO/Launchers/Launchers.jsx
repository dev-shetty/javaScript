import React from "react";
import { useRef } from "react";
import ISROnavbar from "../ISROnavbar/ISROnavbar";

function Launchers() {
  const individualLauncher = useRef(null);
  let endPoint = "launchers";
  function getISROData() {
    fetch(`https://isro.vercel.app/api/${endPoint}`)
      .then((response) => response.json())
      .then((launchersData) => {
        console.log(launchersData);

        const { launchers } = launchersData;
        console.log(launchers);

        launchers.forEach((item) => {
          const { id } = item;
          console.log(id);
          const h2 = document.createElement("h2");
          h2.innerHTML = id;
          h2.classList.add("launcher-name");
          individualLauncher.current.append(h2);
        });
      })
      .catch((error) => {
        console.error(error);
        individualLauncher.current.textContent = `Some Issues with the API continue with others by then.
          Sorry for Inconvinence.`;
      });
  }
  getISROData();
  return (
    <div className="launchers">
      <ISROnavbar />
      <h1>Launchers</h1>
      <div className="launchers-parent" ref={individualLauncher}>
        {/* divs will be appended by js */}
      </div>
    </div>
  );
}

export default Launchers;
