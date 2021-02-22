class Star{
    constructor(x, y, width, height) {
      var options = {
        isStatic: false,
        restitution: 2,
        density: 1,
        friction: 0.1,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      starimg = loadImage("images/star.png");
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(starimg, 0, 0, this.width, this.height);
      pop();
    }
    
  }