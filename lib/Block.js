
class Block {
  constructor(x, y, width, height, dx, dy) {
    this.x = 100;
    this.y = 100;
    this.width = 13;
    this.height = 13;
    this.dx = 14;
    this.dy = 4;
  }

  draw(context, color) {
    context.fillRect(this.x, this.y, this.width, this.height);
    context.fillStyle = color;
    return this;
  }

  }



module.exports = Block;