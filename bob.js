class Bob{
    constructor(x,y,radius){
    var bob_option={
        isStatic:false,
        restitution:1.3,
        density:1.3
    }
    this.body = Bodies.circle(x,y,radius,bob_option);
    this.radius = radius;
    World.add(world,this.body);
    }
    display(){
        
        var pos = this.body.position
        circle(pos.x,pos.y,this.radius);

    }
}