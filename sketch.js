var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg
var leafImg
var orangeleafImg
var redleafImg


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg = loadImage("leaf.png")
  redleafImg = loadImage("redImage.png")
  orangeleafImg = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX
  
  var select_sprites = Math.round(random(1,2))
if (frameCount % 80 == 0){
  if (select_sprites == 1) {
    spawnApples()
  } else {
    spawnLeaves()
  }
}


 
  drawSprites();
  
}


function spawnApples(){
  apple = createSprite(random(50,350 ),40,10,10)
  apple.addImage(appleImg)
  apple.scale = 0.08
  apple.velocityY = +5
  
  apple.lifetime = 70



}

function spawnLeaves(){
  leaf = createSprite(random(50,350),40,10,10)
  leaf.addImage(leafImg)
  leaf.scale = 0.08
  leaf.velocityY = +5
  leaf.lifetime = 70

  orange = createSprite(random(50,350),40,10,10)
  orange.addImage(orangeleafImg)
  orange.scale = 0.08
  orange.velocityY = +5
  orange.lifetime = 70

  red = createSprite(random(50,350),40,10,10)
  red.addImage(redleafImg)
  red.scale = 0.08
  red.velocityY = +5
  red.lifetime = 70
}
  


