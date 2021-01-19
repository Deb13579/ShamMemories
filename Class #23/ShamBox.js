class ShamBox{
    constructor(x,y,width,height,color){
       var BCD_options = {
           restitution : 1
           }
       this.body = Bodies.rectangle(x,y,width,height, BCD_options)
       this.height = height
       this.width = width
       this.color = color
       World.add(world,this.body)
    }
   display(){
       push()
       rectMode(CENTER)
       var pos = this.body.position
       //translate(pos.x, pos.y)
       rotate(this.body.angle)
       fill(this.color) 
       rect(pos.x, pos.y, this.width, this.height)
       pop()
   }
   }