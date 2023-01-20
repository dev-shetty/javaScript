"use strict";
// class User {
//   private email: string
//   readonly name: string
//   city: string = ""
//   constructor(email: string, name: string) {
//     this.email = email
//     this.name = name
//   }
// }
// Can also be written as
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.count = 1;
        this.city = "Daman";
    }
    deleteToken() {
        console.log("Hello");
    }
    // Getter
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get getCourseCount() {
        return this._courseCount;
    }
    // Setter
    set setCourseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNumber;
    }
}
// Inheritance
class SubUser extends User {
    constructor() {
        super(...arguments);
        // cannot acquire private property
        this.isFamily = true;
    }
    changeCount() {
        this.count = 5;
    }
}
const deveesh = new User("d@d.com", "deveesh");
deveesh.city = "Puttur";
// deveesh.name = "dev"
console.log(deveesh.city);
console.log(deveesh.getCourseCount);
// deveesh.deleteToken() // private property only accessible to class
