class Segments extends Block{
  constructor(x, y, height, width, dx, dy) {
    super(x, y, height, width, dx, dy)
    }
}

draw() {
    context.fillStyle = 'rgba(10, 200, 4, .8)';
  }

move(x, y) {
    this.x += this.dx;
    if (this.x > canvas.width || this.x < 0) {
      this.dx = -this.dx;
      drop();
    }
  }

  drop() {
    this.y = this.y + 15;
    if (this.y > canvas.height) {
      this.y = 12;
      return this;
    }

module.exports = Segments;