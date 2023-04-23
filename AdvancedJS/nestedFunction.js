let a = 10

function outer() {
  let b = 20
  function inner() {
    let c = 30
    console.log({ a, b, c })
  }
  // console.log({ a, b, c })  Gives error as c is not defined
  inner()
}

outer()
