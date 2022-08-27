import React from "react";
import { useRef } from "react";
import "./Animals.css";

function Animals() {
  const randomAnimal = useRef(null);
  const url = "https://zoo-animal-api.herokuapp.com/animals/rand";
  function getRandomAnimals() {
    fetch(url)
      .then((response) => response.json())
      .then((animal) => {
        console.log(animal);
        const { name, animal_type, geo_range, habitat, image_link, diet } =
          animal;

        const img = document.createElement("img");
        img.setAttribute("src", image_link);
      });
  }
  getRandomAnimals();
  return (
    <div id="animals">
      <h1>Random Animal</h1>
      <main ref={randomAnimal}>
        <h1 className="animal-name"></h1>
        <p className="animal-type"></p>
        <p className="geological-range"></p>
        <p className="habitat"></p>
        <p className="diet"></p>
      </main>
    </div>
  );
}

export default Animals;
