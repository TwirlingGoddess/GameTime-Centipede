
class Block {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = 15;
    this.height = 15;
  }

  draw(context, color, border) {
    context.fillStyle = color;
    context.fillRect(this.x, this.y, this.width, this.height);
    context.strokeStyle = border;
    context.lineWidth = 2;
    context.strokeRect(this.x, this.y, this.width, this.height);
    return this;
  } 
}

export default Block;