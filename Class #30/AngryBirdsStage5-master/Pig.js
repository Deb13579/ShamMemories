class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.ShamVisible =  255
  }
display(){
  push()
  if(this.body.speed < 3){
    super.display()
  }
  else{
    
    World.remove(world, this.body)
    this.ShamVisible = this.ShamVisible - 1
    tint(255,this.ShamVisible)
    image(this.image, this.body.position.x, this.body.position.y, 50, 50)
    
  }
  pop()
}
};