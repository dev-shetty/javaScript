"use strict";
class User {
    constructor(email, name) {
        this.city = "";
        this.email = email;
        this.name = name;
    }
}
const deveesh = new User("d@d.com", "deveesh");
deveesh.city = "Puttur";
console.log(deveesh.city);
