import Block from './Block.js';

class Segments extends Block{
  constructor(x, width, height) {
    super(x, width, height);
    this.y = 20;
    this.dx = 5;
    this.dy = 5;
  }

  move(x, y) {
    this.x += this.dx;
    if (this.x > 700 || this.x < 0) {
      this.y = this.y + 15;
      this.dx = -this.dx;
    }
    if (this.y > 700) {
      this.y = 12;
      this.x = 0;
    }
  }
}

export default Segments;