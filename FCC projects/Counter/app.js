let count = 0;
let counterValue = document.getElementById("value");
let buttons = document.querySelectorAll(".btn");


buttons.forEach( button => {
    button.addEventListener("click", (event) => {
        const classNames = event.currentTarget.classList;
        if(classNames.contains("decrease")) {
            count --;
        }
        else if(classNames.contains("increase")) {
            count ++;
        }
        else {
            count = 0;
        }
        if(count > 0) {
            counterValue.style.color = "green";
        }
        if(count < 0) {
            counterValue.style.color = "red";
        }
        if(count === 0) {
            counterValue.style.color = "#222"
        }
        counterValue.textContent = count;
    });
});