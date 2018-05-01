class Block {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw(context) {
    context.fillRect(this.x, this.y, this.width, this.height);
    return this;
  }

  move() {
    this.x += .001;
    // incraments AND assigns
    return this;
  }
}

module.exports = Block;