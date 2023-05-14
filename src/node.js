export default class Node {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.visited = false;
    this.ship = null;
    this.edges = [];
  }
}
