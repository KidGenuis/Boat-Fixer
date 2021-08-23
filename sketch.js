var ship1, ship2, ship3, ship4;
var ocean, seaimg;

function preload(){
seaimg = loadImage("sea.png");



}

function setup(){
  createCanvas(400,400);
  
  ocean.createSprite(400,200);
  ocean.addImage(seaimg);

}

function draw() {
  background(0);



  drawSprites();
}