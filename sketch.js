introS = true;
instructionsS = false;
gameScreen = false;
images = [];
keyArray = [];
grass = [];
walls = [];
enemies = [];
images = [];
var tilemap = [
  "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
  "r                rrrrrrrrrr                rrr                                                    r",
  "r              rrrrrrrrrrrr                 rr                                                    r",
  "r             prrrrrrrrrrrr                  r                                                    r",
  "r              rrrrrrrrrrrr                  r                                                    r",
  "r            prrrrrrrrrrrr                   r                                                    r",
  "r             rrrrrrrrrrrr                   r                                                    r",
  "r            prrrrrrrrr                      r                                                    r",
  "r             rrrrrrrr                       r                                                    r",
  "rp            rrrrrrrr                       r                                                    r",
  "r            prrrrr                          r                                                    r",
  "r            rrr                             r                                                    r",
  "r            rr                              r                                                    r",
  "r                                            r                                                    r",
  "r                                                                                                 r",
  "rppppppppppppppppppppppp                          ppppppppppppppppppppppppppppppppppppppppppppppppr",
  "rrrrrrrrrrrrrrrrrrrrrrrrpp                    pppprrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
  "rrrrrrrrrrrrrrrrr                       pppppprrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
  "rrrrrrrr                         ppppppprrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
  "r                           ppppprrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
  "r                          prrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
  "r                         prrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
  "r                        prrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
  "r    pppppppppppppppppppprrrrrrrrrrrrrrrr                                                         r",
  "r    r                                  r                                                         r",
  "rp  p                                   r                                                         r",
  "r                                      r                                                         r",
  "rp    ppppp                             r                                                         r",
  "rr     rrrrpppppp                       r                                                         r",
  "rr r   rrrrrrrrrrp                                                                                r",
  "rrrrrrrrrrrrrrrrrrpppppppppppppppppppppppppppppppppppppppppppppppppppppppp                        r",
  "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr                                                               r",
  "rrrrrrrrrrrrrrrrrrrrrr                                                                            r",
  "rrrrrrrrr                                                   ppppppppppppppppppppppppppppppppppppppr",
  "rrrrr                                                ppppppprrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
  "r                                               pppppprrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
  "r                                         pppppprrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
  "r                                ppppppppprrrrrrrrrrrrrrrrrrrr                                    r",
  "r                        pppppppprrrrrrrrrrrrrrrr                                                 r",
  "r                 ppppppprrrrrrrrrrrrrrrr                                                         r",
  "r            ppppprrrrrrrrrrrrrrrrrrr                                                             r",
  "r                                                                                                 r",
  "r                                                                                                 r",
  "r                                                                                                 r",
  "r                                                                                                 r",
  "r                                                                                                 r",
  "rpppppppp                                                                                         r",
  "rrrrrrrrrpppppp                                                                                   r",
  "rrrrrrrrrrrrrrrppppppppp                                                                          r",
  "rrrrrrrrrrrrrrrrrrrrrrrrppp                                                                       r",
  "r      rrrrrrrrrrrrrrrrrrrrpppppppppppp                                                           r",
  "r             rrrrrrrrrrrrrrrrrrrrrrrrrppppppppppppppppp                                          r",
  "r                                 rrrrrrrrrrrrrrrrrrrrrrppppppppppppppp                           r",
  "r                                                                                                 r",
  "r                                                                                                 r",
  "r                                                                                                 r",
  "r                                                                                                 r",
  "r                                                                                                 r",
  "r                                                                                                 r",
  "rppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp            r",
  "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrpp           r",
  "rrrrrrrrrrrrrrrrrrrr         rrrrrr                  rrrrrr                                 ppppppr",
  "rrrrrrrrrrrrr                rrrr                      rrrr                           pppppprrrrrrr",
  "rrrrrr                       rrr                        rrr                         prrrrrrrrrrrrrr",
  "rrrr                         rr                          rr                         rrrrrrrrrrrrrrr",
  "rr                           r                            r                      ppprrrrrrrrrrrrrrr",
  "r                            r                            r     ppppppppppppppppprrrrrrrrrrrrrrrrrr",
  "r                                                        r     prrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
  "r                             ppppppppppppppppppppppppppp    prrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
  "r                    pppp                                        rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
  "r  ppppppp           rrrr                                                     rrrrrrrrrrrrrrrrrrrrr",
  "rpprrrrrrrpppppppp                                                                        rrrrrrrrr",
  "rrrrrrrrrrrrrrrrrrppppppp                                                                 rrrrrrrrr",
  "rrrrrrrrrrrrrrrrrrrrrrrrrppppp           e               e                                rrrrrrrrr",
  "rrrrrrrrrrrrrrrrrrrrrrrrrrrr       ppppppppp         pppppppp                                rrrrrr",
  "rrrrrrrrrrrrrrrrrrrrrrrr            rrrrrrr              rrr                             rrrrrrrrrr",
  "rrrrrrrrrrrrr                        rrrrr                r                             rrrrrrrrrrr",
  "rrrrrrrr                               r                           pppp                rrrrrrrrrrrr",
  "rrrrr                                                               rr             rrrrrrrrrrrrrrrr",
  "rrr                                                     pppppp                     r              r",
  "r                                                        rrrr                      r              r",
  "r                                   e                     rr                       r              r",
  "r                    ppppppppppppppppppppppppppppppp                              r               r",
  "r                   prrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrp               rr            r               r",
  "r                  prrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrp             rrrr           r               r",
  "r                 prrrrrrrr                 rrrrrrrrrrp          rrrrrrr                          r",
  "r                prrrrr                         rrrrrrrp       rrrrrrrrrrr              r      rrrr",
  "r       r       p                                 rrrrrrp      rrrrrrrrrrrr      r     rr     rrrrr",
  "r      rr      p                                    rrrrrp    rrrrrrrrrrrrrr     r    rrr  r  rrrrr",
  "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
  "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
  "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
  "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"

];

