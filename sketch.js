const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var plinkos = [];
var division =[];
var divisionHeight=300;


function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(width/2,height,width,20);
  for(var d=0;d<=width;d=d+80){
    division.push(new Division(d, height-divisionHeight/2,10,divisionHeight));
  }

  for(var k=30;k<=width;k=k+50){
    plinkos.push(new Plinko(k, 100));
    }

  for(var j=60;j<=width-40;j=j+50){
      plinkos.push(new Plinko(j, 200));
  }

  for(var s=30;s<=width;s=s+50){
        plinkos.push(new Plinko(s, 300));
  }

  for(var m=60;m<=width-40;m=m+50){
      plinkos.push(new Plinko(m, 400));
  }

  

}

function draw() {
  background("black");  
  ground.display();
  Engine.update(engine);
  
  for (var d = 0; d < division.length; d++) {
    division[d].display();
  }

  for (var i = 0; i < plinkos.length; i=i+1) {
    plinkos[i].display();
  }

  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }

  for (var s = 0; s < plinkos.length; s++) {
    plinkos[s].display();
  }

  for (var m = 0; m < plinkos.length; m++) {
    plinkos[m].display();
  }
  
  for(var j=0;j<particles.length;j++){
    particles[j].display();
  }

  if(frameCount%90===0){
    particles.push(new Particle(random(width/2-50,width/2+50),10,10));
  }
}