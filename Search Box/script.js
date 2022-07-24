const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");
const searchBox = document.getElementById("search");



// searchBox.addEventListener("keypress", search);

// function search(event) {
//     // console.log(event.key);


//     if(event.key === "Enter") {
//         console.log("Enter is pressed");
//         let searchElement = searchBox.value;
//         searchElement = searchElement.toLowerCase();
//         console.log(searchElement);

//         // li.style.display = "none";

//         // li.forEach(Item => {
//         //     if(searchElement == Item) {
//         //         // li.style.display = "block";
//         //         li.style.backgroundColor = "red";
//         //     }
//         // });

//         for(let i=0; i< li.length; i++) {
//             li[i].style.display = "none";
//         }

//         li.forEach(searchFunc);
//         function searchFunc(item) {
//             // console.log("Hello")
//             // console.log(li);
//             // console.log(item.textContent);

//             if(searchElement == item.textContent.toLowerCase()) {
//                 item.style.display = "block";
//             }
//         }
//     }
// }

// if(searchText === " ") {
//     item.style.display = "block";
// }

searchBox.addEventListener("keyup", (event) => {
    let searchText = event.target.value.toLowerCase();
    console.log(searchText);


    Array.from(li).forEach(item => {

        let itemName = item.firstChild.textContent
        if(itemName.toLowerCase().indexOf(searchText) === -1) {
            item.style.display = "none";
            // item.style.backgroundColor = "white";
            // item.style.color = "black";
        } else {
            item.style.display = "block";
            // item.style.backgroundColor = "blue";
            // item.style.color="white";
        }
    });
    // li.forEach(item => {
    //     // console.log(item.textContent);
    //     if(item.textContent.toLowerCase() == searchText) {
    //         item.style.backgroundColor = "red";
    //     }
    // });
});