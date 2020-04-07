var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["016489d2-96d1-46f0-a134-8cb478e23889","38eec5c0-192c-41e1-9c2e-77698c5ee40b","82dcbfe4-6699-455a-a40e-c9d512e1f305","725d11c4-3a1a-45d6-a3b0-43937bc6f80b","9ecc54a1-4b64-4ddb-ae30-5c7a08ce31c5","a7149d90-7b8b-4e6b-b6f1-e6d6c0e595fa","df12b438-e2ac-4fb9-8912-1241e1bcf5e1","c7326aeb-cea9-45fb-bd53-a55b064a100e","8deb8d88-c907-42af-9658-c30e8b07c8f8","1e7cb588-c096-4103-a996-d6b99be54319","e77da5e8-6a5f-4741-8df0-293f59243c49","a2204c30-9859-4226-8663-ed1cac552759","26e0bea7-bd2d-4f1c-af6f-9c4e7ce3b4de","04c8809d-6c0e-42c9-bc48-c93305c4ba94","9bdd11af-6c71-47eb-bc50-8ce953068bb7","03303263-4749-4f5b-a5d4-bed92662eee8","4bbc07d3-f555-4faa-8fd2-2fd6879c710a","2c448bf6-ca2e-4af3-a0eb-7eede455b784"],"propsByKey":{"016489d2-96d1-46f0-a134-8cb478e23889":{"name":"car1","sourceUrl":null,"frameSize":{"x":51,"y":96},"frameCount":1,"looping":true,"frameDelay":12,"version":"TCiW6A5_KMaABkqgH49n7CfagRW1fEAX","loadedFromSource":true,"saved":true,"sourceSize":{"x":51,"y":96},"rootRelativePath":"assets/016489d2-96d1-46f0-a134-8cb478e23889.png"},"38eec5c0-192c-41e1-9c2e-77698c5ee40b":{"name":"track.jpg_1","sourceUrl":"assets/v3/animations/kr1Ie5OF1vE411XSBsKKpLR5aDcKWLJbN_IG-xogPME/38eec5c0-192c-41e1-9c2e-77698c5ee40b.png","frameSize":{"x":229,"y":1133},"frameCount":1,"looping":true,"frameDelay":4,"version":"j_7vePYBjdwu.rYiJ0FNWAjRDkQfI1Hj","loadedFromSource":true,"saved":true,"sourceSize":{"x":229,"y":1133},"rootRelativePath":"assets/v3/animations/kr1Ie5OF1vE411XSBsKKpLR5aDcKWLJbN_IG-xogPME/38eec5c0-192c-41e1-9c2e-77698c5ee40b.png"},"82dcbfe4-6699-455a-a40e-c9d512e1f305":{"name":"wheel.png_1","sourceUrl":"assets/v3/animations/kr1Ie5OF1vE411XSBsKKpLR5aDcKWLJbN_IG-xogPME/82dcbfe4-6699-455a-a40e-c9d512e1f305.png","frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":4,"version":"W_pppEi6__aI2VhWsgjQpu9JCQC_ZfYq","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/v3/animations/kr1Ie5OF1vE411XSBsKKpLR5aDcKWLJbN_IG-xogPME/82dcbfe4-6699-455a-a40e-c9d512e1f305.png"},"725d11c4-3a1a-45d6-a3b0-43937bc6f80b":{"name":"wheel copy.png_1","sourceUrl":"assets/v3/animations/kr1Ie5OF1vE411XSBsKKpLR5aDcKWLJbN_IG-xogPME/725d11c4-3a1a-45d6-a3b0-43937bc6f80b.png","frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":4,"version":"J_prF1jaPL2dTfgMNQv_bWlsfJ2Xs_Mg","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/v3/animations/kr1Ie5OF1vE411XSBsKKpLR5aDcKWLJbN_IG-xogPME/725d11c4-3a1a-45d6-a3b0-43937bc6f80b.png"},"9ecc54a1-4b64-4ddb-ae30-5c7a08ce31c5":{"name":"wheel.png_2","sourceUrl":"assets/v3/animations/kr1Ie5OF1vE411XSBsKKpLR5aDcKWLJbN_IG-xogPME/9ecc54a1-4b64-4ddb-ae30-5c7a08ce31c5.png","frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":4,"version":"VHFb_6dezbqsUMnnsnC6FZFYLa0hP0pQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/v3/animations/kr1Ie5OF1vE411XSBsKKpLR5aDcKWLJbN_IG-xogPME/9ecc54a1-4b64-4ddb-ae30-5c7a08ce31c5.png"},"a7149d90-7b8b-4e6b-b6f1-e6d6c0e595fa":{"name":"car","sourceUrl":"assets/v3/animations/kr1Ie5OF1vE411XSBsKKpLR5aDcKWLJbN_IG-xogPME/a7149d90-7b8b-4e6b-b6f1-e6d6c0e595fa.png","frameSize":{"x":51,"y":96},"frameCount":1,"looping":true,"frameDelay":4,"version":"GmDK6osYGwxXzS741zg9LPivosxCdHm_","loadedFromSource":true,"saved":true,"sourceSize":{"x":51,"y":96},"rootRelativePath":"assets/v3/animations/kr1Ie5OF1vE411XSBsKKpLR5aDcKWLJbN_IG-xogPME/a7149d90-7b8b-4e6b-b6f1-e6d6c0e595fa.png"},"df12b438-e2ac-4fb9-8912-1241e1bcf5e1":{"name":"flame.png_1","sourceUrl":null,"frameSize":{"x":900,"y":506},"frameCount":1,"looping":true,"frameDelay":12,"version":"4cmwNLZ1PU13WNZCLHgv.JyIRVNKAmNm","loadedFromSource":true,"saved":true,"sourceSize":{"x":900,"y":506},"rootRelativePath":"assets/df12b438-e2ac-4fb9-8912-1241e1bcf5e1.png"},"c7326aeb-cea9-45fb-bd53-a55b064a100e":{"name":"logo.png_1","sourceUrl":"assets/v3/animations/kr1Ie5OF1vE411XSBsKKpLR5aDcKWLJbN_IG-xogPME/c7326aeb-cea9-45fb-bd53-a55b064a100e.png","frameSize":{"x":2000,"y":597},"frameCount":1,"looping":true,"frameDelay":4,"version":"HYcPTJV67EeV_P2TOzCcOSQ6JRu2Hg2S","loadedFromSource":true,"saved":true,"sourceSize":{"x":2000,"y":597},"rootRelativePath":"assets/v3/animations/kr1Ie5OF1vE411XSBsKKpLR5aDcKWLJbN_IG-xogPME/c7326aeb-cea9-45fb-bd53-a55b064a100e.png"},"8deb8d88-c907-42af-9658-c30e8b07c8f8":{"name":"car3","sourceUrl":null,"frameSize":{"x":51,"y":107},"frameCount":1,"looping":true,"frameDelay":12,"version":"Tggewdm_58vSal9hguBXZ2R.ViYl7Gfn","loadedFromSource":true,"saved":true,"sourceSize":{"x":51,"y":107},"rootRelativePath":"assets/8deb8d88-c907-42af-9658-c30e8b07c8f8.png"},"1e7cb588-c096-4103-a996-d6b99be54319":{"name":"car4","sourceUrl":null,"frameSize":{"x":51,"y":113},"frameCount":1,"looping":true,"frameDelay":12,"version":"Veb4JTo.eCApEgaSlVZziZsKTMJ0hltY","loadedFromSource":true,"saved":true,"sourceSize":{"x":51,"y":113},"rootRelativePath":"assets/1e7cb588-c096-4103-a996-d6b99be54319.png"},"e77da5e8-6a5f-4741-8df0-293f59243c49":{"name":"car5","sourceUrl":null,"frameSize":{"x":51,"y":107},"frameCount":1,"looping":true,"frameDelay":12,"version":"CQiPf2t2rwB8isI1iM9ERPrXr8aLvud5","loadedFromSource":true,"saved":true,"sourceSize":{"x":51,"y":107},"rootRelativePath":"assets/e77da5e8-6a5f-4741-8df0-293f59243c49.png"},"a2204c30-9859-4226-8663-ed1cac552759":{"name":"score.png_1","sourceUrl":null,"frameSize":{"x":512,"y":223},"frameCount":1,"looping":true,"frameDelay":12,"version":"iDesBlWYujrKkm9b4x7ZCfkz4OhvivIL","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":223},"rootRelativePath":"assets/a2204c30-9859-4226-8663-ed1cac552759.png"},"26e0bea7-bd2d-4f1c-af6f-9c4e7ce3b4de":{"name":"car6","sourceUrl":null,"frameSize":{"x":51,"y":107},"frameCount":1,"looping":true,"frameDelay":12,"version":"iPUnhGmp080KWP4w3s_ZlU4vH7snSpC5","loadedFromSource":true,"saved":true,"sourceSize":{"x":51,"y":107},"rootRelativePath":"assets/26e0bea7-bd2d-4f1c-af6f-9c4e7ce3b4de.png"},"04c8809d-6c0e-42c9-bc48-c93305c4ba94":{"name":"arrow.png_1","sourceUrl":null,"frameSize":{"x":100,"y":71},"frameCount":1,"looping":true,"frameDelay":12,"version":"jR81dvGZlZXVZw_7Wo3zQu5QHArEgIFD","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":71},"rootRelativePath":"assets/04c8809d-6c0e-42c9-bc48-c93305c4ba94.png"},"9bdd11af-6c71-47eb-bc50-8ce953068bb7":{"name":"car.png","sourceUrl":null,"frameSize":{"x":51,"y":103},"frameCount":1,"looping":true,"frameDelay":12,"version":"VJo_k8vv7k_4U_RE6peJ9eeg2Ipr9fyH","loadedFromSource":true,"saved":true,"sourceSize":{"x":51,"y":103},"rootRelativePath":"assets/9bdd11af-6c71-47eb-bc50-8ce953068bb7.png"},"03303263-4749-4f5b-a5d4-bed92662eee8":{"name":"car2","sourceUrl":null,"frameSize":{"x":51,"y":107},"frameCount":1,"looping":true,"frameDelay":12,"version":"GJPTsXHBl2AyJIe90sJRe3G3wFYG06j8","loadedFromSource":true,"saved":true,"sourceSize":{"x":51,"y":107},"rootRelativePath":"assets/03303263-4749-4f5b-a5d4-bed92662eee8.png"},"4bbc07d3-f555-4faa-8fd2-2fd6879c710a":{"name":"reset","sourceUrl":"assets/v3/animations/wC22XFMQWp8t6YdmFRr1ZVGGieVZ89X3FXK0mrH2-RQ/4bbc07d3-f555-4faa-8fd2-2fd6879c710a.png","frameSize":{"x":512,"y":202},"frameCount":1,"looping":true,"frameDelay":4,"version":"8N665whXEPhZKuzUS2mSjoS7NLEVJUHa","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":202},"rootRelativePath":"assets/v3/animations/wC22XFMQWp8t6YdmFRr1ZVGGieVZ89X3FXK0mrH2-RQ/4bbc07d3-f555-4faa-8fd2-2fd6879c710a.png"},"2c448bf6-ca2e-4af3-a0eb-7eede455b784":{"name":"gameover.png_1","sourceUrl":"assets/v3/animations/wC22XFMQWp8t6YdmFRr1ZVGGieVZ89X3FXK0mrH2-RQ/2c448bf6-ca2e-4af3-a0eb-7eede455b784.png","frameSize":{"x":512,"y":124},"frameCount":1,"looping":true,"frameDelay":4,"version":"350aqJt70CQyjW0mMDVPgfoHSHaiAORC","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":124},"rootRelativePath":"assets/v3/animations/wC22XFMQWp8t6YdmFRr1ZVGGieVZ89X3FXK0mrH2-RQ/2c448bf6-ca2e-4af3-a0eb-7eede455b784.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//sprite for background
var track=createSprite(200,200,10,500);
track.setAnimation("track.jpg_1");
track.scale=1.75;
track.y=-500;

