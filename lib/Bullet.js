

class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.height = 3;
    this.width = 2;
    this.dx = 2;
    this.dy = 20;
  }

  draw(context, color) {
    context.fillRect(this.x, this.y, this.width, this.height);
    context.fillStyle = 'rgba(10, 200, 4, .8)';
    return this;
  }

  move() {
    this.y += this.dy;
  }
}

export default Bullet;