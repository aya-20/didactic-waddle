var fairy, fairyimg;
var star, starimg;
var back, backimg;
var music

var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;

var engine, world;

function preload()
{
  backimg = loadImage("images/starnight.png");

  fairyimg = loadImage("images/fairy1.png");
  starimg = loadImage("images/star.png");
  
  music = loadSound("sound/JoyMusic.mp3");
}

function setup() {
  createCanvas(800, 750);

  music.play();
  engine = Engine.create();
  world = engine.World;

  /*var staroptions = {                                    
    isStatic: false,
    restitution: 2,
    density: 1,
    friction: 0.1,
  }
  star = image(starimg, 700, 740, 200, 20, staroptions);
  World.add(world, star); */

  star = new Star(700, 740, 200, 20);

  
  fairy = createSprite(10, 100, 30, 30);
  fairy.addImage(fairyimg);


  back = createSprite(200, 200, 800, 800);
  back.addImage(back); 
}

function draw() {
  background("black");

  //imageMode(CENTER);
  //image(starimg, star.position.x, star.position.y, 30, 30);

  star.display();

  if (keyDown("left")){
    fairy.velocityX = -5;
  
  }
  if (keyDown("right")){
    fairy.velocityX = 5;
  }


}
