import Ship from '../src/ship.js';

describe('Ship', () => {
  const ship = new Ship(2);
  test('Log the correct length of the ship', () => {
    expect(ship.logLength()).toEqual(2);
  });

  test('Show if the ship sunk', () => {
    ship.hit(); // #hits === 1
    expect(ship.isSunk()).toBeFalsy();
  });
});
