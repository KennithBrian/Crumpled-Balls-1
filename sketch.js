const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box1,box3;
var paper;
var ground
function setup() 
{
	createCanvas(1200,400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(601,350,1202,10);
	box1 = new Box(1000,340,200,10);
	box2 = new Box(900,295,10,100);
	box3 = new Box(1100,295,10,100);

	paper = new Paper(200,300,25);

	Engine.run(engine);  
}


function draw()
{
  rectMode(CENTER);
  background(0);

  console.log(paper.y);

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paper.display();
}

function keyPressed(){
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 30,
      y: -31
    });
  }
}