// Implicit Binding
const person = {
  name: "Deveesh",
  sayMyName: function () {
    console.log(`My name is ${this.name}`)
  },
}
person.sayMyName()

// Explicit Binding
function sayMyName() {
  console.log(`My name is ${this.name}`)
}
sayMyName.call(person)

// New Binding
// This function is also called as Constructor Person
function Person(name) {
  // the new keyword creates -> this = {}
  this.name = name
}

const p1 = new Person("Deveesh")
const p2 = new Person("Thor")

console.log(p1.name, p2.name)

// Default Binding
// globalThis.name = "Deveesh" <-- declaring globally

sayMyName() // it will default to global scope
// Since it doesnt find name it will give undefined
