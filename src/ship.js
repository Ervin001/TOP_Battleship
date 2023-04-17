export class Ship {
  sunk = false;
  hits = 0;

  constructor(length) {
    this.length = length;
  }

  hit() {}

  test(n, s) {
    return n + s;
  }

  isSunk() {
    // Returns true or false based on number of hits and the length
    // this.length === this.hits ? true : false;
    return this.length === this.hits;
  }
}
