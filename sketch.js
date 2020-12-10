
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
   stand = new Ground(400,200,150,20);
    box1 = new Box(400,180,20,20);
    polygon = Bodies.circle(50,200,20)
    World.add(world,polygon);
}

function draw()
{
    background("grey")
    stand.display();
    box1.display();
    polygon.display();
    Engine.update(engine);
}