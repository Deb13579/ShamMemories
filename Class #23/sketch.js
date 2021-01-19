const World = Matter.World
const Engine = Matter.Engine
const Bodies = Matter.Bodies
var engine, world, ShamBounce, ShamBox1, ShamBox2, Earth
function setup() {
  createCanvas(800,400);
  
  var ABC_options = {
    isStatic : true
  }
  

  engine = Engine.create()
  world = engine.world
  Earth = Bodies.rectangle(400,390,800,20, ABC_options)
   World.add(world,Earth)

  ShamBounce = new ShamBall(100,100,50, "red")
  ShamBox1 = new ShamBox(400,300,100,100,"white")
  ShamBox2 = new ShamBox(450,100,100,100,"white")
}

function draw() {
  background("lime");  
  Engine.update(engine)
  rectMode(CENTER)
  rect(Earth.position.x, Earth.position.y, 800,20)
  ShamBounce.display()
  ShamBox1.display()
  ShamBox2.display()
  console.log(ShamBounce.body.position.y, "Deb is here :)")
  console.log(ShamBox1.body.position.y, "HELP ME")
  
}