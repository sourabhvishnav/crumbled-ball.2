
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


var package,ground;
var dustbin, d_Image;
var dpart1, dpart2;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world  = engine.world;

	package = new Ball(120,450,20);
	
	d_Image = loadImage("dustbingreen.png");
    
	
	ground = new Ground(width/2,655,width,10);

	dpart1 = new Dustbin(610,570,5,45);
	dpart1 = new Dustbin(660,570,5,45);
	
	var dust_options = {isStatic:true}
    dustbin = Bodies.rectangle(650,720,5,5,dust_options);
   
	Engine.run(engine);

}


function draw() {

	Engine.update(engine);
	background(0);


   ground.display();
  
   
  package.display();
    
 
   image(d_Image, 625, 570);
  
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(package.body,package.body.position,{x:14.5,y:-14.5});
		
	}
}




