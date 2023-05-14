import GameBoard from '../src/gameBoard.js';
import Ship from '../src/ship.js';

describe('first', () => {
  const gameBoard = new GameBoard();
  const ship = new Ship();

  test.skip('Show Board', () => {
    expect(gameBoard.showBoard()[0][0]).toEqual({ x: 0, y: 0, value: 0 });
  });

  test('Check if ships are created', () => {
    const ships = gameBoard.ships;
    expect(Array.isArray(ships)).toBe(true);
    expect(ships.length).toBe(10);
    ships.forEach((ship) => {
      expect(ship instanceof Ship).toBe(true);
    });
  });
});
