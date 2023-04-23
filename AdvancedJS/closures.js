function outer() {
  let counter = 0
  function inner() {
    // let counter = 0  it will take this since its nearer and result will be 1 everytime
    counter++
    console.log({ counter })
  }
  return inner
}

const fn = outer()
fn() // 1
fn() // 2
fn() // 3
fn() // 4
