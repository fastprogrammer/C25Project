const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var glass1, glass2;
var paper;
var dustbin, dustbinImage;

function preload(){
	dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
	var canvas = createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);

	glass1 = new Glass(780, 550, 100, PI/1);
	glass2 = new Glass(915, 550, 100, PI/1);

	paper = new Paper(100, 550, 70, 70);

	dustbin = createSprite(850, 520, 50, 50);
	dustbin.addImage("clean", dustbinImage);
	dustbin.scale = 0.5;
}


function draw() {
  background(255);
  Engine.update(engine);

  ground.display();

  glass1.display();
  glass2.display();

  paper.display();

  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:300, y:-300});
	}
	// setInterval(function(){
	// 	var myVideo = document.getElementById('myVid');
	// 	var canvasId = document.getElementById('canvas');
	// 	myVideo.style.display = 'block';
	// }, 3000);
}

