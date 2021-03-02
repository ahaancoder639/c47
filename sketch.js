var ape, apeIMG;
var  APtreeIMG, appleIMG, appleCount = 15, bananaCount = 12, mangoCount = 14;
var back1,back2;
var Aptree0,Aptree1,Aptree11;
var hape,hapeImg;
var cave, caveIMG;
var m1;

var gameState = 2;

function preload(){
//load images 
apeIMG = loadImage("images/ape.png");
appleIMG = loadImage("images/apple.png");
APtreeIMG = loadImage("images/tree.png");
back2 = loadImage("images/jungle.png");
caveIMG = loadImage("images/cave.jpg");
hapeImg = loadImage("images/caveman.png");
}


function setup() {
  createCanvas(windowWidth,windowHeight);

  back1 = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
  back1.addImage(back2);
  back1.scale = 1.73;
  
  ape = createSprite(windowWidth/2,windowHeight/2,50,60);
  ape.addImage(apeIMG);
  ape.scale = 2;



}

function draw() {
  

 
   if(gameState === 1){

    
    
    Aptree0 = new Trees(windowWidth/2 + 650, windowHeight/2 - 360,100,100);
    Aptree1 = new Trees(windowWidth/2 - 650, windowHeight/2 - 360,100,100);
    Aptree2 = new Trees(windowWidth/2 - 650, windowHeight/2 + 360,100,100);
    Aptree3 = new Trees(windowWidth/2 + 650, windowHeight/2 + 360,100,100);
    
    Aptree4 = new Trees(windowWidth/2 + 650, windowHeight/2,100,100);
    Aptree5 = new Trees(windowWidth/2 - 650, windowHeight/2,100,100);
    Aptree6 = new Trees(windowWidth/2 , windowHeight/2 - 360,100,100);
    Aptree7 = new Trees(windowWidth/2 , windowHeight/2 + 360,100,100);
    
    Aptree8 = new Trees(windowWidth/2 + 325, windowHeight/2 + 360,100,100);
    Aptree9 = new Trees(windowWidth/2 - 325, windowHeight/2 + 360,100,100);
    Aptree10 = new Trees(windowWidth/2 + 325, windowHeight/2 - 360,100,100);
    Aptree11 = new Trees(windowWidth/2 - 325, windowHeight/2 - 360,100,100);
    
    Aptree12 = new Trees(windowWidth/2 + 325, windowHeight/2,100,100);
    Aptree13 = new Trees(windowWidth/2 - 325, windowHeight/2,100,100);
    
    //create spritess (apples)
    apple0 = new Apples(windowWidth/2 + 640, windowHeight/2 - 380);
    apple1 = new Apples(windowWidth/2 + 680, windowHeight/2 - 380);
    apple2 = new Apples(windowWidth/2 + 720, windowHeight/2 - 380);
    apple3 = new Apples(windowWidth/2 + 600, windowHeight/2 - 380);

    console.log("hi");
    
    if (keyIsDown(UP_ARROW)) {

      ape.y = ape.y - 20 ;
      }
       
       if(keyIsDown(DOWN_ARROW)){
      
        ape.y = ape.y + 20 ;
}
       
       if(keyIsDown(RIGHT_ARROW)){
      
      ape.x = ape.x + 20;
      }
       
       if(keyIsDown(LEFT_ARROW)){
      
        ape.x = ape.x - 20;
 }

 checkApples(apple0);
 checkApples(apple1);
 checkApples(apple2);
 checkApples(apple3);

 drawSprites();

 textSize(22);
 stroke("white");
 fill("white");
text("find 16 apples, 12 bananas, 14 mangoes ",windowWidth/2 - 200,windowHeight/2);

textSize(48);
text("apples:" + appleCount, windowWidth/2 ,windowHeight/2 - 100);
text("banana:" + bananaCount,windowWidth/2 - 600 , windowHeight/2 -150);
text("mangoes:" + mangoCount,windowWidth/2 + 600 , windowHeight/2 -150);



}
 


   if(appleCount === 16 && bananaCount === 12 && mangoCount === 14 ){
   
   gameState = 2;
    }
   
   if(gameState === 2){

   
   //destroyAllsprites();
   ape.destroy();
   back1.destroy();
   background("white");
   hape = createSprite(windowWidth/2,windowHeight/2,50,50);
   //hape.addImage(hapeImg);

   cave = createSprite(windowWidth/2 + 600,windowHeight/2);
   cave.addImage(caveIMG);

   m1 = new Mammoth(windowWidth/2,windowHeight/2 - 200);



   drawSprites();
   
 }
 
   
  
  


}


function checkApples(fruit){

  if(ape.isTouching(fruit.apple) && keyIsDown(32)){
    fruit.apple.destroy();
    ape.x = windowWidth/2;
    ape.y = windowHeight/2;
     appleCount = appleCount + 1;
   
    }









}

function destroyAllsprites(){

  ape.destroy();
Aptree0.Aptree.destroy();
Aptree1.Aptree.destroy();
Aptree2.Aptree.destroy();
Aptree3.Aptree.destroy();
Aptree4.Aptree.destroy();
Aptree5.Aptree.destroy();
Aptree6.Aptree.destroy();
Aptree7.Aptree.destroy();
Aptree8.Aptree.destroy();
Aptree9.Aptree.destroy();
Aptree10.Aptree.destroy();
Aptree11.Aptree.destroy();
Aptree12.Aptree.destroy();
Aptree13.Aptree.destroy();

apple0.apple.destroy();
apple1.apple.destroy();

back1.destroy();

console.log(Aptree0.Aptree); 

}

