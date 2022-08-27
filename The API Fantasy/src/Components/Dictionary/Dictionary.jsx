import React from "react";
import { useRef } from "react";
import "./Dictionary.css";

function Dictionary() {
  const dictionaryResults = useRef(null);
  const searchQuery = useRef(null);
  const phoneticsRef = useRef(null);
  const partsOfSpeech = useRef(null);
  const definition = useRef(null);
  const errorMessage = useRef(null);

  let searchContent;
  function getSearchQuery() {
    searchContent = searchQuery.current.value;
    getDictionaryResult();

    // TODO: Show error when nothing inside the textbox
  }
  function getDictionaryResult() {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchContent}`)
      .then((response) => response.json())
      .then((dictionaryData) => {
        if (dictionaryData.title == "No Definitions Found") {
          dictionaryResults.current.style.opacity = "0";
          errorMessage.current.style.display = "block";
          return 0;
        }
        dictionaryResults.current.style.opacity = "1";
        errorMessage.current.style.display = "none";
        phoneticsRef.current.textContent = dictionaryData[0].phonetics[1].text;
        partsOfSpeech.current.textContent =
          dictionaryData[0].meanings[0].partOfSpeech;
        definition.current.textContent =
          dictionaryData[0].meanings[0].definitions[0].definition;
      })
      .catch((error) => {
        console.error(error);
        errorMessage.current.textContent = `Some Issues with the API continue with others by then.
          Sorry for Inconvinence.`;
      });
  }
  return (
    <div>
      <h1 className="dictionary-heading">Dictionary</h1>
      <div id="dictionary">
        <main className="dictionary-container">
          <label htmlFor="searchText">Search Text</label>
          <input
            type="text"
            name="searchText"
            id="searchText"
            placeholder="Enter Text Here"
            ref={searchQuery}
          />
          <input type="submit" value="Search" onClick={getSearchQuery} />

          {/* Will come using js even the elements */}
          <h1
            className="error"
            style={{
              color: "red",
              fontSize: "3.5em",
              textAlign: "center",
              marginBlock: "10%",
              display: "none",
            }}
            ref={errorMessage}
          >
            No Definitions Found
          </h1>
          <div className="result" ref={dictionaryResults}>
            <h4 className="phonetics" ref={phoneticsRef}></h4>
            <p className="parts-of-speech" ref={partsOfSpeech}></p>
            <p className="definition" ref={definition}></p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dictionary;
