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
  private _courseCount = 1
  protected count = 1

  city: string = "Daman"
  constructor(public email: string, public name: string) {}

  private deleteToken() {
    console.log("Hello")
  }

  // Getter
  get getAppleEmail(): string {
    return `apple${this.email}`
  }
  get getCourseCount(): number {
    return this._courseCount
  }

  // Setter
  set setCourseCount(courseNumber: number) {
    if (courseNumber <= 1) {
      throw new Error("Course count should be more than 1")
    }
    this._courseCount = courseNumber
  }
}

// Inheritance
class SubUser extends User {
  // cannot acquire private property
  isFamily = true
  changeCount() {
    this.count = 5
  }
}

const deveesh = new User("d@d.com", "deveesh")
deveesh.city = "Puttur"
// deveesh.name = "dev"
console.log(deveesh.city)
console.log(deveesh.getCourseCount)
// deveesh.deleteToken() // private property only accessible to class
