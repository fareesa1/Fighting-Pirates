var box1,box2;

function setup() {
  createCanvas(800,400);
 box1 =  createSprite(400, 200, 50, 50);
 box1.shapeColor = "cyan"
 box2 =  createSprite(400, 200, 50, 50);
 box2.shapeColor = "cyan"
}

function draw() {
  background(255,255,255);  
  box2.x = mouseX
  box2.y = mouseY



  if( box2.x - box1.x <  box1.width/2 + box2.width/2  ){
 box1.shapeColor = "pink"
 box2.shapeColor = "pink"
    
  } else{
 box1.shapeColor = "cyan"

 box2.shapeColor = "cyan"

  }
  drawSprites();
}