introS = true;
instructionsS = false;
gameScreen = false;
images = [];
keyArray = [];
grass = [];
walls = [];
enemies = [];
ladders = [];
images = [];
keys = [];
potions = [];
var skelyDir;
var skelxDir;
let targetX;
let targetY;
backgroundArray = [];
firedWebs = [];

finalGrass = [];
finalWalls = [];
finalLadders = [];








//checks for key pressed and released
function keyPressed() {
  keyArray[keyCode] = 1;
}
function keyReleased() {
  keyArray[keyCode] = 0;
}
/*
List of variables used to preload images and drawings for the game
*/
let myFont;
let song;
let kratossp0;
let kratossp1;
let kratosspwalk;
let kratosarray;
let kratossp0_rev;
let kratossp1_rev;
let kratosspwalk_rev;
let kratosarray_rev;
let kratoswalking_rev;
let kratosattack_rev;
let kratoswalking;
let kratosattack;
let skelarray;
let skelarray_rev;
let sksp0;
let sksp_rev;
let sksp1;
let sksp1_rev;

let sksphurt;
let sksphurt_rev;
let zeussp;
let zeusarray;
let rock;
let wall;
let ladder;
let bridge;
let potion;
let key;
let sl1;
let sl4;
let sl1_rev;
let sl4_rev;
let slasharray;
let slasharray_rev;
let l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12;
let lightningarray;
let backgroundImage;
//preloads fonts, music, and images to improve performance
function preload(){
  
  myFont = loadFont('Godofwar-wPz6.ttf');
  song = loadSound('makai-symphony-dragon-slayer.mp3');
  kratossp0 = loadImage("kratossprite.png");
  kratosspwalk = loadImage("kratossprite_walk.png");
  kratossp1 = loadImage("kratossprite_shift.png");
  kratosspattk = loadImage("kratossprite_attack1.png");

  kratossp0_rev = loadImage("kratossprite_rev.png");
  kratosspwalk_rev = loadImage("kratossprite_walk_rev.png");
  kratossp1_rev = loadImage("kratossprite_shift_rev.png");
  kratosspattk_rev = loadImage("kratossprite_attack1_rev.png");

  sksp0 = loadImage("skeleton_wings.png");
  sksp1 = loadImage("skeleton_flying.png");

  sksphurt = loadImage("skeleton_wings_hurt.png");
  sksphurt_rev = loadImage("skeleton_wings_hurt_rev.png");

  sksp0_rev = loadImage("skeleton_wings_rev.png");
  sksp1_rev = loadImage("skeleton_flying_rev.png");

  zeussp = loadImage('zeuscloud.png');
  zeussp_rev = loadImage('zeuscloud_rev.png');
  zeusshoot = loadImage('zeusshoot.png');
  zeusshoot_rev = loadImage('zeusshoot_rev.png');
  zeushellfire = loadImage('zeustransition.png');
  zeushellfire_shift = loadImage('zeustransition_shift.png');
  zeushurt = loadImage('zeushurt.png');
  zeushurt_rev = loadImage('zeushurt_rev.png');
  zeusfall = loadImage('zeusfalling.png');
  zeusfall_rev = loadImage('zeusfalling_rev.png');

  kratosspattk = loadImage("kratossprite_attack1.png")
  wall = loadImage("grassland_tileset/grassland_tileset/PNG/terrain_center.png");
  rock = loadImage("grassland_tileset/grassland_tileset/PNG/midground_center.png");
  ladder = loadImage("grassland_tileset/grassland_tileset/PNG/rope_ladder_new.png");
  bridge = loadImage("grassland_tileset/grassland_tileset/PNG/rope_ladder_new_horiz.png");
  potion = loadImage("grassland_tileset/grassland_tileset/PNG/pt1.png");
  key = loadImage("grassland_tileset/grassland_tileset/PNG/key05_diamonds.png");
  bg1 = loadImage("grassland_tileset/grassland_tileset/PNG/bgwall.png");
  bg2 = loadImage("grassland_tileset/grassland_tileset/PNG/bgwall2.png");
  backgroundImage = loadImage("grassland_tileset/grassland_tileset/PNG/bg_cave.png")
  sl1 = loadImage("slash1.png");

  sl4 = loadImage("slash4.png");

  sl1_rev = loadImage("slash1_rev.png");

  sl4_rev = loadImage("slash4_rev.png");
  l1 = loadImage("lightning_line5b1.png");
  l2 = loadImage("lightning_line5b2.png");
  l3 = loadImage("lightning_line5b3.png");
  l4 = loadImage("lightning_line5b4.png");
  l5 = loadImage("lightning_line5b5.png");
  l6 = loadImage("lightning_line5b6.png");
  l7 = loadImage("lightning_line5b7.png");
  l8 = loadImage("lightning_line5b8.png");
  l9 = loadImage("lightning_line5b9.png");
  l10 = loadImage("lightning_line5b10.png");
  l11 = loadImage("lightning_line5b11.png");
  l12 = loadImage("lightning_line5b12.png");
  createCanvas(400, 400);
  lava = new enemybulletObj();
  lava.draw();
  images.push(wall);
  images.push(rock);
  images.push(ladder);
  images.push(bridge);
  images.push(bg1);
  images.push(bg2);
  images.push(key);
  images.push(potion);
  images.push(backgroundImage);
  images.push(get(0, 0, 20, 20));
  kratosarray = [kratossp0,kratossp0,kratossp1,kratossp1];
  kratosarray_rev = [kratossp0_rev,kratossp0_rev,kratossp1_rev,kratossp1_rev];
  kratoswalking = [kratossp0,kratossp0,kratosspwalk,kratosspwalk];
  kratoswalking_rev = [kratossp0_rev,kratossp0_rev, kratosspwalk_rev, kratosspwalk_rev];
  kratosattack = [kratossp0,kratossp0,kratosspattk,kratosspattk];
  kratosattack_rev = [kratossp0_rev,kratossp0_rev,kratosspattk_rev,kratosspattk_rev];
  skelarray = [sksp0,sksp0,sksp1,sksp1];
  skelarray_rev = [sksp0_rev,sksp0_rev,sksp1_rev,sksp1_rev];

  skelarrayhurt = [sksphurt,sksphurt,sksphurt,sksphurt];
  skelarrayhurt_rev = [sksphurt_rev,sksphurt_rev,sksphurt_rev,sksphurt_rev];
  slasharray = [sl1,sl1,sl4,sl4];
  slasharray_rev = [sl1_rev,sl1_rev,sl4_rev,sl4_rev];
  zeusarray = [zeussp,zeussp];
  zeusarray_rev = [zeussp_rev,zeussp_rev];

  zeusshooting = [zeussp,zeussp,zeusshoot,zeusshoot];
  zeusshooting_rev = [zeussp_rev,zeussp_rev,zeusshoot_rev,zeusshoot_rev];

  zeushellfire_array = [zeushellfire,zeushellfire,zeushellfire_shift,zeushellfire_shift];

  zeusfallingarray = [zeusfall,zeusfall];
  zeusfallingarray_rev = [zeusfall_rev,zeusfall_rev];

  zeushurtarray = [zeushurt,zeushurt];
  zeushurtarray_rev = [zeushurt_rev,zeushurt_rev];

  lightningarray = [l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12];
}

