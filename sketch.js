const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var backgroundImg;

var score = 0;

function preload() {
  getTime();
}

function setup(){
    createCanvas (1500,500);
    engine= Engine.create();
    world= engine.world;


   /* ground_1 = new Ground (400,400,175,10);
    basement = new Ground (400,700,800,20);
    ground_2 = new Ground (650,200,175,10);
    b1 = new Box (400,370,30,50);
    b2 = new Box (370,370,30,50);
    b3 = new Box (430,370,30,50);
    b4 = new Box (340,370,30,50);
    b5 = new Box ()*/
    stand = new Ground (650,450,250,8);
    stand1 = new Ground (1011,250,250,8);
    ground = new Ground (750,500,1500,10)
  
    block1 = new Box(650,425,30,40);
    block2 = new Box(620,425,30,40);  
    block3 = new Box(590,425,30,40);
    block4 = new Box(560,425,30,40);
    block5 = new Box(680,425,30,40);
    block6 = new Box(710,425,30,40);
    block7 = new Box(740,425,30,40);
    block8 = new Box(650,385,30,40);
    block9 = new Box(620,385,30,40);
    block10 = new Box(590,385,30,40);
    block11 = new Box(620,305,30,40);
    block12 = new Box(680,385,30,40);
    block13 = new Box(710,385,30,40);
  
    block13 = new Box(680,345,30,40);
    block14 = new Box(650,345,30,40);
    block15 = new Box(620,345,30,40);
    block16 = new Box(650,305,30,40);
    block17 = new Box(710,385,30,40);
  
    box1 = new Box (1011,225,30,40);
    box2 = new Box (981,225,30,40);
    box3 = new Box (951,225,30,40);
    box4 = new Box (921,225,30,40);  
    box5 = new Box (1101,225,30,40);
    box6 = new Box (1041,225,30,40);
    box7 = new Box (1071,225,30,40);
  
    box8 = new Box (1011,185,30,40);
    box9 = new Box (981,185,30,40);
    box10 = new Box (951,185,30,40);
    box11 = new Box (1041,185,30,40);
    box12 = new Box (1071,185,30,40);
  
    box13 = new Box (1011,145,30,40);
    box14 = new Box (981,145,30,40);
    box15 = new Box (1041,145,30,40);
  
    box16 = new Box (1011,105,30,40);
    shoot = new Shoot (150,200,65);
    chain = new Slingshot (shoot.body,{x:150,y:200})

}
function draw(){
  if (backgroundImg){
    background(backgroundImg);
    }
    /*ground_1.display();
    ground_2.display();
    basement.display();
    b1.display();
    b2.display();
    b3.display();*/
    Engine.update(engine);


    rectMode(CENTER);

    stand.display();
    stand1.display();
    //fill("purple");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    //fill("pink");
    block8.display();
    block9.display();
    block10.display();
    //block11.display();
    block12.display();
    //fill("green");
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
  
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    shoot.display();
    ground.display();
    chain.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();

   box1.score();
   box2.score();
   box3.score();
   box4.score();
   box5.score();
   box6.score();
   box7.score();
   box8.score();
   box9.score();
   box10.score();
   box11.score();
   box12.score();
   box13.score();
   box14.score();
   box15.score();
   box16.score();

   textSize(32)
   fill("yellow")
   text("score: "+score, 1250,30);
}
function mouseDragged(){
    Matter.Body.setPosition(shoot.body,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    chain.fly();
  }
  function keyPressed(){
   if(keyCode===32){
       chain.attach(shoot.body);
    }
 }
 async function getTime(){
  var response = await fetch ('https://worldtimeapi.org/api/timezone/Asia/Tokyo');
  var convert = await response.json();
  var dateTime = convert.datetime;
  var hour = dateTime.slice(11,13);
  console.log(hour);

  if (hour>06 && hour< 17){
     bg = "bg.png"
  }
  else{
       bg = "bg2.jpg"
  }
 backgroundImg = loadImage(bg);
}