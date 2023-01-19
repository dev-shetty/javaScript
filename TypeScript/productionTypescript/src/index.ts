class User {
  email: string
  name: string
  city: string = ""
  constructor(email: string, name: string) {
    this.email = email
    this.name = name
  }
}
const deveesh = new User("d@d.com", "deveesh")
deveesh.city = "Puttur"
console.log(deveesh.city)
