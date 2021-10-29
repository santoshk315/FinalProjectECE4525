var tilemap = [
  "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
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
  }
  draw(){
    noFill();
    strokeWeight(10);
    stroke(150, 0, 0);
    circle(this.x, this.y, 50);
    noFill();
    arc(this.x + 35, this.y, 120, 70, PI / 2, PI);
    arc(this.x - 35, this.y, 120, 70, 2 * PI, 2 * PI + PI/2);

    
    strokeWeight(1);
    stroke(255, 0, 0);
    circle(this.x, this.y, 50);
    stroke(200, 0, 0);
    circle(this.x, this.y, 25);
    stroke(150, 0, 0);
    circle(this.x, this.y, 10);
    stroke(255, 0, 0);
    arc(this.x + 35, this.y, 120, 70, PI / 2, PI);
    arc(this.x - 35, this.y, 120, 70, 2 * PI, 2 * PI + PI/2);
    stroke(255);
    this.rune1.draw_rune1();
    this.rune2.draw_rune2();
    this.rune3.draw_rune3();
    this.rune4.draw_rune4();
    stroke(100, 0, 0);
    text("GOD OF WAR: LOST IN TIME", this.x - 75, this.x-150);
    noStroke();
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

class IntroScreen{
  constructor(){
    this.omega = new Omega(200, 100);
    this.kratos = new Kratos(180, 200, 80);
  }
  draw(){
    
    fill(194, 178, 128);
    rect(0, 300, 400, 100);
    fill(135,206,235);
    rect(0, 0, 400, 300);
    stroke(0);
    fill(0,154,23);
    rect(0, 250, 400, 50);
    fill(135, 206, 235);
    rect(0, 0, 100, 50);
    fill(135, 206, 235);
    rect(300, 0, 100, 50);
    noFill();
    text("Instructions", 15, 25);
    text("Options", 330, 25);
    this.omega.draw();
    this.kratos.draw();
  }
}


intro = true;
gameScreen = false;
images = [];
keyArray = [];
grass = [];
walls = [];
function keyPressed() {
  keyArray[keyCode] = 1;
}
function keyReleased() {
  keyArray[keyCode] = 0;
}

function initTileMap(){

}

function setup() {
  createCanvas(400, 400);
  kratos = new Kratos(180, 180, 40);
  intro = new IntroScreen();
}

function draw() {
  background(255);
  if(intro){
    intro.draw();
  }
  else if(gameScreen){

  }
}
