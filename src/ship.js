class Ship {
  #sunk = false;

  #hits = 0;

  #direction = 'Horizontal';

  constructor(length) {
    this.length = length;
  }

  // function increases the hits on the ship
  hit() {
    this.#hits++;
  }

  // func to show the number of hits
  showHits() {
    return this.#hits;
  }

  isSunk() {
    // Returns true or false based on number of hits and the length
    // this.length === this.hits ? true : false;
    // eslint-disable-next-line no-unused-expressions
    return this.length === this.#hits;
  }

  sink() {
    // eslint-disable-next-line no-unused-expressions
    this.length === this.#hits ? (this.#sunk = true) : false;
  }
}

export default Ship;
