class Ball {
  constructor(x, y) {
    var options = {
        'restitution':0,
        'isStatic':false,
        'friction':0.5,
         'density':2

    }
    this.body = Bodies.circle(x,y,40,options)
    //this.width = 40;
    //this.height = 40;
    
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    //this.body.isStatic=true;
    push()
    translate(pos.x,pos.y);
    rotate(this.body.angle)
    imageMode(CENTER);
    fill("yellow");
    circle(0,0,40)
    pop();
    
  }
};