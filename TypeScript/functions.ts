// : after () is type of return (return-type)
function addTwo(num: number): number {
  return num + 2
}

function getUpper(val: string): string {
  return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

// Adding default value (isPaid paramter)
let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

let value = addTwo(5)
getUpper("Hello")

signUpUser("Deveesh", "something@something.com", true)
loginUser("D", "d@d.com")

const getHello = (s: string): string => {
  return ""
}

const heroes = ["thor", "superman", "spiderman", "ironman"]

// value returning is string...other types are added by smartness of typescript
heroes.map((hero): string => {
  return `hero is ${hero}`
})

// Function not returning anything
function consoleError(errmsg: string): void {
  console.log(errmsg)
}

// never returns a value as given in documentation...when does forceful exit
function handleError(errmsg: string): never {
  throw new Error(errmsg)
}

export {}
