// readonly makes the variable not be able to change

// ? makes the thing optional
type User = {
  readonly _id: string
  name: string
  email: string
  isActive: boolean
  creditCardDetails?: number
}

let myUser: User = {
  _id: "123456",
  name: "Deveesh",
  email: "d@d.com",
  isActive: false,
}
myUser.email = "d@gmail.com"

// Mix and matching of types when there are many times and want to mix them
type cardNumber = {
  cardNumber: string
}
type cardDetails = cardNumber &
  cardDate & {
    cvv: number
  }

type cardDate = {
  cardDate: string
}

const card: cardDetails = {
  cardNumber: "1234",
  cardDate: "12/09",
  cvv: 123,
}

export {}
