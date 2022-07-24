// Getting all the HTML elemtnts
const mainDiv = document.querySelector(".random-user");
const profilePicEle = document.getElementById("profile-picture");
const nameEle = document.querySelector(".name");
const dobEle = document.querySelector(".dob");
const ageEle = document.querySelector(".age");
const genderEle = document.querySelector(".gender");
const emailEle = document.querySelector(".email-id");
const locationEle = document.querySelector(".location");



fetch("https://randomuser.me/api/").then(response => response.json()).then(data => {
    // console.log(data);
    // console.log(data.results[0]);

    const newData = data.results[0]

    const profilePic = newData.picture.large;
    
    const nameTitle = newData.name.title;
    const firstName = newData.name.first;
    const lastName = newData.name.last;
    const name = nameTitle + " " + firstName + " " + lastName;
    // console.log(name);
    
    const dob = newData.dob.date;
    const actualDob = dob.substring(0, 10)
    const age = newData.dob.age;
    const gender = newData.gender;

    const email = newData.email;

    const country = newData.location.country;
    const state = newData.location.state;
    const city = newData.location.city;
    const street = newData.location.street.number + " " + newData.location.street.name;

    const location = country + ", " + state + ", " + city + ", " + street;
    // console.log(location)
    
    // Appending all of them to HTML

    profilePicEle.setAttribute("src", profilePic)
    nameEle.append(name);
    dobEle.append("DOB: " + actualDob);
    ageEle.append("Age: " + age);
    genderEle.append("Gender: " + gender);
    emailEle.append("Email: " + email);
    locationEle.append("Address: " + location);

});







