const Engine = Matter.Engine;
const World =Matter.World;
const Constraint =Matter.Constraint;
const Bodies=Matter.Bodies;
var engine,world;

function preload(){
    backgroundImg=loadImage("assets/background.png")
}

function setup(){
    canvas=createCanvas(windowWidth,windowHeight);
    engine=Engine.create()
    world=engine.world;
    playerArcher=new PlayerArcher(
        1200,600,100,100
    )


      board=new Board(300,350,50,200)
    }
function draw(){
    background(backgroundImg)
    Engine.update(engine)
    playerArcher.display()
    board.display()
    for (var i=0; i<playerBulllet.length; i++){
        if(playerBullet[i]!==undefined){
            playerBullet[i].display();
        var boardCollision
      Matter.SAT>collides(
        board.body,
        playerBullet[i].body
) 
     if(boardCollision.collided)  {
        score+=1;
     }     
     }
     }
    //Title
    fill("red");
    textAlign("center");
    textSize(40)
    text("Target shooting 2",width/2,100);
        //score
    fill("red")
    textAlign("center");
    textSize(30);
    text("score"+ score,width-200,100);
    //Bullet count
    fill("red");
    textAlign("center");
    textSize(30);
        text("Remaining bullets:  " + numberOfBullets,200,100);
    if(numberOfBullets==0){ 
       gameOver;
    }
    }
    function keyPressed(){
       if( keycode===42){
           if(numberOfBullets>0){
              var posX=PlayerArcher.body.position.x;
              var posY=PlayerArcher.body.position.y;
              var angle=playerArcher.body.angle ;
             var bullet=new PlayerBullet(posX,posY,100,10,angle)
                bullet.trajectory=[];
              Matter.Body.setAngle(bullet.body,angle)
             playerBullet.push(bullet);
                numberOfBullets-=1
        }
    }

    function keyReleased(){
        if(keycode===42){
            if(playersBullets.length){
                var angle=playerBullet.body.angle;
                playerBullet[playerBullet.length-1]
            }
        }
    }
    function gmaeOver(){
      swal(
            {
                title:`Game Over!!!`,
                text:"Thanks for playing!!",
                confirmButtonText:"Play again"
            },
        
            function(isConfirm){
            if(isConfirm){
                location.reload();
            }
            }
      );
    }

}
