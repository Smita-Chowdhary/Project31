class Plinko{
    constructor(x,y){
        var options={
            'isStatic':true,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2   
        }
        this.x=x;
        this.y=y;
        this.r=10;
        this.body=Bodies.circle(x,y,this.r,options);
        World.add(world, this.body);
    }
    display(){
    var Pos=this.body.position;
    push();
    translate(Pos.x, Pos.y);
    rectMode(CENTER);
    fill("white");
    strokeWeight(2);
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop();
    }
};