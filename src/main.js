class GameBoard {
  #board = [];

  #boardLength = 10;

  constructor() {
    this.createBoard();
  }

  /**
   * @x coordinate for x
   * @y coordinate for y
   * @func check if ship us hit or not,
   * if it hot then it should send the
   * hit function to the right ship.
   * Otherwise record the missed shot
   */
  //   recieveAttack(x, y) {}
  createBoard() {
    // loop for creating the rows 'x'
    for (let i = 0; i < this.#boardLength; i++) {
      this.#board[i] = [];
    }

    // loops populates the rows 'y'
    for (let n = 0; n < this.#boardLength; n++) {
      for (let j = 0; j < this.#boardLength; j++) {
        this.#board[n][j] = {
          x: n,
          y: j,
          value: 0,
        };
      }
    }
  }
}