//class for main character using array of animations
class Kratos{
  constructor(x, y, scale){
    this.x = x;
    this.y = y;
    this.scale = scale;
    this.index = 0;
    this.len = kratosarray.length;
    this.position = new p5.Vector(this.x, this.y);
    this.velocity = new p5.Vector(0, 0);
    this.acceleration = new p5.Vector(0, 0);
    this.jump = 0;
    this.angle = 0;
    this.scalar = 1;
    this.walkani = 0;
    this.swing = 0;
    this.health = 6;
    this.timer = 0;
    //this.img = loadImage("kratossprite.png");
  }
  applyForce(force){
    this.acceleration.add(force);
  }
  draw(){
    /*image(kratossp0,this.x, this.y, this.scale, this.scale);
    image(kratossp0,this.x, this.y, this.scale, this.scale);
    if(frameCount % 25 === 0) {
      erase();
      image(kratossp1, this.x, this.y, this.scale, this.scale);
      image(kratossp1, this.x, this.y, this.scale, this.scale);
    }*/
    this.timer++;
    push();
    translate(this.position.x, this.position.y);
    let index = floor(this.index) % this.len;
    if(keyArray[LEFT_ARROW] === 1){
      
      this.angle = 3 * PI/2;
      this.scalar = -1;
      //scale(-1, 1);
      //image(kratosarray[index], 0, 0,this.scale,this.scale);

    }
    else if(keyArray[RIGHT_ARROW] === 1){
      this.scalar = 1;
      
    }

    //scale(this.scalar, 1);
    if(this.walkani === 0 && !introS){
      if(this.swing === 1) {
        image(kratosattack[index], 0, 0,this.scale,this.scale);
      }
      if(this.swing === 0) {
        image(kratosarray[index], 0, 0,this.scale,this.scale);
      }
    }

    if(this.walkani === 1 || introS){
      if(this.swing === 1) {
        image(kratosattack[index], 0, 0,this.scale,this.scale);
      }
      if(this.swing === 0) {
        image(kratoswalking[index], 0, 0,this.scale,this.scale);
      }
    }
    

    //rotate(this.angle);
    
    
    
    pop();
    
  }
  animate() {
    this.index += 0.25;
  }
  move(){
    this.acceleration.set(0, 0);
    this.walkani = 0;
    this.swing = 0;
    if(keyArray[32] === 1) {
      this.swing = 1;
    }
    if(keyArray[UP_ARROW] === 1){
      if(this.jump == 0 && this.velocity.y == 0){
        this.walkani = 0;
        this.jump = 2;
      }
      
      
    }
    if(keyArray[LEFT_ARROW] === 1 && this.position.x > 40 ){
      
      this.walkani = 1;
      this.position.x -= 5;
      //this.angle = PI;
    }
    if(keyArray[RIGHT_ARROW] === 1 && this.position.x < 3880){
      this.walkani = 1;
      this.position.x += 5;
      //this.angle = 0;

    }
    if(this.jump === 2){
      this.walkani = 0;
      this.applyForce(jumpForce);
      this.jump = 1;
    }
    this.applyForce(gravity);
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.set(0, 0);
    if (this.position.y >= 3519.99) {
      this.position.y = 3520;
      this.velocity.y = 0;
      this.jump = 0;
    }
    /*if(this.jump != 0){
      this.index += .25;
      this.index += .25;
    }*/
  }
}

