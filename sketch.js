
var ufo;
var alien;
var background;
var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	ufoIMG=loadImage("ufo.png")
	alienIMG=loadImage("alien.png")
  backgroundIMG=loadImage("background.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	alienSprite=createSprite(width/2, 80, 10,10);
	alienSprite.addImage(alienIMG)
	alienSprite.scale=0.2

	ufoSprite=createSprite(width/2, 200, 10,10);
	ufoSprite.addImage(ufoIMG)
	ufoSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	alien = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, alien);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background(backgroundIMG);
keyPressed();
  alienSprite.x= alien.position.x 
  alienSprite.y= alien.position.y 

  
  drawSprites();
  stroke("red");
  textSize(25);
  text("Use down arrow to drop ",40,40);
  function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		
   
	 Matter.Body.setStatic(alien,false);  
	 }
	
   }
   
 
}
