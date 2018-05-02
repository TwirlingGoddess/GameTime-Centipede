class Block {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.dx = 14;
    this.dy = 4;
  }

  draw(context) {
    context.fillRect(this.x, this.y, this.width, this.height);
    context.fillStyle = 'rgba(10, 200, 4, .8)';
    return this;
  }

  move() {
    this.x += this.dx;
    if (this.x > window.innerWidth/2 || this.x < 0) {
      this.dx = -this.dx;
      drop();
    }
  }

  drop() {
    this.y = this.y + 15;
    if (this.y > window.innerheight) {
      this.y = 12;
      return this;
    }
  }  
}

module.exports = Block;