class ShamBall{
 constructor(x,y,radius,color){
    var BCD_options = {
        restitution : 1
        }
    this.body = Bodies.circle(x,y,radius, BCD_options)
    this.radius = radius
    this.color = color
    World.add(world,this.body)
 }
display(){
    push()
    ellipseMode(RADIUS)
    var pos = this.body.position
    fill(this.color) 
    ellipse(pos.x, pos.y, this.radius, this.radius)
    pop()
}
}