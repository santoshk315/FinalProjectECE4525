intro = true;
instructions = false;
gameScreen = false;
images = [];
keyArray = [];
grass = [];
walls = [];

var tilemap = [
  "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "wpppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppw",
  "w          pppppppppppppppppppppppp                                                               w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                             k                                                   w",
  "w                                      pppppppppppppp                                             w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "w                                                                                                 w",
  "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"

];


class Kratos{
  constructor(x, y, scale){
    this.x = x;
    this.y = y;
    this.scale = scale;
    this.img = loadImage("kratossprite.png");
  }
  draw(){
    image(this.img, this.x, this.y, this.scale, this.scale);
  }
  move(){
    if(keyArray[UP_ARROW] === 1){
      this.y -= 5;
    }
    if(keyArray[DOWN_ARROW] === 1){
      this.y += 5;
    }
    if(keyArray[LEFT_ARROW] === 1){
      this.x -= 5;
    }
    if(keyArray[RIGHT_ARROW] === 1){
      this.x += 5;
    }
  }
}

class Omega{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.rune1 = new Runes(this.x - 27.5, this.y);
    this.rune2 = new Runes(this.x + 22.5, this.y);
    this.rune3 = new Runes(this.x, this.y - 27.5);
    this.rune4 = new Runes(this.x, this.y + 27.5);
    this.alpha = 0;
  }
  draw(){
    noFill();
    strokeWeight(10);
    stroke(150, 0, 0, this.alpha);
    circle(this.x, this.y, 50);
    noFill();
    arc(this.x + 35, this.y, 120, 70, PI / 2, PI);
    arc(this.x - 35, this.y, 120, 70, 2 * PI, 2 * PI + PI/2);

    
    strokeWeight(1);
    stroke(255, 0, 0, this.alpha);
    circle(this.x, this.y, 50);
    stroke(200, 0, 0, this.alpha);
    circle(this.x, this.y, 25);
    stroke(150, 0, 0, this.alpha);
    circle(this.x, this.y, 10);
    stroke(255, 0, 0, this.alpha);
    arc(this.x + 35, this.y, 120, 70, PI / 2, PI);
    arc(this.x - 35, this.y, 120, 70, 2 * PI, 2 * PI + PI/2);
    stroke(255, alpha);
    this.rune1.draw_rune1();
    this.rune2.draw_rune2();
    this.rune3.draw_rune3();
    this.rune4.draw_rune4();
    stroke(100, 0, 0, this.alpha);
    
    //noStroke();
    noFill();
  }
}
class Runes{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  draw_rune1(){
    line(this.x, this.y, this.x, this.y + 5);
    line(this.x + 5, this.y, this.x + 5, this.y + 5);
    line(this.x, this.y + 3, this.x + 5, this.y + 1.5);
  }
  draw_rune2(){
    line(this.x, this.y, this.x + 5, this.y + 5);
    line(this.x + 5, this.y + 5, this.x + 5, this.y);
    line(this.x + 5, this.y, this.x, this.y + 5);
  }
  draw_rune3(){
    line(this.x, this.y, this.x, this.y + 5);
    line(this.x, this.y + 3.5, this.x + 2.5, this.y);
    line(this.x, this.y + 3.5, this.x - 2.5, this.y);
  }
  draw_rune4(){
    arc(this.x, this.y, 5, 5, PI, 2 * PI);
    fill(0);
    circle(this.x, this.y, 1);
    noFill();
  }
}

class Skeleton{
  constructor(x, y, scale){
    this.x = x;
    this.y = y;
    this.scale = scale;
    this.img = loadImage("skeleton.png");
  }
  draw(){
    image(this.img, this.x, this.y, this.scale, this.scale);
  }
}

