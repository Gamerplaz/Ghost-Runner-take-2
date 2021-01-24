// Copy zone
var tower_img, towersprite; 
var Door, DoorGroup, DoorImg;
var climber, climberimage, ClimberGroup ;
var Ghost , Ghost_Img ;
function preload() {
  tower_img = loadImage("tower.png");
  DoorImg = loadImage("door.png");
  DoorGroup = createGroup();
  climberimage = loadImage("climber.png");
  Ghost_FLY_IMG = loadImage("ghost-jumping.png");
  Ghost_Img = loadImage("ghost-standing.png");
  ClimberGroup = createGroup();
  spookysound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600,600);
  
  tower = createSprite(300,300);
  tower.addImage(tower_img);
  tower.velocityY = 4 ;
  
  Ghost = createSprite(200,200);
  Ghost.addImage(Ghost_Img);
  Ghost.scale = 0.43 ;
  
  spookysound.loop();
}
function draw() {
  background(0);
  drawSprites();
  
  if (tower.y > 400 ) {
    tower.y = 0 ;
  }
  spawnDoors();
  
  if (keyDown("space")) {
    Ghost.addImage(Ghost_FLY_IMG);
    Ghost.velocityY = -2 ;

  }
  if (ClimberGroup.isTouching(Ghost)) {
    Ghost.velocityY = 0 ;
  }
}
function spawnDoors() { 
  if (frameCount % 240 === 0) {
  Door = createSprite(300,-50);
  Door.addImage(DoorImg);
  Door.x = Math.round(random(120,400));
  var climber = createSprite(200,10);
  climber.addImage(climberimage);
  climber.x = Door.x ;
  climber.velocityY = 4 ;
  climber.lifetime = 800 ;
  ClimberGroup.add(climber);
  var Invisible_Block = createSprite(200,15)
  Invisible_Block.width = climber.Width ;
  Invisible_Block.height = 2 ;  
  Invisible_Block.velocityY = 1 ;
    Ghost.depth = Door.depth ;
    Ghost.depth += 1 ;
  Door.velocityY = 4 ;
  Door.lifetime = 800 ;
  DoorGroup.add(Door);
  }
}
