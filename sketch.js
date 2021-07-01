var boat, boatA;
var seaImage,sea;

function preload(){
  boatA = loadAnimation("ship-1.png","ship-4.png","ship-3.png","ship-2.png");
  seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(500,500);
  
  
  boat = createSprite(50,160);
  boat.addAnimation("hi", boatA);

  boat.scale = 0.5;
  boat.x = 50

  sea=createSprite(-1500,180)
  sea.addImage("yay",seaImage)
  

  boat = createSprite(250,230);
  boat.addAnimation("hi", boatA);

  boat.scale = 0.4;
  boat.x = 250

}


function draw(){
  
  background("blue");
  
 if(sea.x>2000){
  sea.x=-1500
 }

  sea.velocityX=30
  
  drawSprites();
}