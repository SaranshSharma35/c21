var fixedrect,movingrect;
var object1,object2;

function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(400, 100, 50, 50);
  movingrect = createSprite(400, 800, 100, 50);
 // object1 = createSprite(200, 100, 100, 50);
 // object2 = createSprite(200, 100, 100, 50);
  movingrect.velocityY=5;
  fixedrect.velocityY=-5
}

function draw() {
  background(0);  

  //fixedrect.x = World.mouseX;
 // movingrect.y = World.mouseY;

  bounceOff(movingrect,fixedrect);
 //console.log(a.x - b.x);


  drawSprites();
}

