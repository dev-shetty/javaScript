type User = {
  name: string
  email: string
  isActive: boolean
}

// fun part
type myString = string
const name: myString = "Deveesh"

function createUser(user: User): User {
  return { name: "", email: "", isActive: true }
}

createUser({ name: "", email: "", isActive: true })

export {}
