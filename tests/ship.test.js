import Ship from '../src/ship.js';

describe('Ship', () => {
  test('Adds hits to ship', () => {
    const ship = new Ship(2);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.showHits()).toBe(3);
  });

  test('Show if the ship sunk', () => {
    const ship = new Ship(2);
    ship.hit(); // #hits === 1
    expect(ship.isSunk()).toBeFalsy();
  });

  test('Sinks the ship', () => {
    const ship = new Ship(2);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBeTruthy();
  });
});
