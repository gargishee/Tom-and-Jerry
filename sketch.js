var garden, cat, mouse;
var gardenImg,catImg, catWalking, catCollide, mouseImg, mouseTeasing, mouseCollide;

function preload() {
    //load the images here
    gardenImg = loadImage("images/garden.png");
    catImg = loadImage("images/cat1.png");
    catWalking = loadAnimation("images/cat2.png", "images/cat3.png");
    catCollide = loadAnimation("images/cat4.png");
    mouseImg = loadImage("images/mouse1.png");
    mouseTeasing = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseCollide = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(2000,800);

    garden = createSprite(500,400);
    garden.addImage(gardenImg);
    
    //create tom and jerry sprites here
    cat = createSprite(850,550,20,20);
    cat.addImage(catImg);
    cat.scale = 0.16;

    mouse = createSprite(200,550,20,20);
    mouse.addImage(mouseImg);
    mouse.scale = 0.16;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2) {
        cat.velocityX = 0;
        cat.x = 300;
        cat.addAnimation("catCollide", catCollide);
        cat.changeAnimation("catCollide");
        mouse.addAnimation("mouseCollide", mouseCollide);
        mouse.changeAnimation("mouseCollide");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW) {
      cat.velocityX = -5;
      cat.addAnimation("catRunning", catWalking);
      cat.changeAnimation("catRunning");
      mouse.addAnimation("mouseTeasing", mouseTeasing);
      mouse.changeAnimation("mouseTeasing");
  }

}
