// To give choices which maintains clearer code
// enum SeatChoice {
//   AISLE,
//   MIDDLE,
//   WINDOW,
// }

// To give our own numbers / values
// using const to avoid ify (bunch of js codes)
const enum SeatChoice {
  AISLE = "AISLE",
  MIDDLE = 22,
  WINDOW, //23
  FOURTH,
}

const devSeat = SeatChoice.AISLE

export {}
