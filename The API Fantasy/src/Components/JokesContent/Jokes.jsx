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
      .catch((error) => {
        console.error(error);
        jokeSetup.current.textContent = `Some Issues with the API continue with others by then.
          Sorry for Inconvinence.`;
      });
  }

  function randomJokes() {
    jokeSetup.current.textContent = "...";
    jokeDelivery.current.textContent = "";
    setTimeout(() => {
      getJokes();
    }, 500);
  }

  getJokes();

  return (
    <main id="main-parent">
      <div className="main-content">
        <header>
          <h1>Joke:</h1>
        </header>
        <h2 ref={jokeSetup} className="joke-setup"></h2>
        <h2 ref={jokeDelivery} className="joke-delivery"></h2>
      </div>
      <button id="random" onClick={randomJokes}>
        Random
      </button>
    </main>
  );
}

export default Jokes;
