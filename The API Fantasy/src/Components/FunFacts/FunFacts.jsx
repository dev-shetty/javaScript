import { useEffect, useRef } from "react";
import "./FunFacts.css";

function FunFacts() {
  const options = { method: "GET" };

  const funFactEle = useRef(null);
  function getFunFacts() {
    fetch("https://asli-fun-fact-api.herokuapp.com/", options)
      .then((response) => response.json())
      .then((funFact) => {
        const {
          data: { fact },
        } = funFact;

        funFactEle.current.textContent = fact;
      })
      .catch((error) => console.error(error));
  }
  getFunFacts();

  function randomFunFact() {
    funFactEle.current.textContent = "...";
    setTimeout(() => {
      getFunFacts();
    }, 500);
  }
  return (
    <main id="main-parent">
      <div className="main-content">
        <header>
          <h1 style={{ fontSize: "2.5em" }}>Fun Fact:</h1>
        </header>
        <h2 className="fun-fact" ref={funFactEle}></h2>
      </div>
      <button id="random" onClick={randomFunFact}>
        Random
      </button>
    </main>
  );
}

export default FunFacts;
