import GameBoard from './gameBoard.js';

const gameBoard = new GameBoard();

console.log(gameBoard.getNeighbors(9, 3, gameBoard.ships[0], 'h'));
console.log(gameBoard.getNeighbors(9, 3, gameBoard.ships[0], 'v'));
