var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var eggs;
var eggGroup;
var eggimg1,eggimg2;
var brokenwhiteimg;
var brokengoldenimg;
var player_img;
var player1score =0;
var player2score =0;
var invisibleground;
var winner;
var level="one";

function preload(){
  back_img = loadImage("background.jpg");
  player_img = loadImage("nest.png");
  eggimg1=loadImage("whiteegg.png");
  eggimg2=loadImage("goldenegg.png");
  brokenwhiteimg=loadImage("brokenegg.png");
  brokengoldenimg=loadImage("brokengolden.png");
  eggGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();

  invisibleground=createSprite(500,580,1000,20)
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  if (gameState === 1) {
    clear(); 
    game.play();
  }
  if (gameState === 2) {
    game.end();
  }
  if (playerCount === 2) {
    game.update(1);
  }
}

/*var back_img;

var player1,player2;
var eggs;
var eggGroup;
var eggimg1,eggimg2;
var brokenwhiteimg;
var brokengoldenimg;
var player_img;
var player1score =0;
var player2score =0;
var invisibleground;
var PLAY=1;
var END=0;
var gameState =PLAY;
var winner;
var level="one";


function preload(){
  back_img = loadImage("background.jpg");
  player_img = loadImage("nest.png");
  eggimg1=loadImage("whiteegg.png");
  eggimg2=loadImage("goldenegg.png");
  brokenwhiteimg=loadImage("brokenegg.png");
  brokengoldenimg=loadImage("brokengolden.png");
  eggGroup = new Group();
}

function setup() {
  createCanvas(1000, 600);

  invisibleground=createSprite(500,580,1000,20)

  player1 = createSprite(200,500);
  player1.addImage("player1",player_img);
  player1.scale=0.5;
  
  player2 = createSprite(800,500);
  player2.addImage("player2", player_img);
  player2.scale=0.5;
}

function draw() {

  if(gameState===PLAY)
  {
    background(back_img);

    textSize(25);
    fill("black");
  text("player1 score:" +player1score,50,50);
  text("player2 score:" +player2score,50,100);

  if (keyIsDown(RIGHT_ARROW) ) {

    player2.x+=10;
  }
   
   
if (keyIsDown(LEFT_ARROW) ) {
   
  player2.x-=10;
}

  spawnEggs();
  
  for(var i=0;i<eggGroup.length;i++)
  {
      if(eggGroup.get(i).isTouching(player1))
      {
          eggGroup.get(i).destroy();
       player1score=player1score+1;
      
      }

      if(eggGroup.get(i).isTouching(player2))
      {
          eggGroup.get(i).destroy();
       player2score=player2score+1;
      
      }

      if(eggGroup.get(i).isTouching(invisibleground))
      {
          eggGroup.get(i).velocityY=0;
          eggGroup.get(i).addImage("egg1",brokenwhiteimg);
        
          eggGroup.get(i).addImage("egg2",brokengoldenimg);
         

      }

  }

  if(player1score>=10 || player2score>=10)
{
  gameState=END;
}


  drawSprites();
  }

  if(gameState===END)
{
  clear();
       
       textSize(25);
       fill("black");
     text("player1 score:" +player1score,400,350);
     text("player2 score:" +player2score,400,400);

     if(player1score>player2score)
     {
       winner="player1"
     }

     else
     {
       winner="player2"
     }
    

     if(level==="one" )
     {
      fill("red");
      textSize(35)
      text("THE WINNER OF LEVEL1 IS : "+winner,250,450)

      fill("green")
      textSize(30)
      text("PRESS SPACEKEY TO ENTER LEVEL2",250,500)
 
      if(keyDown("space"))
      {
        level="two";
        player1score=0;
        player2score=0;
        gameState=PLAY;
      }
     }

     if(level==="two" && gameState===END)
     {
      fill("red");
      textSize(35)
      text("THE WINNER OF LEVEL2 IS : "+winner,250,450)

      fill("green")
      textSize(30)
      text("PRESS SPACEKEY TO ENTER LEVEL3",250,500)
 
      if(keyDown("space"))
      {
        level="third";
        player1score=0;
        player2score=0;
        gameState=PLAY;
      }
     }

     if(level==="third" && gameState===END)
     {
      fill("red");
      textSize(35)
      text("THE WINNER OF LEVEL3 IS : "+winner,250,450)

      fill("blue");
       textSize(100);
       text("GAME OVER!",200,300)


     }

    
     
}
  
}

function spawnEggs()
{
  if (frameCount % 20 === 0) {
    eggs = createSprite(random(100, 1000), 0, 100, 100);
    player1.x=eggs.x
    eggs.scale=0.2;
    if(level==="one")
    {
      eggs.velocityY = 6;
    }

    if(level==="two")
    {
      eggs.velocityY = 8;
    }
    
    if(level==="third")
    {
      eggs.velocityY = 10;
    }
    var rand = Math.round(random(1,2));
    switch(rand){
        case 1: eggs.addImage("egg1",eggimg1);
        break;
        case 2: eggs.addImage("egg2", eggimg2);
        break;
       
    }
    eggGroup.add(eggs);
    
    
} 
}*/
