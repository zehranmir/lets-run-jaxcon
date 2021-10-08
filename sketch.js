
function preload(){
  //pre-load images
  pathimage=loadImage("path.png");
  runnerimage=loadImage("Runner-1.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
path.addImage(pathimage);
path.velocityY=4;
path.scale=1.2;
//code to rest the backround
if(path.y>400){
  path.y=hight/2;
  }
  runner=createSprite(200,200,20,20)
  runner.addImage(runnerimage);
runner.scale=0.1;
leftBoundary=createSprite(0,0,100,800); leftBoundary.visible = false;
 //create right Boundary 
 rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visible = false;
  

}



function draw() {
  
  background(0);
  runner.x=World.mouseX
  if(path.y > 400 ){ path.y = height/2; }



  drawSprites()
  edges= createEdgeSprites(); runner.collide(edges[3]); runner.collide(leftBoundary); runner.collide(rightBoundary);
}
