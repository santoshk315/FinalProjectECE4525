/*
Authors: Santosh Krishnan, Aman Mathur
Date: 12/3/2021
Description:  God of War: Lost Father is a parody 2D metroidvania type game based off the 
acclaimed God of War series.  In this game, Kratos goes in search of his father to figure out
why he left and to get revenge with leaving him with daddy issues.  You travel across diverse terrains and meet Zeus
in multiple boss levels before either succumbing to him or vanquishing his prescense.  This game has the standard platformer
controls with a hack/slash attack rather than shooting to retain one of the main features of God of War, while trying to avoid
scary monsters and Zeus who have projectile attacks.  This game also utilizes FSMs for intelligent behavior and evasion from attacks(in the case of Zeus),
while also utilizing particle systems for some animations.  The game also features intelligent shooting and motion to make the game more realistic
*/



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

//Final Boss 1 Arrays

finalGrass = [];
finalWalls = [];
finalLadders = [];
finalEnemies = [];
finalPotions = [];

//Level 2 Arrays

grass2 = [];
walls2 = [];
enemies2 = [];
ladders2 = [];
keys2 = [];
potions2 = [];

//Final Boss 2 Arrays

finalGrass2 = [];
finalWalls2 = [];
finalLadders2 = [];
finalEnemies2 = [];
finalPotions2 = [];









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

let gothbrick;
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
  backgroundImage = loadImage("grassland_tileset/grassland_tileset/PNG/bg_cave.png");
  bg_lev2 = loadImage("grassland_tileset/grassland_tileset/PNG/bg_forest.png")
  gothbrick = loadImage("grassland_tileset/grassland_tileset/PNG/gothicbrick.png");
  gothrock = loadImage("grassland_tileset/grassland_tileset/PNG/gothrock.png")
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
  images.push(gothrock)
  images.push(bg_lev2);
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
  zeusarray = [zeussp,zeussp,zeussp,zeussp];
  zeusarray_rev = [zeussp_rev,zeussp_rev,zeussp_rev,zeussp_rev];

  zeusshooting = [zeussp,zeussp,zeusshoot,zeusshoot];
  zeusshooting_rev = [zeussp_rev,zeussp_rev,zeusshoot_rev,zeusshoot_rev];

  zeushellfire_array = [zeushellfire,zeushellfire,zeushellfire_shift,zeushellfire_shift];

  zeusfallingarray = [zeusfall,zeusfall,zeusfall,zeusfall];
  zeusfallingarray_rev = [zeusfall_rev,zeusfall_rev,zeusfall_rev,zeusfall_rev];

  zeushurtarray = [zeushurt,zeushurt,zeushurt,zeushurt];
  zeushurtarray_rev = [zeushurt_rev,zeushurt_rev,zeushurt_rev,zeushurt_rev];

  lightningarray = [l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12];
}

