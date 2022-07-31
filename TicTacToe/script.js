const divSquares = document.querySelectorAll(".board > div");

divSquares.forEach(div => {
    div.addEventListener("click", play)
})

const player1 = "X";
const player2 = "O"
let move = 1;

function play (event) {
    // To make such that a tile can't be pressed twice
    if(event.target.innerText !== "") {
        window.alert("Already placed a move there");
        return    // get out of function so player wont lose move 
    }
    else if(move%2 !== 0) {
        event.target.textContent = player1;

        event.target.style.color = "lightseagreen"
        // Puts the value in the DOM
        // event.target.append(playerMove);
    } else {
        event.target.textContent = player2;
        // event.target.append(playerMove);
    }
    // Checks which tile was clicked
    const currentTile = event.target;
    move++; // To change the move order
}


