var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  gameObject1 = createSprite(800,300,100,35)
  gameObject1.shapeColor="purple"
  gameObject2 = createSprite(400,250,45,60)
  gameObject2.shapeColor="yellow"
}

function draw() {
  background(0,0,0);  
  gameObject1.x=mouseX
  gameObject1.y=mouseY
  bounceOff(movingRect,fixedRect)
  if(isTouching(gameObject1,gameObject2)){
    gameObject1.shapeColor="red"
    gameObject2.shapeColor="red"
  } else {
    gameObject1.shapeColor="purple"
    gameObject2.shapeColor="yellow"
  }
  drawSprites();
}

