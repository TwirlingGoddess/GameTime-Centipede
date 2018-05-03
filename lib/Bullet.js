class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.height = 3;
    this.width = 2;
    this.dx = 2;
    this.dy = 20;
  }

  // draw(context) {
  //   Player.fillRect(this.x, this.y, this.canvasWidth);
  //   context.fillStyle = 'rgba(10, 200, 4, .8)';
  //   return this;
  // }

  // move(player) {
  //   this.y += this.dy;
  //   if (this.y > this.canvasWidth || this.y < 0) {
  //     this.dy = -this.dy;
  //   }
  // }
}


module.exports = Bullet;