class IntroScreen{
  constructor(){
    this.omega = new Omega(200, 100);
    this.kratos = new Kratos(100, 230, 80);
    this.bg = new bgsky(0,0,400,300);
    this.grass = [new Platform(200,300,40,40),new Platform(160,300,40,40),new Platform(120,300,40,40),new Platform(80,300,40,40),new Platform(40,300,40,40),new Platform(0,300,40,40),new Platform(200,300,40,40),new Platform(240,300,40,40),new Platform(280,300,40,40),new Platform(320,300,40,40),new Platform(360,300,40,40)];
    this.rocks = [new Wall(200,335,40,40),new Wall(160,335,40,40),new Wall(120,335,40,40),new Wall(80,335,40,40),new Wall(40,335,40,40),new Wall(0,335,40,40),new Wall(200,335,40,40),new Wall(240,335,40,40),new Wall(280,335,40,40),new Wall(320,335,40,40),new Wall(360,335,40,40),new Wall(200,375,40,40),new Wall(160,375,40,40),new Wall(120,375,40,40),new Wall(80,375,40,40),new Wall(40,375,40,40),new Wall(0,375,40,40),new Wall(200,375,40,40),new Wall(240,375,40,40),new Wall(280,375,40,40),new Wall(320,375,40,40),new Wall(360,375,40,40)];
    this.mtns = [new mountain(100,120,200,200),new mountain(-100,120,200,200),new mountain(300,120,200,200)];
    this.animateKratos = 1;
    this.skeleton = new Skeleton(200, 230, 80);
    this.animateSkeleton = 1;
    this.textX = 100;
    this.textY = 420;
  }
  draw(){
    
    this.bg.draw();
    //fill(194, 178, 128);
    //rect(0, 300, 400, 100);
    //fill(135,206,235);
    //rect(0, 0, 400, 300);
    stroke(0, this.omega.alpha);
    //fill(0,154,23);
    //rect(0, 250, 400, 50);
    //fill(135, 206, 235);
    rect(0, 0, 100, 50);
    noFill();
    this.omega.draw();
    if(frameCount > 60){
    textSize(12);
    text("Instructions", 10, 25);
    textSize(15);
    text("GOD OF WAR: LOST IN TIME", this.textX, this.textY);
    }
    for(var j = 0; j < this.mtns.length; j++) {
      this.mtns[j].draw();
    }
    
    
    for(var j = 0; j < this.rocks.length; j++) {
      this.rocks[j].draw();
    }
    for(var i = 0; i < this.grass.length; i++) {
      this.grass[i].draw();
    }
    
    this.kratos.draw();
    this.skeleton.draw();
    noStroke();
    noFill();
  }
  animate(){
    this.kratos.x += this.animateKratos;
    if(this.kratos.x > 300 || this.kratos.x < 0){
      this.animateKratos = -this.animateKratos;
    }
    this.skeleton.x += this.animateSkeleton;
    if(this.skeleton.x > 400 || this.skeleton.x < 100){
      this.animateSkeleton = -this.animateSkeleton;
    }
    if(this.textY > 60){
      this.textY--;
    }
    if(this.omega.alpha < 255){
      this.omega.alpha++;
    }
    
  }
  moveOut(){
    if(this.kratos.x > -150){
      this.kratos.x += -5;
      this.skeleton.x += -5;
    }
    else{
      intro = false;
    }
  }
}
class bgsky{
  constructor(x, y, scale, scale1){
    this.x = x;
    this.y = y;
    this.scale = scale;
    this.scale1 = scale1;
    
    this.img = loadImage("grassland_tileset/grassland_tileset/PNG/bg4.png");
    
  }
  draw(){
    image(this.img, this.x, this.y, this.scale, this.scale1);
  }
}

class mountain{
  constructor(x, y, scale, scale1){
    this.x = x;
    this.y = y;
    this.scale = scale;
    this.scale1 = scale1;
    
    this.img = loadImage("mountain.png");
    
  }
  draw(){
    image(this.img, this.x, this.y, this.scale, this.scale1);
  }
}
class Wall{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.wall = loadImage("grassland_tileset/grassland_tileset/PNG/terrain_center.png");
  }
  draw(){
    image(this.wall, this.x, this.y, 40, 40);
  }
}

class Platform{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.platform = loadImage("grassland_tileset/grassland_tileset/PNG/terrain_platform_center.png");;
  }
  draw(){
    image(this.platform, this.x, this.y, 40, 40);
  }
}

class Game{
  constructor(walls, grass, kratos){
    this.wallsArray = walls;
    this.grassArray = grass;
    this.kratos = kratos;
  }
  drawBackground(){
    for(var i = 0; i < walls.length; i++){

      walls[i].draw();
    }
    for(var j = 0; j < grass.length; j++){
      grass[j].draw();
    }
    
  }
}


function keyPressed() {
  keyArray[keyCode] = 1;
}
function keyReleased() {
  keyArray[keyCode] = 0;
}

let myFont;
function preload(){
  myFont = loadFont('Godofwar-wPz6.ttf');
}

function initTileMap(){
  for (var i = 0; i < tilemap.length; i++) {
    for (var j = 0; j < tilemap[i].length; j++) {
      if(tilemap[i][j] == "w"){
        walls.push(new Wall(j * 40, i * 40));
      }
      else if(tilemap[i][j] == "p"){
        grass.push(new Platform(j * 40, i * 40));
      }
    }
  }
}

function setup() {
  createCanvas(400, 400);
  //customChar();
  textFont(myFont);
  initTileMap();
  kratos = new Kratos(180, 180, 40);
  intro = new IntroScreen();
  game = new Game(walls, grass, kratos);
}

function draw() {
  background(255);
  if(intro){
    intro.draw();
    if(frameCount > 60){
      intro.animate();
    }
    if((mouseButton == LEFT || mouseButton == RIGHT || mouseButton == CENTER) && mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100){
      intro.moveOut();
      
    }
    if(!intro){
      instruct = true;
    }

  }
  else if(instruct){
    background(255);
  }
  else if(gameScreen){
    push();
    translate(200 - kratos.x, 200-kratos.y);
    kratos.draw();
    kratos.move();
    game.drawBackground();
    //wall.draw();
    pop();
  }
}
