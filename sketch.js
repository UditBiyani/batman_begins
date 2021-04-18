const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
// var mainGround;
var maxDrop = 100;
var drop = [];


function preload() {
    
}

function setup(){
    var canvas = createCanvas(500,650);
    engine = Engine.create();
    world = engine.world;

    // mainGround = new Ground(250,640,500,20);

    for(var i = 0;i<100;i++){
        drop.push(new Raindrop(random(1,500),random(1,500)));
    }

}

function draw(){
    background("black");
    Engine.update(engine);
    // mainGround.display();
    
    
 
    drawSprites();

    for(var i = 0;i<100;i++){
        drop[i].display();
        drop[i].update();
  }

}