import React from "react";
import "./About.css";

function About() {
  return (
    <div id="about">
      <h1>About the Project</h1>
      <main>
        <div className="api-reference" id="about-joke">
          <h2>Jokes API: </h2>
          <p>
            It shows a <span>random joke</span> on each render.{" "}
          </p>
          <p>
            There is a random button to generate a new joke and have some{" "}
            <span>laugh</span>.
          </p>
          <h3>API link:</h3>
          <kbd>"https://v2.jokeapi.dev/joke/"</kbd>
        </div>
        <div className="api-reference" id="about-quotes">
          <h2>Quotes API: </h2>
          <p>
            Generates a <span>random quote</span>
          </p>
          <p>
            There is a random button to generate a new quote and{" "}
            <span> motivate you </span>.
          </p>
          <h3>API link:</h3>
          <kbd>https://programming-quotes-api.herokuapp.com</kbd>
        </div>
        <div className="api-reference" id="about-isro">
          <h2>ISRO API: </h2>
          <p>This API gives information about the ISRO </p>
          <p>It has 3 divisions</p>
          <ul>
            <li>
              <span>Centres</span> It mentions about all the centres of ISRO.
            </li>
            <li>
              <span>Launchers</span> It mentions the launchers present in ISRO.
            </li>
            <li>
              <span>Spacecrafts</span> It mentions about all the spacecrafts.
            </li>
          </ul>
          <p>If you love ISRO you would like to see this</p>
          <h3>API link:</h3>
          <kbd>https://isro.vercel.app</kbd>
        </div>
        <div className="api-reference" id="dicitionary-quotes">
          <h2>Dictionary API: </h2>
          <p>
            It is like a <span>dictionary</span> as it says :)
          </p>
          <p>
            Search the word you want the meaning for in the textbox and get the
            meaning and phonetics of it
          </p>
          <h3>API link:</h3>
          <kbd>https://api.dictionaryapi.dev/api/v2/entries/en/</kbd>
        </div>
        <div className="api-reference" id="dicitionary-quotes">
          <h2>Pincode API: </h2>
          <p>
            If you want to know <span>pincode</span> of a city then you are in
            the right place.
          </p>
          <p>
            Search the city and then you will get a bunch of result satisfying
            the name with the exact location and you can find the pincode.
          </p>
          <h3>API link:</h3>
          <kbd>http://www.postalpincode.in/Api-Details</kbd>
        </div>
      </main>
    </div>
  );
}

export default About;
