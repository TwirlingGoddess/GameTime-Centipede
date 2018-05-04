
class Block {
  constructor(x, y, width, height, dx, dy) {
    this.x = 100;
    this.y = 100;
    this.width = 13;
    this.height = 13;
    this.dx = 14;
    this.dy = 4;
  }

  move(x, y, canvas) {
    this.x += this.dx;
    if (this.x > canvas.width || this.x < 0) {
      this.dx = -this.dx;
      drop();
    }
  }

  draw(context, color) {
    context.fillRect(this.x, this.y, this.width, this.height);
    context.fillStyle = color;
    return this;
  }

  drop(canvas) {
    this.y = this.y + 15;
    if (this.y > canvas.height) {
      this.y = 12;
      return this;
    }
  }

  

  }



export default Block;