//class for game logo
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
    text("Aman Mathur",50,100);
    text("Santosh Krishnan",235,100);
    
    //noStroke();
    noFill();
  }
}

//class for runes on game logo
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

//class for basic skeleton enemy type
class skelBlood{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  draw(){
    fill(255, 0, 0);
    circle(this.x, this.y, 5);
    noFill();
  }
}
class Skeleton{
  constructor(x, y, scale){
    this.x = x;
    this.y = y;
    this.scale = scale;
    this.len = skelarray.length;
    this.index = 0;
    this.health = 6;
    this.timer = 0;
    this.blood = [];
    this.angle = random(0, PI);
    this.attackTimer = 0;
    //this.ammo = [];
  }
  draw(){
    if(this.health > 0){
      let index = floor(this.index) % this.len;
      image(skelarray[index],this.x,this.y,this.scale,this.scale);
    }
    else{
      if(this.timer < 500){
        let index = floor(this.index) % this.len;
        image(skelarray[index],this.x,this.y,this.scale,this.scale);
        this.deathAnimation();
        for(var i = 0; i < this.blood.length; i++){
          this.blood[i].draw();
          this.blood[i].y++;
          this.timer++;
        }
      }
      else{
        if(this.timer < 5000){
          this.deathAnimation();
          for(var i = 0; i < this.blood.length; i++){
            this.blood[i].draw();
            this.blood[i].y++;
            this.timer++;
          }
        }
      }
    }
    
  }
  attackedAnimation(){
    
    if(this.attackTimer < 1000){
      this.attackTimer++;
      this.angle -= PI/180;
      strokeWeight(5);
      stroke(255, 0, 0);
      arc(this.x + 10, this.y + 5, 15, 15, this.angle, this.angle + PI/2);
      strokeWeight(1);
      noStroke();
      //print("attacked")
    }
    this.angle = random(0, PI);
    this.attackTimer = 0;
  }
  deathAnimation(){
    this.blood.push(new skelBlood(random(this.x, this.x + 20), random(this.y + 20, this.y + 40)));
  }
  animate() {
    this.index += 0.25;
  }
}

//class for final boss Zeus
class Zeus{
  constructor(x, y, scale){
    this.x = x;
    this.y = y;
    this.scale = scale;
    this.dir = 0.5;
   
    this.len = zeusarray.length;
    this.index = 0;
  }
  draw(){
    let index = floor(this.index) % this.len;
    image(zeusarray[index],this.x,this.y,this.scale,this.scale);
    //image(this.img,this.x,this.y,this.scale,this.scale);
    
  }
  animate() {
    //this.index += 0.25;
    this.y += this.dir;
    if(this.y > 210) {
      this.dir = -0.5;
    }
    else if(this.y < 170) {
      this.dir = 0.5;
    }
  }
}

