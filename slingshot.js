class Slingshot{

    constructor(bodyA, pointB){

        var options={

            bodyA : bodyA,

            pointB : pointB,

            stiffness : 0.005,

            length : 10

        }

        this.pointB = pointB;

        this.sling = Matter.Constraint.create(options);

        World.add(world, this.sling);

    }

    fly(){

        this.sling.bodyA = null;
    }

    attach(body){
    
        this.sling.bodyA = body;

    }

    display(){

        if(this.sling.bodyA){

            push();

            strokeWeight(4);

            line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.pointB.x, this.pointB.y);

            pop();

        }

    }

}
