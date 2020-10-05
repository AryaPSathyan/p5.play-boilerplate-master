var car,wall;
var speed,weight

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

speed = random (55,90)
speed = random (400,1500)
  car = createSprite(50, 200, 50, 50);
  fixedRect.debug = true;
  fixedRect.shapeColor = "red";

  wall = createSprite(1500,200,60,height/2);
  movingRect.debug = true;
  movingRect.shapeColor = "white"; 
  
  car.velocityX = speed;
  fixedRect.velocityX = 5;
}
  
function draw() {
  background(255,255,255);  
  drawSprites();

  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2){
      movingRect.velocityX = movingRect.velocityX * (-1);
      fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  if(movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
      movingRect.velocityY = movingRect.velocityY * (-1);
      fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
  drawSprites();
}


