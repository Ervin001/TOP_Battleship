class Ship {
  #sunk = false;
  #hits = 0;

  constructor(length) {
    this.length = length;
  }

  hit() {
    this.#hits++;
  }

  logLength() {
    return this.length;
  }

  isSunk() {
    // Returns true or false based on number of hits and the length
    // this.length === this.hits ? true : false;
    return this.length === this.#hits;
  }
}

export default Ship;
