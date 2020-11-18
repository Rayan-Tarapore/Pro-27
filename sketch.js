
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5
var rope1,rope2,rope3,rope4,rope5
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 
    fill("orange");
    roof = new Roof(600,200,1200,20);

    bob1 = new Bob(600,400,100);
    bob2 = new Bob(400,400,100);
    bob3 = new Bob(200,400,100);
    bob4 = new Bob(800,400,100);
    bob5 = new Bob(1000,400,100);

    rope1 = new Rope(bob1.body,{x:600,y:200})
    rope2 = new Rope(bob2.body,{x:400,y:200})
    rope3 = new Rope(bob3.body,{x:200,y:200})
    rope4 = new Rope(bob4.body,{x:800,y:200})
    rope5 = new Rope(bob5.body,{x:1000,y:200})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(150);
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode===RIGHT_ARROW){
    Body.applyForce(bob5.body,bob5.body.position,{x:1000,y:0})
  }
}

