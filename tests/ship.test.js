import { Ship } from '../main/ship.js';

test('Checks if the ship is sunk', () => {
  const ship = new Ship(3); // Create an instance of the Ship class with a length of 3
  expect(ship.isSunk(1, 2)).toBe(3); // Call the isSunk() method and assert that it returns false
});
