import Ship from '../src/ship.js';

describe('Ship', () => {
  test('Should log the correct length of the ship', () => {
    const ship = new Ship(2);
    expect(ship.logLength()).toEqual(2);
  });
});
