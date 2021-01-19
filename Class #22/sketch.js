const World = Matter.World
const Engine = Matter.Engine
const Bodies = Matter.Bodies
var engine, world, ShamBounce, Earth
function setup() {
  createCanvas(800,400);
  
  var ABC_options = {
    isStatic : true
  }
  var BCD_options = {
    restitution : 10000
    }

  engine = Engine.create()
  world = engine.world
  Earth = Bodies.rectangle(400,390,800,20, ABC_options)
  ShamBounce = Bodies.circle(400,0,40, BCD_options)
  World.add(world,Earth)
  World.add(world,ShamBounce)

}

function draw() {
  background("red");  
  Engine.update(engine)
  rectMode(CENTER)
  rect(Earth.position.x, Earth.position.y, 800,20)
  ellipseMode(RADIUS)
  ellipse(ShamBounce.position.x, ShamBounce.position.y, 40, 40)
  console.log(ShamBounce.position.y)
}