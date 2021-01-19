const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1, pig2;
var log1,log2,log3,log4
var bird1
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    pig1 = new Pig(200,200,50,50)
    pig2 = new Pig(300,200,50,50)
    ground = new Ground(200,height,400,20)
    log1 = new Log(100,10,100,PI/2)
    bird1 = new Bird(50,50)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    pig1.display();
    pig2.display();
    log1.display();
    bird1.display();
    ground.display();
}