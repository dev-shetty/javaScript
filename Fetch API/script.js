// fetch api
// Syntax fetch("apiLink", {Passing areguments (optional)})

// fetch("https://catfact.ninja/fact")
//     .then(response => console.log(response));    // gets response status
function fetchAPI() {
    fetch("https://catfact.ninja/fact")
    .then(response => response.json())  // converting the response to json
    .then(data => console.log(data))   // reading the json data
    .catch(error => console.log("ERROR"));  // shows error message if its 404
}

function fetchWithCondition() {
    fetch("https://catfact.ninja/fact")
    .then(response => {
        if(response.ok) {   // Checkif the response is ok or not 
            console.log("SUCCESS"); 
        } else {
            console.log("NOT SUCCESSFUL");
        }
        response.json();
    })  
    .then(data => console.log(data))   
    .catch(error => console.log("ERROR"));  
}


// Do more stuff with fetch like post update delete
// Not working in this case but this is how it works

function fetchUpdates() {
    fetch("https://randomuser.me/api", {   // method can be POST, GET, PUT, DELETE
        method: "POST",  // Adding user
        headers: {      // Telling that we are passing JSON file
            "Content-Type": "application/json"
        },
        body: JSON.stringify({         // JSON object which says about our user
            name: "User 1"
        })
    }).then(response => response.json()).then(data => console.log(data));
}    


fetchAPI();