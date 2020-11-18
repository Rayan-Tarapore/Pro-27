class Roof{
    constructor(x,y,width,height){
    var roof_option={
        isStatic:true
    }
    this.body = Bodies.rectangle(x,y,width,height,roof_option);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    }
    display(){
        rectMode(CENTER)
        var pos = this.body.position
        rect(pos.x,pos.y,this.width,this.height);
    }
}