//intializes tilemap based upon the letters in the tilemap array
function initTileMap2(){
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
      else if(tilemap[i][j] == "b"){
        grass.push(new Platform(j * 40, i * 40, "b"));
      }
      else if(tilemap[i][j] == "e"){
        enemies.push(new Skeleton(j * 40, i * 40, 40));
        backgroundArray.push(new BackGround(j * 40, i * 40, images[4]));
      }
      else if(tilemap[i][j] == "l"){
        ladders.push(new Ladder(j * 40, i * 40, 40));
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

function initTileMap(){
  for (var i = 0; i < tilemap2.length; i++) {
    for (var j = 0; j < tilemap2[i].length; j++) {
      if(tilemap2[i][j] == "w"){
        walls2.push(new GothicWall(j * 40, i * 40, "w"));
      }
      else if(tilemap2[i][j] == "r"){
        walls2.push(new GothicWall(j * 40, i * 40, "r"));
      }
      else if(tilemap2[i][j] == "p"){
        grass2.push(new GothicPlatform(j * 40, i * 40, "p"));
      }
      else if(tilemap2[i][j] == "b"){
        grass2.push(new GothicPlatform(j * 40, i * 40, "b"));
      }
      else if(tilemap2[i][j] == "e"){
        enemies2.push(new Skeleton(j * 40, i * 40, 40));
        backgroundArray.push(new BackGround(j * 40, i * 40, images[4]));
      }
      else if(tilemap2[i][j] == "l"){
        ladders2.push(new Ladder(j * 40, i * 40, 40));
      }
      else if(tilemap2[i][j] == "k"){
        keys2.push(new Key(j * 40 + 10, i * 40 + 10));
      }
      else if(tilemap2[i][j] == "h"){
        potions2.push(new Potion(j * 40 + 10, i * 40 + 10));
      }
    }
  }
}


function initFinalTileMap(){
  //Initialize Tilemap for final boss battles
  for (var i = 0; i < finaltmap1.length; i++) {
    for (var j = 0; j < finaltmap1[i].length; j++) {
      if(finaltmap1[i][j] == "w"){
        finalWalls.push(new Wall(j * 40, i * 40, "w"));
      }
      else if(finaltmap1[i][j] == "r"){
        finalWalls.push(new Wall(j * 40, i * 40, "r"));
      }
      else if(finaltmap1[i][j] == "p"){
        finalGrass.push(new Platform(j * 40, i * 40, "p"));
      }
      else if(finaltmap1[i][j] == "e"){
        finalEnemies.push(new Skeleton(j * 40, i * 40, 40));
        backgroundArray.push(new BackGround(j * 40, i * 40, images[4]));
      }
      else if(finaltmap1[i][j] == "h"){
        potions.push(new Potion(j * 40 + 10, i * 40 + 10));
      }
    }
  }

}

function initFinalTileMap2(){
  //Initialize Tilemap for final boss battles
  for (var i = 0; i < finaltmap2.length; i++) {
    for (var j = 0; j < finaltmap2[i].length; j++) {
      if(finaltmap2[i][j] == "w"){
        finalWalls2.push(new GothicWall(j * 40, i * 40, "w"));
      }
      else if(finaltmap2[i][j] == "r"){
        finalWalls2.push(new GothicWall(j * 40, i * 40, "r"));
      }
      else if(finaltmap2[i][j] == "p"){
        finalGrass2.push(new GothicPlatform(j * 40, i * 40, "p"));
      }
      else if(finaltmap2[i][j] == "e"){
        finalEnemies2.push(new Skeleton(j * 40, i * 40, 40));
        backgroundArray.push(new BackGround(j * 40, i * 40, images[4]));
      }
      else if(finaltmap2[i][j] == "h"){
        finalPotions2.push(new Potion(j * 40 + 10, i * 40 + 10));
      }
    }
  }

}

var instr;
var zeus;
let level;
//creates canvas and necessary assets
function setup() {
  createCanvas(400, 400);
  //customChar();
  textFont(myFont);
  initTileMap();
  initTileMap2();
  initFinalTileMap();
  initFinalTileMap2();
  song.stop();
  
  song.play();
  getAudioContext().resume();
  jumpForce = new p5.Vector(0, -8);
  gravity = new p5.Vector(0, .25);
  // song.loop();
  kratos = new Kratos(120, 3520, 40);
  kratCut2 = new Kratos(50,3520,100);
  zeusCut2 = new Zeus(50,3520,130);
  kratCut3 = new Kratos(200,300,100);
  zeusCut3 = new Zeus(150,100,130);
  zeus = new Zeus(210,160,40);
  gameZeus = new Zeus(120 + 60, 3520, 40);
  intro = new IntroScreen();
  instr = new InstructionScreen();
  game = new Game(walls, grass, kratos, enemies, gameZeus, potions, keys, ladders);
  game2 = new Game(walls2, grass2, kratos, enemies2, gameZeus, potions2, keys2, ladders2);
  timer = 0;
  level = 1;

  kratCut2.position.x = kratos.position.x-200;
  kratCut2.position.y = kratos.position.y+50;
  zeusCut2.position.x = kratos.position.x+50;
  zeusCut2.position.y = kratos.position.y-150;
  blood = [];
  moveAmount = 5;
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
    // gameScreen = false;
    push();
    translate(200 - kratos.position.x, 200-kratos.position.y);
    if(level === 1){
      game.play();
      if(game.zeus.alive === 0){
        level = 2;
        kratos.score = 0;
      }
    }
    else if(timer < 1000){
      //enter cut scene 2
      image(images[10], 0, 0, 1000, 930);
      image(images[10], 1000, 0, 1000, 930);
      image(images[10], 2000, 0, 1000, 930);
      image(images[10], 3000, 0, 1000, 930);
      image(images[10], 4000, 0, 1000, 930);
      image(images[10], 0, 930, 1000, 930);
      image(images[10], 0, 1860, 1000, 930);
      image(images[10], 0, 2790, 1000, 930);
      image(images[10], 1000, 930, 1000, 930);
      image(images[10], 1000, 1860, 1000, 930);
      image(images[10], 1000, 2790, 1000, 930);
      image(images[10], 2000, 930, 1000, 930);
      image(images[10], 2000, 1860, 1000, 930);
      image(images[10], 2000, 2790, 1000, 930);
      image(images[10], 3000, 930, 1000, 930);
      image(images[10], 3000, 1860, 1000, 930);
      image(images[10], 3000, 2790, 1000, 930);
      image(images[10], 0,  3720, 1000, 930);
      image(images[10], 1000, 3720, 1000, 930);
      image(images[10], 2000, 3720, 1000, 930);
      image(images[10], 3000, 3720, 1000, 930);
      image(images[10], 4000,  0, 1000, 930);
      image(images[10], 4000,  930, 1000, 930);
      image(images[10], 4000,  1820, 1000, 930);
      image(images[10], 4000,  2790, 1000, 930);
      image(images[10], 4000,  3720, 1000, 930);
      image(images[10], -1000,  0, 1000, 930);
      image(images[10], -1000,  930, 1000, 930);
      image(images[10], -1000,  1820, 1000, 930);
      image(images[10], -1000,  2790, 1000, 930);
      image(images[10], -1000,  3720, 1000, 930);  
      //Add background from previous level
      kratos.position.x = 120;
      kratos.position.y = 3520;
      if(timer < 200){
        kratCut2.draw();
        kratCut2.animate();
        zeusCut2.falling = 1;
        zeusCut2.draw();
        zeusCut2.animate1();
        zeusCut2.position.y++;

        if(timer > 100) {
          fill(255);
          rect(kratos.position.x - 200, kratos.position.y + 150, 400, 200);
          noFill();
          textSize(20);
          fill(0, 0, 255);
          text("(As Zeus Crashes): THUD!!!!", kratos.position.x - 200, kratos.position.y + 150, 400, 200);
          noFill();
        }

      }
      else if(timer < 400){
        kratCut2.walkani = 1;
        kratCut2.swing = 1;
        kratCut2.draw();
        kratCut2.animate();
        zeusCut2.falling = 1;
        zeusCut2.draw();
        zeusCut2.animate1();
        kratCut2.position.x += 1;
      }
      else if(timer < 500){
        kratCut2.swing = 1;
        kratCut2.walkani = 0;
        kratCut2.draw();
        kratCut2.animate();
        zeusCut2.falling = 1;
        zeusCut2.draw();
        zeusCut2.animate1();
        blood.push(new skelBlood(random(zeusCut2.position.x + 50, zeusCut2.position.x + 70), random(zeusCut2.position.y + 40, zeusCut2.position.y + 60)));
        for(var i = 0; i < blood.length; i++){
          if(blood[i].y > zeusCut2.position.y - 100){
            blood[i].draw();
            blood[i].x--;
          }
        }
        fill(255);
        rect(kratos.position.x - 200, kratos.position.y + 150, 400, 200);
        noFill();
        textSize(20);
        fill(0, 0, 255);
        text("Kratos: AHHHHH!  HOW. COULD. YOU. LEAVE. ME!", kratos.position.x - 200, kratos.position.y + 150, 400, 200);
      }
      else if(timer < 600){
        kratCut2.walkani = 1;
        kratCut2.position.x--;
        kratCut2.draw();
        kratCut2.animate();
        zeusCut2.hurtAnimation();
        zeusCut2.animate1();
        fill(255);
        rect(kratos.position.x - 200, kratos.position.y + 150, 400, 200);
        noFill();
        textSize(20);
        fill(255, 0, 0);
        text("Zeus: GET. OFF. ME. BOI", kratos.position.x - 200, kratos.position.y + 150, 400, 200);
        
      }
      else if(timer < 700){
        kratCut2.draw();
        kratCut2.animate();
        zeusCut2.hurtAnimation();
        zeusCut2.animate1();
        fill(255);
        rect(kratos.position.x - 200, kratos.position.y + 150, 400, 200);
        noFill();
        textSize(20);
        fill(255, 0, 0);
        text("Zeus: I'VE HAD ENOUGH ONCE I HEAL I'LL KILL YOU", kratos.position.x - 200, kratos.position.y + 150, 400, 200);
      }
      else{
        zeusCut2.direction = 1;
        kratCut2.position.x += 2;
        zeusCut2.position.x += 4;
        kratCut2.draw();
        kratCut2.animate();
        zeusCut2.hurtAnimation();
        zeusCut2.animate1();
        fill(255);
        rect(kratos.position.x - 200, kratos.position.y + 150, 400, 200);
        noFill();
        textSize(20);
        fill(0, 0, 255);
        text("Kratos: GET BACK HERE AND LET'S SETTLE THIS!", kratos.position.x - 200, kratos.position.y + 150, 400, 200);
      }
      timer++;
    }
    else{
      //play second level and second boss
      game2.play2();
      
      
    }
    //print(gameZeus.level);
    //wall.draw();
    pop();
  }
  //Otherwise winning screen
  else if(gameScreen === false){
    image(images[10], 0, 0, 1000, 930);
    kratCut3.swing = 1;
    kratCut3.walkani = 0;
    fill(255);
    text("Where's your Daddy?  Not leaving you!", 50, 50);
    text("Congratulations!  You Win and No Longer Have", 0, 75, 450, 450);
    text(" Daddy Issues!", 150, 100);
    noFill();
    tint(255, 0, 0);
    kratCut3.position.x = 150;
    kratCut3.draw();
    kratCut3.animate();
    zeusCut3.falling = 1;
    zeusCut3.draw();
    zeusCut3.animate1();
    zeusCut3.position.y = kratCut3.position.y;
    zeusCut3.position.x = kratCut3.position.x + 50;
    blood.push(new skelBlood(random(zeusCut3.position.x + 50, zeusCut3.position.x + 70), random(zeusCut3.position.y + 40, zeusCut3.position.y + 60)));
    for(var i = 0; i < blood.length; i++){
      if(blood[i].y > zeusCut3.position.x - 100){
        blood[i].draw();
        blood[i].x--;
      }
    }
  }
  else if(kratos.health <= 0){
    //losing screen
    image(images[8], 0, 0, 1000, 930);
    fill(255);
    text("HAHA YOUR DADDY DID YOU DIRTY", 50, 50);
    noFill();
    kratCut3.walkani = 1;
    kratCut3.draw();
    kratCut3.animate();
    zeusCut3.specialAttack();
    zeusCut3.currState = 4;
    zeusCut3.state[zeusCut3.currState].execute(zeusCut3);
    zeusCut3.animate1();
    if(kratCut3.position.x == 0 || kratCut3.position.x == 300){
      moveAmount = -moveAmount;
    }
    kratCut3.position.x += moveAmount;
  }
}