// creating the player
var car=createSprite(200,320,70,70);
car.setAnimation("car.png");
car.scale=0.9;

//sprite to restart the game
var restart=createSprite(75,360,50,50);
restart.setAnimation("reset");
restart.scale=0.2;

//sprite to show the direction of car


//made to prevent the car to go outside(left side)
var barrier1=createSprite(52,200,4,500);
barrier1.visible=false;

//made to prevent the car to go outside(right side)
var barrier2=createSprite(353,200,4,500);
barrier2.visible=false;

//sprite made to add a label for the score
var scoreImg=createSprite(50,20,10,10);
scoreImg.setAnimation("score.png_1");
scoreImg.scale=0.2;

//nitro is created to give a boost to the car


//gameover icon
var gameOver=createSprite(200,200,10,10);
gameOver.setAnimation("gameover.png_1");
gameOver.scale=0.9;

//initiating gamestates

var PLAY=1;
var END=0;
var gameState=PLAY;

//sprite used to count the distance
var score=0;

//creating the obstaclesgroup
var obstaclesGroup=createGroup();

function draw() {
  //instruction used for clearing the background
  background("white");
  
  //behaviour assigned when the game is to start
  if(gameState === PLAY){
    score=score+Math.round(World.frameRate/61);
    
   
    restart.visible=false;
    gameOver.visible=false;
    
    track.velocityY=8;

    //make the track infinitely scrolling
    if(track.y>400){
      track.y=-(track.height/2)+200;
    }
    
    //controls for the car
    if(keyWentDown("LEFT_ARROW")){
      car.velocityX=-5;
    }
    else if(keyWentDown("RIGHT_ARROW")){
      car.velocityX=5;
    }
    else if(keyWentUp("LEFT_ARROW")||keyWentUp("RIGHT_ARROW")){
      car.velocityX=0;
    }
    
    //instruction used to give nitro to car
    
    
    //instructions written to stop the game if the car touches the obstacles
    if(obstaclesGroup.isTouching(car)){
      gameState=END;
    }
    
    // written to call the function that creates the obstacles
    spawnObstacles();
    
    //to prevent the car to go outside the road
    car.bounceOff(barrier1);
    car.bounceOff(barrier2);
  }
  //assign behaviour when the game ends
  else if(gameState===END){
    track.velocityY=0;
    car.velocityX=0;
    
    obstaclesGroup.setLifetimeEach(-1);
    obstaclesGroup.setVelocityYEach(0);
    
    
    restart.visible=true;
    gameOver.visible=true;
    
    //to restart the game
    if(mousePressedOver(restart)){
      reset();
    }
  }
  
  drawSprites();
  
  // text styling
  fill("red");
  textSize(30);
  textFont("Georgia");
  
  //to display score
  text(" :"+score+"m",90,30);
  
  //instruction to start the game
  
  }
  
  /*((o)
       = )
    ((o) 
    
    */


//function to create the obstcles
function spawnObstacles(){
  //create obstacles after every 60 frames
  if(World.frameCount%60===0){
    //creating the obstacles
    var obstacle=createSprite(randomNumber(100,300),0,50,50);
    obstacle.depth=2;
    obstacle.velocityY=1;
    
    var rand =randomNumber(1,6);
    //settting the animation of obstacles random
    obstacle.setAnimation("car"+rand);
    /*switch(rand){
      
      case 1: obstacle.setAnimation("car1");
      console.log(rand);
      break;
      case 2: obstacle.setAnimation("car2");
      console.log("case 2");
      break;
      case 3: obstacle.setAnimation("car3");
      console.log("case 3");
      break;
      case 4: obstacle.setAnimation("car4");
      console.log("case 4");
      break;
      case 5: obstacle.setAnimation("car5");
      console.log("case 5");
      break;
      default:break;
    }*/
    
    obstacle.scale=0.8;
    obstacle.velocityY=3;
    obstaclesGroup.add(obstacle);
    
  }
}

//function to restart the game
function reset(){
  gameState=PLAY;
  obstaclesGroup.destroyEach();
  car.x=200;
  score=0;
}
  


  
  
  
  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