//class for the intro screen, complete with background and ground textures, and player and enemy animations
class IntroScreen{
  constructor(){
    this.omega = new Omega(200, 100);
    this.kratos = new Kratos(100, 230, 80);
    this.bg = new bgsky(0,0,400,300);
    this.grass = [new Platform(200,300),new Platform(160,300),new Platform(120,300),new Platform(80,300),new Platform(40,300),new Platform(0,300),new Platform(200,300),new Platform(240,300),new Platform(280,300),new Platform(320,300),new Platform(360,300)];
    this.rocks = [new Wall(200,335,"w"),new Wall(160,335,"w"),new Wall(120,335,"w"),new Wall(80,335,"w"),new Wall(40,335,"w"),new Wall(0,335,"w"),new Wall(200,335,"w"),new Wall(240,335,"w"),new Wall(280,335,"w"),new Wall(320,335,"w"),new Wall(360,335,"w"),new Wall(200,375,"w"),new Wall(160,375,"w"),new Wall(120,375,"w"),new Wall(80,375,"w"),new Wall(40,375,"w"),new Wall(0,375,"w"),new Wall(200,375,"w"),new Wall(240,375,"w"),new Wall(280,375,"w"),new Wall(320,375,"w"),new Wall(360,375,"w")];
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
    textFont(myFont);
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
    this.kratos.animate();
    this.skeleton.draw();
    this.skeleton.animate();
    stroke(255);
    rect(150, 350, 100, 50);
    textFont(myFont);
    textSize(15);
    //text("Aman Mathur",50,100);
    //text("Santosh Krishnan",235,100);
    text("Play Game", 160, 380);
    noStroke();
    noStroke();
    noFill();
  }
  animate(){
    this.kratos.position.x += this.animateKratos;
    if(this.kratos.position.x > 300 || this.kratos.position.x < 0){
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
    if(this.kratos.position.x > -150){
      this.kratos.position.x += -5;
      this.skeleton.x += -5;
    }
    else{
      introS = false;
      this.kratos.position.x = 100;
      this.skeleton.x = 200;
    }
  }
}

//class for instructions screen
class InstructionScreen{
  constructor(){
    this.kratos = new Kratos(100, 230, 80);
    this.zeus = new Zeus(240,180,80);
    this.bg = new redsky(0,0,400,300);
    this.grass = [new Platform(200,300,40,40),new Platform(160,300,40,40),new Platform(120,300,40,40),new Platform(80,300,40,40),new Platform(40,300,40,40),new Platform(0,300,40,40),new Platform(200,300,40,40),new Platform(240,300,40,40),new Platform(280,300,40,40),new Platform(320,300,40,40),new Platform(360,300,40,40)];
    this.rocks = [new Wall(200,335,"w"),new Wall(160,335,"w"),new Wall(120,335,"w"),new Wall(80,335,"w"),new Wall(40,335,"w"),new Wall(0,335,"w"),new Wall(200,335,"w"),new Wall(240,335,"w"),new Wall(280,335,"w"),new Wall(320,335,"w"),new Wall(360,335,"w"),new Wall(200,375,"w"),new Wall(160,375,"w"),new Wall(120,375,"w"),new Wall(80,375,"w"),new Wall(40,375,"w"),new Wall(0,375,"w"),new Wall(200,375,"w"),new Wall(240,375,"w"),new Wall(280,375,"w"),new Wall(320,375,"w"),new Wall(360,375,"w")];
    this.mtns = [new mountain(100,120,200,200),new mountain(-100,120,200,200),new mountain(300,120,200,200)];
    this.animateKratos = 1;
    this.skeleton = new Skeleton(200, 230, 80);
    this.animateSkeleton = 1;
    this.textX = 100;
    this.textY = 420;
    this.base = true;
    this.characters = false;
    this.instructions = false;
    this.leftTransition = false;
    this.rightTransition = false;
    this.kratosBio = true;
    this.zeusBio = false;
  }
  draw(){
    
    this.bg.draw();

    for(var j = 0; j < this.mtns.length; j++) {
      this.mtns[j].draw();
    }
    
    
    for(var j = 0; j < this.rocks.length; j++) {
      this.rocks[j].draw();
    }
    for(var i = 0; i < this.grass.length; i++) {
      this.grass[i].draw();
    }
    fill(255);
    circle(120, 200, 40);
    circle(140, 200, 40);
    circle(160, 200, 40);
    circle(130, 210, 40);
    circle(150, 210, 40);
    noFill();
    stroke(255, 0, 0);
    textFont(myFont);
    textSize(15);
    text("Kratos", 110, 210);
    noStroke();
    this.kratos.draw();
    this.kratos.animate();
    fill(255);
    circle(260, 150, 40);
    circle(280, 150, 40);
    circle(300, 150, 40);
    circle(270, 160, 40);
    circle(290, 160, 40);
    noFill();
    stroke(0);
    textFont(myFont);
    textSize(15);
    text("Zeus", 260, 160);
    noStroke();
    this.zeus.draw();
    this.zeus.animate();
    //this.skeleton.animate();
    noStroke();
    noFill();
    this.drawInstructs();
  }
  animate(){
    this.kratos.position.x += this.animateKratos;
    if(this.kratos.position.x > 300 || this.kratos.position.x < 0){
      this.animateKratos = -this.animateKratos;
    }
    this.skeleton.x += this.animateSkeleton;
    if(this.skeleton.x > 400 || this.skeleton.x < 100){
      this.animateSkeleton = -this.animateSkeleton;
    }

    
  }
  moveOut(){
    if(this.kratos.position.x > -150){
      this.kratos.position.x += -5;
      this.zeus.x += -5;
    }
    else{
      instructionsS = false;
      //introS = true;
      this.kratos.position.x = 100;
      this.zeus.x = 240;
      
    }
  }
  drawInstructs(){
    if(this.base){
      fill(245,245,220);
      rect(50, 25, 300, 100);
      noFill();
      stroke(0);
      rect(50, 25, 100, 50);
      rect(245, 25, 105, 50);
      rect(112.5, 100, 200, 25);
      textSize(15);
      text("Characters", 50, 25, 175, 50);
      text("Instructions", 245, 25, 300, 50);
      text("Go Back To Start", 140, 120);
      noStroke();
      if((mouseIsPressed) && mouseX > 50 && mouseX < 150 && mouseY > 25 && mouseY < 75 && this.base){
        this.base = false;
        this.characters = true;
        this.instructions = false;
        
      }
      if((mouseIsPressed) && mouseX > 245 && mouseX < 350 && mouseY > 25 && mouseY < 75 && this.base){
        this.base = false;
        this.instructions = true;
        this.characters = false;
        
      }
    }
    
    if(this.instructions){
      fill(245,245,220);
      rect(50, 25, 300, 100);
      stroke(0);
      textSize(15);
      textFont(myFont);
      rect(50, 25, 50, 40);
      text("Go Back", 50, 25, 50, 50);
      noStroke();
      noFill();
      stroke(255, 0, 0);
      text("Instructions", 160, 50);
      textFont('Helvetica');
      textSize(7.5);
      text("Use the Arrow Keys to move Kratos throughout the world, and use the spacebar to attack enemies.  If Kratos attacks enough enemies, shift can engage a special attack.", 160, 60, 100, 50);
      noStroke();
      if((mouseIsPressed) && mouseX > 50 && mouseX < 100 && mouseY > 25 && mouseY < 75 && this.instructions){
        this.base = true;
        this.instructions = false;
        this.characters = false;
        
      }
    }
    else if(this.characters){
      //Kratos Character Card
      if(this.kratosBio){
        fill(245,245,220);
        rect(50, 25, 300, 100);
        stroke(0);
        textSize(15);
        textFont(myFont);
        text("Kratos", 100, 50);
        rect(50, 85, 50, 40);
        text("Go Back", 50, 85, 50, 50);
        rect(315, 100, 35, 25);
        textSize(12.5);
        text("Next", 315, 100, 35, 50);
        noStroke();
        noFill();
        var krat = new Kratos(95, 50, 60);
        krat.draw();
        stroke(255, 0, 0);
        textFont('Helvetica');
        textSize(7.5);
        text("Kratos:  The savage God of War who experienced multiple, bloody, lives for years on end, travels across time chasing his father Zeus to get revenge for causing daddy issues.  However, Kratos gets thrown across time in his battles with Zeus as he chases him to end Zeus's torture once and for all.", 170, 40, 150, 150);
        noStroke();
        if((mouseIsPressed) && mouseX > 50 && mouseX < 100 && mouseY > 85 && mouseY < 125){
          this.base = true;
          this.instructions = false;
          this.characters = false;
          
        }
        if((mouseIsPressed) && mouseX > 315 && mouseX < 350 && mouseY > 100 && mouseY < 125 && this.kratosBio){
          this.kratosBio = false;
          this.zeusBio = true;
          
        }
      
      }
      else if(this.zeusBio){
        //Zeus Character Card
        fill(245,245,220);
        rect(50, 25, 300, 100);
        stroke(0);
        textFont(myFont);
        textSize(15);
        text("Zeus", 100, 50);
        rect(50, 25, 50, 40);
        text("Go Back", 50, 25, 50, 50);
        rect(50, 100, 35, 25);
        textSize(12.5);
        text("Back", 50, 100, 35, 50);
        noStroke();
        noFill();
        var z = new Zeus(95, 50, 60);
        z.draw();
        stroke(255, 0, 0);
        textFont('Helvetica');
        textSize(7.5);
        text("Zeus: The King of the Gods, and the God of Lightning, and a terrible father, Zeus abandonded Kratos as a child and left him for dead, prompting Kratos's thirst for his blood.  To end Kratos reign of Chaos over the world, Zeus confronts him and battles him across time with his legion of undead warriors, hoping to end his son's quest for recognition and love once and for all.", 170, 40, 150, 150);
        noStroke();
        if((mouseIsPressed) && mouseX > 50 && mouseX < 100 && mouseY > 25 && mouseY < 75){
          this.base = true;
          this.instructions = false;
          this.characters = false;
          
        }
        if((mouseIsPressed) && mouseX > 50 && mouseX < 85 && mouseY > 100 && mouseY < 150){
          this.kratosBio = true;
          this.zeusBio = false;
          
        }
      }
    }
  }
}

//class for the sky background utilizing an image from a free image set
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

//class for red sky background, based upon the image used in the bgsky class
class redsky{
  constructor(x, y, scale, scale1){
    this.x = x;
    this.y = y;
    this.scale = scale;
    this.scale1 = scale1;
    
    this.img = loadImage("grassland_tileset/grassland_tileset/PNG/bg4_red.png");
    
  }
  draw(){
    image(this.img, this.x, this.y, this.scale, this.scale1);
  }
}

//class for mountains in the background
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

//class for rock wall textures
class Wall{
  constructor(x, y,walltype){
    this.x = x;
    this.y = y;
    this.type = walltype;
    //this.wall = loadImage("grassland_tileset/grassland_tileset/PNG/terrain_center.png");
    //this.rock = loadImage("grassland_tileset/grassland_tileset/PNG/midground_center.png");
  }
  draw(){

    if(this.type === "w")
    {
      image(images[0], this.x, this.y, 40, 40);
    }

    if(this.type === "r")
    {
      image(images[1], this.x, this.y, 40, 40);
    }
    
  }
}

//class for grass platform textures
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

//base game class foundation
class Game{
  constructor(walls, grass, kratos, enemies){
    this.wallsArray = walls;
    this.grassArray = grass;
    this.kratos = kratos;
    this.enemies = enemies;
    this.correctionX = 0;
    this.correctionY = 0;
    
  }
  drawBackground(){
    for(var i = 0; i < walls.length; i++){

      walls[i].draw();
    }
    for(var j = 0; j < grass.length; j++){
      grass[j].draw();
    }
    for(var k = 0; k < this.enemies.length; k++){
      this.enemies[k].draw();
      this.enemies[k].animate();
      //print(this.enemies[k].health);
    }
    
  }
  platformCollision(){
    for(var i = 0; i < this.grassArray.length; i++){
      if(dist(this.kratos.position.x, this.kratos.position.y, this.grassArray[i].x, this.grassArray[i].y) < 40){
        if(this.kratos.position.y < this.grassArray[i].y && this.kratos.velocity.y > 0){
          this.kratos.position.y = this.grassArray[i].y - 40 + 5;
          this.kratos.jump = 0;
          this.kratos.velocity.set(0, 0);
        }
      }
    }

    for(var i = 0; i < this.wallsArray.length; i++) {
      if(dist(this.kratos.position.x, this.kratos.position.y, this.wallsArray[i].x, this.wallsArray[i].y) < 40){

        if(this.kratos.position.x < this.wallsArray[i].x) {
         
          this.kratos.position.x -= 5;
          //this.kratos.velocity.set(0, 0);
          this.kratos.velocity.x = -this.kratos.velocity.x;
        }

        if(this.kratos.position.x > this.wallsArray[i].x) {
          
          this.kratos.position.x += 5;
          //this.kratos.velocity.set(0, 0);
          this.kratos.velocity.x = -this.kratos.velocity.x;
        }

        if(this.kratos.position.y < this.wallsArray[i].y && this.kratos.velocity.y > 0) {
          
          this.kratos.position.y = this.wallsArray[i].y - 40 + 5;
          this.kratos.jump = 0;
          this.kratos.velocity.set(0, 0);
        }

        if(this.kratos.position.y > this.wallsArray[i].y) {
          
          this.kratos.position.y += 5; 
          this.kratos.velocity.y = -this.kratos.velocity.y;
        }
      }
    }
  }
  combat(){
    for(var i = 0; i < this.enemies.length; i++){
      if(dist(this.kratos.position.x, this.kratos.position.y, this.enemies[i].x, this.enemies[i].y) < 40 && this.kratos.swing === 1){
        if(this.kratos.timer % 100 === 0){
          this.enemies[i].health--;
        }
        this.enemies[i].attackedAnimation();
      }
    }
  }
  play(){
    this.drawBackground();
    this.kratos.draw();
    this.kratos.animate();
    this.kratos.move();
    this.platformCollision();
    this.combat();
  }
}

//checks for key pressed and released
function keyPressed() {
  keyArray[keyCode] = 1;
}
function keyReleased() {
  keyArray[keyCode] = 0;
}

let myFont;
let song;
let kratossp0;
let kratossp1;
let kratosspwalk;
let kratosarray;
let kratoswalking;
let kratosattack;
let skelarray;
let zeussp;
let zeusarray;
let rock;
let wall;
//preloads fonts, music, and images to improve performance
function preload(){
  myFont = loadFont('Godofwar-wPz6.ttf');
  song = loadSound('makai-symphony-dragon-slayer.mp3');
  kratossp0 = loadImage("kratossprite.png");
  kratosspwalk = loadImage("kratossprite_walk.png");
  kratossp1 = loadImage("kratossprite_shift.png");
  sksp0 = loadImage("skeleton.png");
  sksp1 = loadImage("skeleton_shift.png");
  zeussp = loadImage('zeussprite.png');
  kratosspattk = loadImage("kratossprite_attack1.png")
  wall = loadImage("grassland_tileset/grassland_tileset/PNG/terrain_center.png");
  rock = loadImage("grassland_tileset/grassland_tileset/PNG/midground_center.png");
  images.push(wall);
  images.push(rock);
  kratosarray = [kratossp0,kratossp0,kratossp1,kratossp1];
  kratoswalking = [kratossp0,kratossp0,kratosspwalk,kratosspwalk];
  kratosattack = [kratossp0,kratossp0,kratosspattk,kratosspattk];
  skelarray = [sksp0,sksp0,sksp1,sksp1];
  zeusarray = [zeussp,zeussp];
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
        grass.push(new Platform(j * 40, i * 40));
      }
      else if(tilemap[i][j] == "e"){
        enemies.push(new Skeleton(j * 40, i * 40, 40));
      }
    }
  }
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
  jumpForce = new p5.Vector(0, -5);
  gravity = new p5.Vector(0, 0.1);
  // song.loop();
  kratos = new Kratos(120, 3520, 40);
  zeus = new Zeus(210,160,40);
  intro = new IntroScreen();
  instr = new InstructionScreen();
  game = new Game(walls, grass, kratos, enemies);
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
  else if(gameScreen){
    push();
    translate(200 - kratos.position.x, 200-kratos.position.y);
    game.play();
    //wall.draw();
    pop();
  }
}