//intializes tilemap based upon the letters in the tilemap array
function initTileMap(){
  for (var i = 0; i < tilemap.length; i++) {
    for (var j = 0; j < tilemap[i].length; j++) {
      if(tilemap[i][j] == "w"){
        walls.push(new Wall(j * 40, i * 40, "w"));
      }
      else if(tilemap[i][j] == "r"){
        walls.push(new Wall(j * 40, i * 40, "r"));
      }
      else if(tilemap[i][j] == "p"){
        grass.push(new Platform(j * 40, i * 40, "p"));
      }
      else if(tilemap[i][j] == "e"){
        enemies.push(new Skeleton(j * 40, i * 40, 40));
        backgroundArray.push(new BackGround(j * 40, i * 40, images[4]));
      }
      else if(tilemap[i][j] == "l"){
        ladders.push(new Ladder(j * 40, i * 40, 40));
      }
      else if(tilemap[i][j] == "b"){
        grass.push(new Platform(j * 40, i * 40, "b"));
      }
      else if(tilemap[i][j] == "1"){
        backgroundArray.push(new BackGround(j * 40, i * 40, images[4]));
      }
      else if(tilemap[i][j] == "2"){
        backgroundArray.push(new BackGround(j * 40, i * 40, images[5]));
      }
      else if(tilemap[i][j] == "k"){
        keys.push(new Key(j * 40 + 10, i * 40 + 10));
      }
      else if(tilemap[i][j] == "h"){
        potions.push(new Potion(j * 40 + 10, i * 40 + 10));
      }
    }
  }
}

function initFinalTileMap(){
  //Initialize Tilemap for final boss battles
}

var instr;
var zeus;

//creates canvas and necessary assets
function setup() {
  createCanvas(400, 400);
  //customChar();
  textFont(myFont);
  initTileMap();
  song.stop();
  
  song.play();
  getAudioContext().resume();
  jumpForce = new p5.Vector(0, -12.5);
  gravity = new p5.Vector(0, .5);
  // song.loop();
  kratos = new Kratos(120, 3520, 40);
  zeus = new Zeus(210,160,40);
  gameZeus = new Zeus(120 + 60, 3520, 40);
  intro = new IntroScreen();
  instr = new InstructionScreen();
  game = new Game(walls, grass, kratos, enemies, gameZeus);
}
var transition = false;
var instructTrans = false;
//draws the intro screen and transitions to the instructions screen when the proper conditions are met
function draw() {
  
  background(255);
  if(introS){
    // song.rate(.5)
    //song.play();
    if(frameCount > 60){
      //song.play();
      intro.draw();
      intro.animate();
    }
    if((mouseIsPressed) && mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 50){
      transition = true;
      
    }
    if(transition == true) {
      intro.moveOut();
    }

    if(!introS){
      instructionsS = true;
      transition = false;
      gameScreen = false;
    }
    if((mouseIsPressed) && mouseX > 150 && mouseX < 250 && mouseY > 350 && mouseY < 400){
      
      introS = false;
      instructionsS = false;
      gameScreen = true;
      
    }
  }
  else if(instructionsS){
    instr.draw();
    instr.animate();
    if((mouseIsPressed) && mouseX > 112 && mouseX < 212 && mouseY > 100 && mouseY < 125 && instr.base){
      instructTrans = true;
      
    }
    if(instructTrans == true) {
      instr.moveOut();

    }
    if(!instructionsS){
      introS = true;
      instructTrans = false;
      gameScreen = false;
    }
    
  }
  //Play game as long as Kratos has health
  else if(gameScreen && kratos.health > 0){
    push();
    translate(200 - kratos.position.x, 200-kratos.position.y);
    game.play();
    //print(gameZeus.level);
    //wall.draw();
    pop();
  }
  //Otherwise losing screen
  else{
    background(0);
  }
}