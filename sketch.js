const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ballImg;
var helpRect;
var helpRectGrp;

function preload()
{
	ballImg=loadImage("ball.png");
}

function setup() {
	createCanvas(800, 500);

	ball=createSprite(400,0);
	ball.addImage(ballImg);
	ball.scale=0.1;

	engine = Engine.create();
	world = engine.world;

	helpRectGrp = new Group();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(keyDown("right")){
	  ball.x = ball.x+10;
  }
  if(keyDown("left")){
	ball.x = ball.x-10;
  }
  ball.velocityY = 5;
  
  spawnHelpingRects();

  if(helpRectGrp.isTouching(ball)){
	  ball.velocityY = helpRect.velocityY;
  }

  drawSprites();
 
}

function spawnHelpingRects(){
	if(frameCount%40===0){
		helpRect = createSprite(0,500,200,10);
		helpRect.x=random(30,770);

		helpRect.velocityY= -10;

		helpRectGrp.add(helpRect);
	}
} 



