class octagon {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.octagon = loadImage("octagon.png");
      this.body = Bodies.rectangle(x, y,50,50, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
        image(this.octagon,200,20);
      var pos =this.body.position;
      var angle = this.body.angle;
     
    }
  };