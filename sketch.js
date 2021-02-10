
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(200,200,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();

  drawSprites();
 
}
function KeyPressed(){
	if(keyCode === UP_ARROW){
		Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85 ,y:-85})
	}
}


