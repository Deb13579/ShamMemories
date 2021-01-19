class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
    this.sl1 = loadImage("sprites/sling1.png")
    this.sl2 = loadImage("sprites/sling2.png")
    this.sl3 = loadImage("sprites/sling3.png")
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sl1, 200, 20)
        image(this.sl2, 170, 20)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48,22,8)
            strokeWeight(12.5);
            if(pointA.x < 220){
            line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);
            line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
            image(this.sl3, pointA.x - 30, pointA.y - 10, 15, 30)
        }
        else{
            line(pointA.x + 25, pointA.y, pointB.x - 10, pointB.y);
            line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
            image(this.sl3, pointA.x + 25, pointA.y - 10, 15, 30)
        }
        }
       
    }
    
}