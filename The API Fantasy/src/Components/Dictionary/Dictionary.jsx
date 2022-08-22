import React from "react";
import { useRef } from "react";
import "./Dictionary.css";

function Dictionary() {
  const dictionaryResults = useRef(null);
  const searchQuery = useRef(null);
  let searchContent = "";
  function getSearchQuery() {
    searchContent = searchQuery.current.value;
    getDictionaryResult(searchContent);

    // TODO: Show error when nothing inside the textbox
  }
  function getDictionaryResult() {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchContent}`)
      .then((response) => response.json())
      .then((dictionaryData) => {
        console.log(dictionaryData);

        const phonetics = dictionaryData[0].phonetics.forEach((item) => {
          item.text;
        });
        console.log(phonetics);

        // TODO:Make them innerText / textContent rather than appending it has a bug
        // defining the items
        const searchQueryH3 = document.createElement("h3");
        const phoneticsH4 = document.createElement("h4");
        const partsOfSpeechP = document.createElement("p");
        const definitionP = document.createElement("p");

        // assigning classnames
        searchQueryH3.classList.add("search-query");
        phoneticsH4.classList.add("phonetics");
        partsOfSpeechP.classList.add("parts-of-speech");
        definitionP.classList.add("definition");

        // assigning values to the elements
        searchQueryH3.textContent = "Search Query: "; //change
        phoneticsH4.textContent = "Phonetics: ";
        partsOfSpeechP.textContent = "Parts of Speech: ";
        definitionP.textContent = "Definition: ";

        // appending them to dom
        dictionaryResults.current.append(
          searchQueryH3,
          phoneticsH4,
          partsOfSpeechP,
          definitionP
        );
      })
      .catch((error) => console.error(error));
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
          <div className="result" ref={dictionaryResults}>
            {/* <h3 className="search-query">Search Query</h3> */}
            {/* <h4 className="phonetics">/phonetic-IPA/</h4> */}
            {/* <p className="parts-of-speech">Parts of Speech</p> */}
            {/* <p className="defintion">Definition</p> */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dictionary;
