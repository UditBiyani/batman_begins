class Raindrop {
    constructor(x,y) {
      var options = {
        friction : .001,
        restitution : 0.1
      }
      this.body = Bodies.circle(x,y,5,options); 
      this.radius = 5;
      World.add(world, this.body);
    }
    update(){
      if(this.body.position.y > height){
        Matter.Body.setPosition(this.body,{x:random(0,500),y : random(0,200)})
      }

  }


    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("Grey");
      ellipse(pos.x, pos.y, this.radius,this.radius);
    }
  }
