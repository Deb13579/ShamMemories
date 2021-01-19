class Chain{
    constructor(bodyDeb,bodyShambhavi){
        var chain_options = {
            bodyA: bodyDeb,
            bodyB: bodyShambhavi,
            stiffness: 1.0,
            length: 100
        }
this.chain = Constraint.create(chain_options)
World.add(world,this.chain)
    }
display(){
    var pos1 = this.chain.bodyA.position.x
    var pos2 = this.chain.bodyA.position.y
    var pos3 = this.chain.bodyB.position.x
    var pos4 = this.chain.bodyB.position.y
    line(pos1,pos2,pos3,pos4)
}
}