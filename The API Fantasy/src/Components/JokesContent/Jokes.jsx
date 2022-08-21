import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import "./Jokes.css";

function Jokes() {
  // TODO: Can add filters and also special topics like programmer jokes, dark etc.
  let flags = "nsfw,sexist";
  const url = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=${flags}`;
  const jokeSetup = useRef(null);
  const jokeDelivery = useRef(null);

  function getJokes() {
    fetch(url)
      .then((response) => response.json())
      .then((jokes) => {
        let { delivery, setup } = jokes;

        if (delivery == null) {
          delivery = " ";
        }
        if (setup != null) {
          jokeSetup.current.textContent = setup;
          jokeDelivery.current.textContent = " - " + delivery;
        } else {
          getJokes();
        }
      })
      .then((error) => console.log(error));
  }

  function randomJokes() {
    jokeSetup.current.textContent = "...";
    jokeDelivery.current.textContent = "";
    setTimeout(() => {
      getJokes();
    }, 500);
  }

  useEffect(() => {
    getJokes();
  }, []);

  return (
    <main id="jokes">
      <div className="joke">
        <h1 ref={jokeSetup} className="joke-setup"></h1>
        <h1 ref={jokeDelivery} className="joke-delivery"></h1>
      </div>
      <button id="random" onClick={randomJokes}>
        Random
      </button>
    </main>
  );
}

export default Jokes;
