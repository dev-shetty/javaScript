const imageScreen = document.querySelector(".pokemon-image");
const name = document.querySelector(".pokemon-name-text");
const info = document.querySelector(".pokemon-info");
const type = document.querySelector(".pokemon-type");
const randomButton = document.querySelector(".circle-button");


const URL = "https://pokeapi.co/api/v2/pokemon/";
function randomNumber(totalNumber) {
    let number = Math.floor(Math.random()*totalNumber);
    return number;
}

function randomPokemon() {
    fetch(`${URL}${randomNumber(1155)}`)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            // console.log(data.name);
            // console.log(data.sprites.front_default);
    
            // // Distinct moves
            // console.log(data.moves[randomNumber(30)].move.name);
            // console.log(data.moves[randomNumber(30)].move.name);
            // console.log(data.moves[randomNumber(30)].move.name);
            // console.log(data.moves[randomNumber(30)].move.name);
    
            // console.log(data.types[0].type.name)
    
            imageScreen.src = data.sprites.front_default;
            name.append(data.name)
            for(let i = 0; i < 6; i++) {
                let p = document.createElement("p");
                p.append(data.moves[randomNumber(30)].move.name);
                info.append(p); 
            }
            type.append("Type: " + data.types[0].type.name);
        })
        .then(error => console.log(error));
}
randomPokemon();