var database;
var game;
var form;
var player;
var cb;
var ci;

var name = "";
    var email = "";
    var password="";
    
    



var gameState=0;

//var TREXbutton=createButton("Play Trex");

function setup() {
  createCanvas(800,400);

  database=firebase.database();

  
  game=new Game();
  game.getState();
  game.start();
  
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
}