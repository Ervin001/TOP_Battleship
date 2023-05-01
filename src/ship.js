class Ship {
  #sunk = false;

  #hits = 0;

  constructor(length) {
    this.length = length;
  }

  /**
   * function increases the hits on the ship
   */
  hit() {
    this.#hits++;
  }

  isSunk() {
    // Returns true or false based on number of hits and the length
    // this.length === this.hits ? true : false;
    return this.length === this.#hits;
  }
}

export default Ship;
