class Ground //Classifies "Ground" so every body/bodies in class "Ground" shares these properties
{
  constructor(x, y, w, h) 
  {
    let options = {//Creates the properties for the ground
      isStatic:true//Makes it stay in one place
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);//Creates the ground
    this.w = w;
    this.h = h;
    World.add(world, this.body);//Adds it into the world
  }

  show() {
    var pos = this.body.position;//Creates a variable to use later
    push();
    rectMode(CENTER);
    stroke(255);//Colors the border
    fill(127);//Fills the inside color
    rect(pos.x, pos.y, this.w, this.h);//Defines the positions and with and hight
    pop();
  }
  
}
