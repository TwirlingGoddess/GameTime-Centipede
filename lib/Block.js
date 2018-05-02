class Block {
  constructor(x, y, canvasWidth) {
    this.x = x;
    this.y = y;
    this.width = 13;
    this.height = 13;
    this.dx = 14;
    this.dy = 4;
    this.canvasWidth = canvasWidth;
  }

  draw(context) {
    context.fillRect(this.x, this.y, this.canvasWidth);
    context.fillStyle = 'rgba(10, 200, 4, .8)';
    return this;
  }

  move() {
    this.x += this.dx;
    if (this.x > this.canvasWidth || this.x < 0) {
      this.dx = -this.dx;
      drop();
    }
  }

  drop() {
    this.y = this.y + 15;
    if (this.y > this.canvasHeight) {
      this.y = 12;
      return this;
    }
  }  
}

module.exports = Block;