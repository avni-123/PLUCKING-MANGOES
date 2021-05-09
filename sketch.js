const Engine = Matter.Engine;

const World = Matter.World;

const Bodies = Matter.Bodies;

const Body = Matter.Body;


const Constraint = Matter.Constraint;

var treeObj, stoneObj, groundObject, launcherObject;

var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11, mango12;

var world,boy;

var stone;

var slingShot;

function preload(){

	boy = loadImage("boy.png");

  }

function setup(){

	createCanvas(1300, 600);

	engine = Engine.create();

	world = engine.world;

	mango1 = new mango(1100, 100, 30);

  mango2 = new mango(1070, 250, 40);

  mango3 = new mango(1010, 100, 30);

  mango4 = new mango(1100, 40, 20);

  mango5 = new mango(1140, 200, 25);

	treeObj = new tree(1050, 580);

	groundObject = new ground(width/2, 600, width, 20);

	stone = new Stone(235, 420, 50);

	slingShot = new Slingshot(stone.body, {x : 235, y : 420});
	
	Engine.run(engine);

}

function draw(){

  background(230);

  fill("pink");

  strokeWeight(2);

  stroke("blue");

  textFont("Colonna MT")

  textSize(30);

  text("Press Space Bar Key to hit the mangoes with the stone again!!", 100, 100);

  image(boy ,200, 340, 200, 300);
  

  treeObj.display();

  mango1.display();

  mango2.display();

  mango3.display();

  mango4.display();

  mango5.display();

  stone.display();

  slingShot.display();

  groundObject.display();

  Collision(stone, mango1);
  Collision(stone, mango2);
  Collision(stone, mango3);
  Collision(stone, mango4);
  Collision(stone, mango5);

}

function mouseDragged(){

	Matter.Body.setPosition(stone.body, {x : mouseX, y : mouseY});

}

function mouseReleased(){

	slingShot.fly();

}

function keyPressed(){

	if(keyCode === 32){

		Matter.Body.setPosition(stone.body, {x : 235, y : 420});

		slingShot.attach(stone.body);

	}

}

function Collision(lstone, lmango){

	mangoBodyPosition = lmango.body.position;

	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

	if(distance <= lmango.r + lstone.r){

		Matter.Body.setStatic(lmango.body, false);

	}

}
