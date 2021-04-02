var helicopterIMG, helicopterSprite, packageSprite,packageIMG,groundSprite;
var packageBody,ground;
var part1, part2, part3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
Matter.Body.setStatic(false);
function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  	rectMode(CENTER);
	background(0);
	keypressed();
	  
	packageSprite= createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	part1=createSprite(width/2-50, 605, 10, 100);
	part1.shapeColor=color("red");
	part2=createSprite(width/2, 655, 110, 10);
	part2.shapeColor=color("red");
	part3=createSprite(width/2+50, 605, 10, 100);
	part3.shapeColor=color("red");
  
	//packageSprite.bounceOff(groundSprite);

	packageSprite.x= packageBody.position.x;
	packageSprite.y= packageBody.position.y;


	drawSprites();
}

function keypressed() {
	if (keyCode === DOWN_ARROW) {
	   packageSprite.velocityY = 3;		
   } 
}

	function collide() {
		if (packageSprite.isTouching(groundSprite)){
			packageSprite.velocityY = 0;
		}
	}


