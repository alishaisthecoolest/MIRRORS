var bg1,bg1image;
var gamestate = 0;
var mainchar,maincharimg;


function preload()
{
	bg1image= loadImage("start.webp");
  maincharimg=loadImage("Girl.png")
}

function setup() {
	createCanvas(1700,850);
bg1 = createSprite(850,425);
bg1.addImage(bg1image);
bg1.scale = 3.5

mainchar = createSprite(1400,600);	
mainchar.addImage(maincharimg);
mainchar.scale = 0.7
  

}



function draw() {
  background(0);
 

  if(mainchar.x>525 && mainchar.y>500 && mainchar.scale>0.6){
     if(keyIsDown(LEFT_ARROW)){
    mainchar.x -= 5
  }
  
  if(keyIsDown(UP_ARROW)){
    mainchar.y -= 5
    mainchar.scale -= 0.005
    console.log("x=",mainchar.x)
    console.log("y=",mainchar.y)
    console.log("scale=",mainchar.scale)
  }
  }
  drawSprites();
  if(gamestate == 0){
    textSize(34);
    fill("black");
    textFont("cursive")
    text("Go Towards The Mirror\nTo Explore More",800,150);
    
   }
}

