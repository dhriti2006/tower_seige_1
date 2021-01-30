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


    ground1= new Ground(600,380,1200,20);
    platform1=new Ground(400,250,200,10);
    platform2=new  Ground(620,200,200,10);
    platform3=new Ground(850,170,200,10);
    platform4=new  Ground(1050,280,200,10);
    box1 = new Box(200,500,30,30);


    
}

function draw(){
    background("blue");
    Engine.update(engine);
    //strokeWeight(4);

    ground1.display();
    platform1.display();
    box1.display();
    platform2.display();
    platform3.display();
    platform4.display();

    
}



