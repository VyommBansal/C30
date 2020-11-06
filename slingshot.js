class Slingshot{
    constructor(a,b){
        var options={
            bodyA:a,
            pointB:b,
            length:10,
            stiffness:0.04
        }
        this.slingshot=Matter.Constraint.create(options)
        World.add(world,this.slingshot)
        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")
    }
    display(){
        image (this.sling1,200,20)
        image (this.sling2,170,20)
        if(this.slingshot.bodyA){
            var pointA = this.slingshot.bodyA.position
            var pointB = this.slingshot.pointB
        strokeWeight(4)
        stroke("#54280F")
        line(pointA.x-20,pointA.y,pointB.x-10,pointB.y) 
        line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-5) 
        image (this.sling3, pointA.x-20,pointA.y-10,15,30)
    }
    }
    fly(){
        this.slingshot.bodyA=null
    }
    attach(body){
        this.slingshot.bodyA=body
    }
}
