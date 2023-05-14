import Node from './node.js';
import Ship from './ship.js';

class GameBoard {
  #board = [];

  #boardLength = 10;

  #ships = [];

  constructor() {
    this.#createBoard();
    this.#createShips();
  }

  /**
   * Check if the ship is hit or not, if it is hit then it should send the hit function to the right ship. Otherwise, record the missed shot.
   * @param {number} x - The x coordinate for the attack
   * @param {number} y - the y coordinate for the attack
   * @returns {undefined}
   */
  receiveAttack(x, y) {
    return this;
  }

  #createBoard() {
    // loop for creating the rows 'x'
    for (let i = 0; i < this.#boardLength; i++) {
      this.#board[i] = [];
    }

    // loops populates the rows 'y'
    for (let n = 0; n < this.#boardLength; n++) {
      for (let j = 0; j < this.#boardLength; j++) {
        this.#board[n][j] = new Node(n, j);
      }
    }
  }

  #createShips() {
    for (let length = 4; length >= 1; length--) {
      for (let i = 0; i < 5 - length; i++) {
        const ship = new Ship(length);
        this.#ships.push(ship);
      }
    }
  }

  /**
   *
   * @param {number} xCoord - The x coordinates of the ship's position.
   * @param {number} yCoord - The y coordinates of the ship's position.
   * @param {{}} ship - The ship object to place.
   * @param {string} direction - The direction in which to place the ship.
   * @returns {void}
   */
  placeShip(xCoord, yCoord, ship, direction) {
    return { xCoord, yCoord, ship, direction };
  }

  get ships() {
    return this.#ships;
  }
}

export default GameBoard;
