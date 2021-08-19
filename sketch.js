const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon, polygonImg;
var stand1, stand2, slingShot;

function preload() {
    polygonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground();
   stand1=new Stand(390,300,250,10);

   block1=new Block(300,275,30,40);
   block2=new Block(330,275,30,40);
   block3=new Block(360,275,30,40);
   block4=new Block(390,275,30,40);
   block5=new Block(420,275,30,40);
   block6=new Block(450,275,30,40);
   block7=new Block(480,275,30,40);

   block8=new Block(330,235,30,40);
   block9=new Block(360,235,30,40);
   block10=new Block(390,235,30,40);
   block11=new Block(420,235,30,40);
   block12=new Block(450,235,30,40);

   block13=new Block(360,195,30,40);
   block14=new Block(390,195,30,40);
   block15=new Block(420,195,30,40);
   block16=new Block(390,155,30,40);

   polygon=Bodies.circle(50,200,20);
   World.add(world,polygon)
slingshot = new SlingShot(this.polygon,{x:100, y:200});
}

function draw(){
    background("white");
    Engine.update(engine);
    //strokeWeight(4);
   stand1.display();

   stroke(15)
   strokeWeight(2)
   fill("skyblue");
   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();
   block7.display();
   block8.display();
   block9.display();
   block10.display();
   block11.display();
   block12.display();
   block13.display();
   block14.display();
   block15.display();
   block16.display();
   imageMode(CENTER);
   image(polygonImg,polygon.position.x,polygon.position.y,40,40)
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if (keyCode===32){
        slingshot.attach(this.polygon);
    }
}
