var bg,bgI;
var pC,pcI;
var ground;


function preload(){
bgI=loadImage("gameBg.jpg")
pcI=loadImage("pcBoat.png")

}


function setup(){
createCanvas(950,500)
 bg=createSprite(width/2,height/2-200,950,500)
 bg.addImage(bgI)
 bg.scale=2;
 bg.velocityX=-3;

 pc=createSprite(100,250)
 pc.addImage(pcI)
 pc.scale=0.2

 
 ground=createSprite(180,410,50,10)
 ground.visible=false

 
}

function draw(){
background("light blue")
if(bg.x<0){
  bg.x=width/2
}
  drawSprites()
}
