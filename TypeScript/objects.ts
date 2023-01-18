const User = {
  name: "deveesh",
  email: "deveesh@gmail.com",
  isActive: true,
}

function createUser({ name: string, isPaid: boolean }) {}

// Function returning object
function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 0 }
}



createUser({ name: "hello", isPaid: true })

export {}
