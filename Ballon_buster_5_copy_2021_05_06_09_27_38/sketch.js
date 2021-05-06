var redballoon,redballoonimage;
var blueballoon,blueballoonimage;
var greenballoon,greenballoonimage;
var pinkballoon,pinkballoonimage;
var bg, bgimage;
var bow,bowimage;
var arrow, arrowimage;
var score;


function preload() {
  //load your images here 
  redballoonimage = loadImage ("red_balloon0.png");
  greenballoonimage = loadImage("green_balloon0.png"); 
  blueballoonimage = loadImage("blue_balloon0.png");
  pinkballoonimage = loadImage("pink_balloon0.png");
  bgimage=loadImage("background0.png");
  bowimage= loadImage("bow0.png");
  arrowimage=loadImage("arrow0.png")
 }

function setup() {
  createCanvas(1200, 1200);
  bg=createSprite(0,0,1200,1200);
  bg.addImage("bg",bgimage);
  //image(bgimage,0,0,600,600);
  bg.scale=5
  //bg.velocityX=-2;
  
  bow=createSprite(590,mouseY,20,20);
  bow.addAnimation("bow", bowimage);
  
  score = 0;
  
  arrowGroup = new Group();
  rbGroup = new Group();
  bbGroup = new Group();
  gbGroup = new Group();
  pbGroup = new Group();

}

function draw() {
  background("white");
  
  //if(bg.x<0){
   // bg.x=300;
 // }
  
  bow.y=mouseY
  
  if(keyDown("space")){
  createArrow();
  }
  
  var selectBalloon = Math.round(random(1,4));
  
  if(World.frameCount % 80===0) {
    if(selectBalloon===1) {
      redBalloon();
    }
    else if(selectBalloon===2) {
      greenBalloon();
    }
    else if(selectBalloon===3) {
      blueBalloon();
    }
    else if(selectBalloon===4) {
      pinkBalloon();
    }
  }
   
  drawSprites();
  textSize(20);
  text("Score:"+ score,500,25);
  
  if (arrowGroup.isTouching(rbGroup)) {
   rbGroup.destroyEach();
   arrowGroup.destroyEach();
   score = score+1
  }
 
  if (arrowGroup.isTouching(gbGroup)) {
   gbGroup.destroyEach();
   arrowGroup.destroyEach();
   score = score+2
  }
  
  if (arrowGroup.isTouching(bbGroup)) {
   bbGroup.destroyEach();
   arrowGroup.destroyEach();
   score = score+3
  }
  
  if (arrowGroup.isTouching(pbGroup)) {
   pbGroup.destroyEach();
   arrowGroup.destroyEach();
   score = score+4 
  }
  
}
  function createArrow() {
  arrow = createSprite(590,20,20,20);
  arrow.addImage(arrowimage);
  arrow.scale = 0.3 ;
  arrow.y = bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 160;
  camera.position.x = arrow.x;
  arrowGroup.add(arrow);
  return arrow;
  
}

function redBalloon() {
  var rballoon = createSprite(0,Math.round(random(20, 370),16,16))
  rballoon.addImage(redballoonimage);
  rballoon.scale = 0.09;
  rballoon.velocityX = 3;
  rballoon.lifetime = 180;
  rbGroup.add(rballoon);
}
function greenBalloon() {
  var gballoon = createSprite(0,Math.round(random(20, 370),16,16))
  gballoon.addImage(greenballoonimage);
  gballoon.scale = 0.09;
  gballoon.velocityX = 3;
  gballoon.lifetime = 180;
  gbGroup.add(gballoon);
}
function blueBalloon() {
  var bballoon = createSprite(0,Math.round(random(20, 370),16,16))
  bballoon.addImage(blueballoonimage);
  bballoon.scale = 0.09;
  bballoon.velocityX = 3;
  bballoon.lifetime = 180;
  bbGroup.add(bballoon);
}
function pinkBalloon() {
  var pballoon = createSprite(0,Math.round(random(20, 370),16,16))
  pballoon.addImage(pinkballoonimage);
  pballoon.scale = 1.1;
  pballoon.velocityX = 3;
  pballoon.lifetime = 180;
  pbGroup.add(pballoon);
}

