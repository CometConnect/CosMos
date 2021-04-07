//-----------------------------------------------------------------------------------------------------//
Log( "Log" , "Creating Variables & Constants" );
//--------------------------------//
//constants
const Sensitivity = 10;
//--------------------------------//
//variables
//Player
var Player , PlayerIMG;
//Game Assets
var Score , OnePress , BulletCycle , ShootCoolDown , Wave;
//Enemies
var ENEMY , ENEMYIMG;
//Bullet
var Bullet1 , Bullet2 , Bullet3;
//--------------------------------//
Log( "Log" , "Created Variables & Constants" );
//-----------------------------------------------------------------------------------------------------//
Log( "Log" , "Preloading" );
//--------------------------------//
//preload
function preload()
{
  PlayerIMG = loadImage("Shooter.png");
  ENEMYIMG = loadImage("Enemy.png");
}
//--------------------------------//
Log( "Log" , "Preload Complete" );
//-----------------------------------------------------------------------------------------------------//
//setup
function setup()
{
  //--------------------------------//
  Log( "Log" , "Setting Up" );
  //--------------------------------//
  createCanvas( displayWidth , displayHeight );
  //--------------------------------//
  //Player
  Player = createSprite( displayWidth/2 , displayHeight/2 , 50 , 50 );
  Player.addImage( PlayerIMG );
  Player.shapeColor = "blue";
  //--------------------------------//
  OnePress = 0;
  BulletCycle = 1;
  ShootCoolDown = 0;
  Wave = 0;
  //--------------------------------//
  dialog( "alert" , "Press SPACE to shoot" );
  Log( "Log" , "Setup Done" );
  //--------------------------------//
}
//-----------------------------------------------------------------------------------------------------//
//loop
function draw()
{
  //"Forever" Setup
  needs( "black" );
  if( Player != undefined )
  {
    Player.rotationSpeed = 7 ;
    ShootCoolDown++;
  }
  
  //Shooting
  if( keyIsDown( 32 ) && ShootCoolDown > 7 && Player != undefined )
  {
    OnePress++
    
    if( OnePress === 1 )
    {
      if( BulletCycle === 3 )
      {
        Bullet1 = createSprite( Player.x , Player.y , 10 , 10 );
        Bullet1.shapeColor = "green";
        Bullet1.rotation = Player.rotation;
        Bullet1.setSpeed(50);
        Bullet3.lifetime = 15;
        BulletCycle = 0;
      }
      if( BulletCycle === 2 )
      {
        Bullet2 = createSprite( Player.x , Player.y , 10 , 10 );
        Bullet2.shapeColor = "green";
        Bullet2.rotation = Player.rotation;
        Bullet2.setSpeed(50);
        Bullet3.lifetime = 15;
        BulletCycle++;
      }
      if( BulletCycle === 1 )
      {
        Bullet3 = createSprite( Player.x , Player.y , 10 , 10 );
        Bullet3.shapeColor = "green";
        Bullet3.rotation = Player.rotation;
        Bullet3.setSpeed(50);
        Bullet3.lifetime = 15;
        BulletCycle++;
      }
      if( BulletCycle === 0 )
      {
        BulletCycle = 1;
      }
    }
    ShootCoolDown = 0;
  }
  else
  {
    OnePress = 0
  }

  //Enemy Spawing
  if( frameCount%(24*5)===0 && Player != undefined )
  {
    Wave++;
    var x1 = 0;
    var x2 = 0;
    var RANx = 0;
    var y1 = 0;
    var y2 = 0;
    var RANy = 0;
    RANx = Math.round(random( 1 , 2 ));
    RANy = Math.round(random( 1 , 2 ));
    ENEMY = createSprite( -500 , -500 , 50 , 50 );
    ENEMY.scale = 0.4;
    //Random X
    if( RANx === 1 )
    {
      x1 = Math.round(random( 0 , 100 ));
      ENEMY.x = x1;
    }
    else
    {
      x2 = Math.round(random( displayWidth-100 , displayWidth ));
      ENEMY.x = x2;
    }
    //RandomY
    if( RANy === 1 )
    {
      y1 = Math.round(random( 0 , 100 ));
      ENEMY.y = y1;
    }
    else
    {
      y2 = Math.round(random( displayHeight-100 , displayHeight ));
      ENEMY.y = y2;
    }
    ENEMY.shapeColor = "red";
    ENEMY.pointTo( Player.x , Player.y );
    ENEMY.setSpeed( 10 );
    ENEMY.addImage( ENEMYIMG );
  }
  
  //Enemy kill
  if( ENEMY != undefined )
  {
    if( Bullet1 != undefined )
    {
      if( ENEMY.isTouching( Bullet1 ) === true )
      {
       ENEMY.destroy();
      }
    }
    if( Bullet2 != undefined )
    {
      if( ENEMY.isTouching( Bullet2 ) === true )
      {
       ENEMY.destroy();
      }
    }
    if( Bullet3 != undefined )
    {
      if( ENEMY.isTouching( Bullet3 ) === true )
      {
       ENEMY.destroy();
      }
    }
  }

  //Death
  if( Player != undefined && ENEMY != undefined && Player.isTouching( ENEMY ) )
  {
    Player.destroy();
    Player = undefined;
  }
  
  //DeathScreen
  if( Player === undefined )
  {
    var Wav = Wave - 1;
    Strin( "You Died" , 550 , 350 , 50 , "Red" );
    Strin( "You survived " + Wav + " Waves" , 450 , 410 , 50 , "Green" );
  }
}
//-----------------------------------------------------------------------------------------------------//