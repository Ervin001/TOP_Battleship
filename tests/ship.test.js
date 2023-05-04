import Ship from '../src/ship.js';

describe('Ship', () => {
  const ship = new Ship(2);

  test('Show if the ship sunk', () => {
    ship.hit(); // #hits === 1
    expect(ship.isSunk()).toBeFalsy();
  });
  test('Sinks the ship', () => {
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBeTruthy();
  });
});
