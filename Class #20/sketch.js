var DebRect, ShambhaviRect
function setup() {
  createCanvas(800,400);
 DebRect = createSprite(400, 200, 50, 50);
 DebRect.shapeColor = "red"
 ShambhaviRect = createSprite(300,300,100,100)
 ShambhaviRect.shapeColor = "white"
}
function draw() {
  background("blue");  
  ShambhaviRect.x = mouseX
  ShambhaviRect.y = mouseY
  if (ShambhaviRect.x - DebRect.x < ShambhaviRect.width/2 + DebRect.width/2 && 
    DebRect.x - ShambhaviRect.x < ShambhaviRect.width/2 + DebRect.width/2 && 
    ShambhaviRect.y - DebRect.y < ShambhaviRect.height/2 + DebRect.height/2 && 
    DebRect.y - ShambhaviRect.y < ShambhaviRect.height/2 + DebRect.height/2){
      DebRect.shapeColor = "white"
      ShambhaviRect.shapeColor = "red"
    }
    else
    {
      DebRect.shapeColor = "red"
      ShambhaviRect.shapeColor = "white"
    }
    // Algorithm DebSham
  drawSprites();
}