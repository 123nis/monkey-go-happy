
var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var ground, groundImage;
var bananaGroup, obstacleGroup
var score;


function preload(){
  
  
  monkey_running =      loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving", monkey_running)
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10)
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  score = 0;
}


function draw() {
  background("green ")
 stroke("white")
 text("Survival Time: "+ score, 250,50);
  if (gameState === PLAY){
   if(keyDown("space")&& (monkey.y=(314.3))) { 
      monkey.velocityY = -20;
    }
    monkey.velocityY = monkey.velocityY + 0.8
  
    monkey.collide(ground);
    console.log(monkey.y)

    score = score + Math.round(getFrameRate()/60);
    
    spawnBananas();
    spawnObstacles(); 
    
    /*if(obstacleGroup.isTouching(monkey)){
        gameState = END;      
    }
  }
   else if (gameState === END){
    
   }
   */
  }
  drawSprites();
}
    
function spawnBananas() {
  
  if (frameCount % 80 === 0) {
    banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(200, 250));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    bananaGroup.add(banana);
  }
}
function spawnObstacles(){
 if (frameCount % 300 === 0){
    obstacle = createSprite(600,330,10,40);
    obstacle.velocityX = -4;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1
    //assign scale and lifetime to the obstacle        
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstacleGroup.add(obstacle);
 }
}





