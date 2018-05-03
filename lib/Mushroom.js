

class Mushroom extends Block{
  constructor(x, y, height, width, dx, dy) {
    super(x, y, height, width, dx, dy)
    }
  }

  draw() {
    context.fillStyle = 'rgba(200, 200, 4, .8)';
  }

}


module.exports = Mushroom;