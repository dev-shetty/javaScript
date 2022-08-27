import { useEffect, useRef } from "react";
import "./Quotes.css";

function Quote() {
  const options = { method: "GET" };

  const quoteContent = useRef(null);
  const quoteAuthor = useRef(null);
  function getQuotes() {
    fetch("https://programming-quotes-api.herokuapp.com/quotes", options)
      .then((response) => response.json())
      .then((quote) => {
        const { en, author } = quote[randomNumber(quote.length)];
        quoteContent.current.textContent = en;
        quoteAuthor.current.textContent = author;
      })
      .catch((error) => {
        console.error(error);
        quoteContent.current.textContent = `Some Issues with the API continue with others by then.
          Sorry for Inconvinence.`;
      });
  }
  getQuotes();

  function randomNumber(number) {
    return Math.floor(Math.random() * number);
  }
  function randomFunFact() {
    quoteContent.current.textContent = "...";
    quoteAuthor.current.textContent = "";
    setTimeout(() => {
      getQuotes();
    }, 500);
  }
  return (
    <main id="main-parent">
      <div className="main-content">
        <header>
          <h1 style={{ fontSize: "2.5em" }}>Quote:</h1>
        </header>
        <h2 className="quote" ref={quoteContent}></h2>
        <h3 className="author" ref={quoteAuthor}></h3>
      </div>
      <button id="random" onClick={randomFunFact}>
        Random
      </button>
    </main>
  );
}

export default Quote;
