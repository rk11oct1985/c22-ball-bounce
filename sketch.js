const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine;
var world;
var ground;

function setup() {
  createCanvas(800,400);
 engine=Engine.create();
 world=engine.world
var option={
  isStatic:true
}
 ground=Bodies.rectangle(200,390,200,20,option);
 World.add(world,ground)

 var ballOption={
   restitution:1.0
 }
  ball=Bodies.circle(200,100,20,ballOption)
  World.add(world,ball)
}

function draw() {
  background(0);
  Engine.update(engine)
  rect(ground.position.x,ground.position.y,200,20)
  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
}