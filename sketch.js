const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground
var leftwall
var rightwall

function preload() {

}

function setup() {
	createCanvas(800, 400);
	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction: 0,
        density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball=  Matter.Bodies.circle(100,300,10,ball_options);
    World.add(world,ball);
	Engine.run(engine);
    

    ground=new Ground(400,350,800,20);
    leftwall=new Ground(600,290,20,100)
	rightwall=new Ground(750,290,20,100)
   

}


function draw() {
	rectMode(CENTER);
	background(0);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,10)
   ground.show();
	leftwall.show()
	rightwall.show()
}
function keyPressed(){
if(keyCode === UP_ARROW){

Matter.Body.applyForce(ball,{x:ball.position.x,y:ball.position.y},{x:20,y:-11})

 }
}


