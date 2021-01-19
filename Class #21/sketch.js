var DebRect, ShambhaviRect
var A, B
function setup() {
  createCanvas(800,400);
 DebRect = createSprite(400, 200, 50, 50);
 DebRect.shapeColor = "red"
 ShambhaviRect = createSprite(300,300,100,100)
 ShambhaviRect.shapeColor = "white"
 A = createSprite(100,100,10,10)
 B = createSprite(200,100,10,10)
// A.velocityX = 2
// B.velocityX = -2
 A.velocityY = -3
// B.velocityY = 3
}
function draw() {
  background("blue");  
  ShambhaviRect.x = mouseX
  ShambhaviRect.y = mouseY
 if(Shambhavi_TheGreat(DebRect,ShambhaviRect)){
    ShambhaviRect.scale = 0.5
    DebRect.visible = false
    background("lime")
 }
 else{
   ShambhaviRect.scale = 1
   DebRect.visible = true
   background("blue")
 }
Shambhavi_Bounces(A,B);
    // Algorithm DebSham
  drawSprites();
}

