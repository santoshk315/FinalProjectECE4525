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

/*
Initialize Tile Map Design
r - rocks
p - platforms
e - enemies
k - keys
h - health potions
*/


var tilemap = [
  "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw",
  "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw",
  "r                rrrrrrrrrr                rrr                                                    w",
  "r                rrrrrrrrrr                rrr                                                    w",
  "r              rrrrrrrrrrrr                 rr                                                    w",
  "r              rrrrrrrrrrrr                 rr                                                    w",
  "r             prrrrrrrrrrrr                  r                                                    w",
  "r              rrrrrrrrrrrr                  r                                                    w",
  "r            prrrrrrrrrrrr                   r          ee e e e e e e e e e                      w",
  "r             rrrrrrrrrrrr                   r                                                    w",
  "r            prrrrrrrrr                      r                                                    w",
  "r             rrrrrrrr                       r                                                    w",
  "rp            rrrrrrrr                       r                                                    w",
  "r            prrrrr                          r                                                    w",
  "r            rrr                             r                                                    w",
  "r            rr                              r                                                    w",
  "r                                            r                                                    w",
  "r hhhhhhhhhhhhhhh                                                                                 w",
  "rppppppppppppppppppppppp                          ppppppppppppppppppppppppppppppppppppppppppppppppw",
  "rrrrrrrrrrrrrrrrrrrrrrrrpp               k    pppprrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw",
  "rrrrrrrrrrrrrrrrr                       pppppprrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw",
  "rrrrrrrr                         ppppppprrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw",
  "r                           ppppprrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw",
  "r                          prrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw",
  "r                         prrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw",
  "r          k             prrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw",
  "r    pppppppppppppppppppprrrrrrrrrrrrrrrr                                                         w",
  "r    r                                  r                                                         w",
  "rp  p          e                        r                                                         w",
  "r                                       r                                                         w",
  "rp    ppppp                             r                                                         w",
  "rr     rrrrpppppp                       r                                                         w",
  "rr r   rrrrrrrrrrp            e                                                                   w",
  "rrrrrrrrrrrrrrrrrrpppppppppppppppppppppppppppppppppppppppppppppppppppppppp                        w",
  "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr                                           r                   w",
  "rrrrrrrrrrrrrrrrrrrrrr                                                                            w",
  "rrrrrrrrr                                                   ppppppppppppppppppppppppppppppppppppppw",
  "rrrrr                                                ppppppprrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw",
  "r                                               pppppprrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw",
  "r                                         pppppprrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw",
  "r                            e   ppppppppprrrrrrrrrrrrrrrrrrrr                                    w",
  "r                        pppppppprrrrrrrrrrrrrrrr                                                 w",
  "r                 ppppppprrrrrrrrrrrrrrrr                                                         w",
  "r            ppppprrrrrrrrrrrrrrrrrrr                                                             w",
  "r                                                                                                 w",
  "r    ppp                                                                                          w",
  "r     r                                                                                           w",
  "rp                                                                                                w",
  "rr                                                                                                w",
  "rpppppppp                                                                                         w",
  "rrrrrrrrrpppppp     k                                                                             w",
  "rrrrrrrrrrrrrrrppppppppp                                                                          w",
  "rrrrrrrrrrrrrrrrrrrrrrrrppp      e                                                                w",
  "r      rrrrrrrrrrrrrrrrrrrrpppppppppppp                                                           w",
  "r             rrrrrrrrrrrrrrrrrrrrrrrrrppppppppppppppppp   k                                      w",
  "r                                 rrrrrrrrrrrrrrrrrrrrrrppppppplppppppp                           w",
  "r                                                                                                 w",
  "r                                                                                                 w",
  "r                                                                                                 w",
  "r                                                              l                                  w",
  "r                                                              l                                  w",
  "r              k                        k                      l                                  w",
  "rpppppppppppppppppppppppppppppppppppppppppppplpppppppppppppppppppppppppppppppppppppppp            w",
  "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrlrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrpp           w",
  "rrrrrrrrrrrrrrrrrrrr         wrrrrr          l       rrrrrw                                 ppppppw",
  "rrrrrrrrrrrrr                wrrr            l         rrrw                           pppppprrrrrrw",
  "rrrrrr                       wrr             l          rrw                         prrrrrrrrrrrrrw",
  "rrrr                         wr              l           rw                         rrrrrrrrrrrrrrw",
  "rr                           w               l            w                      ppprrrrrrrrrrrrrrw",
  "r                            w               l            w     ppppppppppppppppprrrrrrrrrrrrrrrrrw",
  "r                                    k       l    h      r     prrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw",
  "r                       bbbbbbppppppppppppppppppppppppppp    prrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw",
  "r     h              pppp                                        rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw",
  "r  ppppppp           rrrr                                                     rrrrrrrrrrrrrrrrrrrrw",
  "rpprrrrrrrpppppppp                                                                        rrrrrrrrw",
  "rrrrrrrrrrrrrrrrrrppppppp                                                                 rrrrrrrrw",
  "rrrrrrrrrrrrrrrrrrrrrrrrrppppp          e                e                                rrrrrrrrw",
  "rrrrrrrrrrrrrrrrrrrrrrrrrrrr       ppppppppp         pppppppp                                rrrrrw",
  "rrrrrrrrrrrrrrrrrrrrrrrr            rrrrrrr              rrr                             pppprrrrrw",
  "rrrrrrrrrrrrr                        rrrrr                r                             prrrrrrrrrw",
  "rrrrrrrr                               r                           pppp                prrrrrrrrrrw",
  "rrrrr                                                      p        rr             pppprrrrrrrrrrrw",
  "rrr                                                     pppppp                     r              w",
  "r                                                        rrrr                      r              w",
  "r                             k     e                     rr                       r              w",
  "r                    pppppppppppplpppppppppppppppppp                              p               w",
  "r                   prrrrrrrrrrrrlrrrrrrrrrrrrrrrrrrp               rr            r               w",
  "r                  prrrrrrrrrrrrrlrrrrrrrrrrrrrrrrrrrp             rrrr           r               w",
  "r                 prrrrrrrr      l          rrrrrrrrrrp          pprrrrr                       h  w",
  "r                prrrrr          l              rrrrrrrp       pprrrrrrrrr              p      pppw",
  "r       r       p                l                rrrrrrp      rrrrrrrrrrrr      r     pr     prrrw",
  "r      rr  k   p                 l     h            rrrrrp    prrrrrrrrrrrrr  h  r    prr  r  rrrrw",
  "rpppppprrpppppprrrrrrrrrrrrrrrrrprprrrrrrrrrrrrrrrrrrrrrrrpppprrrrrrrrrrrrrrppppprpppprrrpprpprrrrw",
  "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrppprrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw",
  "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw",
  "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw"

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
    this.dir = 0;
    this.jump = 0;
    this.angle = 0;
    this.scalar = 1;
    this.walkani = 0;
    this.swing = 0;
    this.health = 6;
    this.timer = 0;
    this.climb = 0;
    this.health = 6;
    this.attackRect = [32,0,20,40]
    //this.img = loadImage("kratossprite.png");
  }
  //function to apply gravity
  applyForce(force){
    this.acceleration.add(force);
  }
  //Draw Kratos, and flip directions based on key presses
  draw(){
    /*image(kratossp0,this.x, this.y, this.scale, this.scale);
    image(kratossp0,this.x, this.y, this.scale, this.scale);
    if(frameCount % 25 === 0) {
      erase();
      image(kratossp1, this.x, this.y, this.scale, this.scale);
      image(kratossp1, this.x, this.y, this.scale, this.scale);
    }*/
    //timer for attack allowances
    this.timer++;
    push();
    translate(this.position.x, this.position.y);
    let index = floor(this.index) % this.len;
    stroke(255,0,0);
    
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
    //When to draw the walking and swing animations
    //Make sure this animation is happening in the game screen and not the
    //intro screen
    if(this.walkani === 0 && !introS){
      if(this.swing === 1) {
        if(this.dir === -1) {
          image(kratosattack_rev[index], 0, 0,this.scale,this.scale);
          image(slasharray_rev[index], 0-25, 0,this.scale,this.scale);
        }
        else {
          image(kratosattack[index], 0, 0,this.scale,this.scale);
          //rect(32,0,20,40);
          if(!instructionsS) {
            image(slasharray[index], 0+25, 0,this.scale,this.scale);
          }
          

          if(instructionsS) {
            image(slasharray[index], 0+50, 0,this.scale,this.scale);
          }
        }
      }
      if(this.swing === 0) {
        if(this.dir === -1) {
          image(kratosarray_rev[index], 0, 0,this.scale,this.scale);
        }
        else {
          image(kratosarray[index], 0, 0,this.scale,this.scale);
        }
      }
    }

    if(this.walkani === 1 || introS){
      if(this.swing === 1) {
        if(this.dir === -1) {
          image(kratosattack_rev[index], 0, 0,this.scale,this.scale);
          image(slasharray_rev[index], 0-25, 0,this.scale,this.scale);
        }
        else {
          image(kratosattack[index], 0, 0,this.scale,this.scale);
          //rect(32,0,20,40);
          image(slasharray[index], 0+25, 0,this.scale,this.scale);
        }
      }
      if(this.swing === 0) {
        if(this.dir === -1) {
          image(kratoswalking_rev[index], 0, 0,this.scale,this.scale);
        }
        else {
          image(kratoswalking[index], 0, 0,this.scale,this.scale);
        }
        
      }
    }
    

    //rotate(this.angle);
    
    
    
    pop();
    
  }
  //Add bobbing animations when holding still to show constant action
  animate() {
    this.index += 0.25;
  }
  //Check if player is properly aligned with ladder
  ladderCol(){
    var c = 0;
    for(var i = 0; i < ladders.length; i++){
      if(this.position.x === ladders[i].x && this.position.y > ladders[i].y - 40 && this.position.y < ladders[i].y + 40){
        c = 1;
        //print(c);
      }
      
    }
    return c;
  }
  //set movements for characters
  //Define when to attack, move left and right, and jump
  //Movement also includes gravity for the player
  move(){
    this.acceleration.set(0, 0);
    this.walkani = 0;
    this.swing = 0;
    if(keyArray[32] === 1) {
      this.swing = 1;
    }
    if(this.ladderCol() === 1){
      this.climb = 1;
    }
    else{
      this.climb = 0;
    }
    //Define up arrow movement
    if(keyArray[UP_ARROW] === 1){
      if(this.ladderCol() === 1){
        //print(this.position.y);
        this.position.y -= 5;
        this.jump = 0;
        //print(this.position.y);
        //this.jump = 0;
        this.velocity.set(0, 0);
      }
      else if(this.jump == 0 && this.velocity.y == 0){
        this.walkani = 0;
        this.jump = 2;
      }
      
      
    }
    //Define down arrow movement
    if(keyArray[DOWN_ARROW] === 1 && this.ladderCol() === 1){
      this.position.y += 5;
      //this.jump = 0;
      //this.velocity.set(0, 0);
    }
    //Define left movement and animations that need to be triggered
    if(keyArray[LEFT_ARROW] === 1 && this.position.x > 40){
      this.dir = -1;
      this.walkani = 1;
      this.position.x -= 5;
      //this.angle = PI;
    }
    //Define right movement and animations that need to be triggered
    if(keyArray[RIGHT_ARROW] === 1 && this.position.x < 3880){
      this.walkani = 1;
      this.dir = 1;
      this.position.x += 5;
      //this.angle = 0;

    }
    //Triggers for jumping movement with gravity
    if(this.jump === 2){
      this.walkani = 0;
      this.applyForce(jumpForce);
      this.jump = 1;
    }
    //What to do if on the ladder(don't apply gravity)
    if(this.climb === 0){
      this.applyForce(gravity);
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.acceleration.set(0, 0);
    }
    //Don't keep falling, stop at bottom of map
    if (this.position.y >= 3819.99) {
      this.position.y = 3820;
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
  //Draw omega logo
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
  //Draw rune 1
  draw_rune1(){
    line(this.x, this.y, this.x, this.y + 5);
    line(this.x + 5, this.y, this.x + 5, this.y + 5);
    line(this.x, this.y + 3, this.x + 5, this.y + 1.5);
  }
  //Draw rune 2
  draw_rune2(){
    line(this.x, this.y, this.x + 5, this.y + 5);
    line(this.x + 5, this.y + 5, this.x + 5, this.y);
    line(this.x + 5, this.y, this.x, this.y + 5);
  }
  //Draw rune 3
  draw_rune3(){
    line(this.x, this.y, this.x, this.y + 5);
    line(this.x, this.y + 3.5, this.x + 2.5, this.y);
    line(this.x, this.y + 3.5, this.x - 2.5, this.y);
  }
  //Draw rune 4
  draw_rune4(){
    arc(this.x, this.y, 5, 5, PI, 2 * PI);
    fill(0);
    circle(this.x, this.y, 1);
    noFill();
  }
}
//class for enemy firing state
// class enemyFire {
//   constructor() {
//     this.currFrameCount = 0;
//     this.enemyBullets = [new enemybulletObj(), new enemybulletObj()];
//     this.angle = 0;
//     this.angleDir = 0;
//     this.vec = new p5.Vector(0,0);
//   }

//   execute(me) {
//     me.position.x += 0;
//     me.position.y += 0;
//     for(var i = 0; i < bullet.length; i++) {
//       if(bullet[i].fire != 0 && dist(me.position.x,me.position.y,bullet[i].position.x,bullet[i].position.y) < 30) {
//         me.changeState(0);
//       }
//     }
//     //if the enemy tank is not dead and player is close enough, shoot missles at the player
//     if(me.dead === 0) {
//       this.vec.set(player.position.x - me.position.x, player.position.y - me.position.y);
//       this.angle = this.vec.heading();
//       var angleDiff = abs(this.angle - me.angle);
//       if (angleDiff > twoDegrees) {
//         me.changeState(1);
//       }
//       if (this.currFrameCount < (frameCount - 70)) {
//         this.currFrameCount = frameCount;
//         this.enemyBullets[index].fire = 1;

//         this.enemyBullets[index].position.x = me.position.x;
//         this.enemyBullets[index].position.y = me.position.y;
//         this.enemyBullets[index].angle = me.angle+PI/2;
//         index++;
//         if (index > 1) {
//             index = 0;
//         }
//      }

//      for(var i = 0; i < this.enemyBullets.length; i++) {
//       this.enemyBullets[i].draw();
       
//      }
//       for(var i = 0; i < bullet.length; i++) {
//           //checks for collisions with enemy bullets
//         if ((me.dead === 0) && (dist(me.position.x,me.position.y,bullet[i].position.x,bullet[i].position.y) < 15)) {
//           me.dead = 1;
//           score++;
//           bullet[i].fire = 0;
//         }

//         }
//         if(me.dead === 1) {
//           me.changeState(4);
//         }
//       }
//       else {
//         me.changeState(0);
//       }
//     }      
// }
//class for enemy fireballs
class enemybulletObj {
  constructor() {
    this.position = new p5.Vector(0,0);
    this.fire = 0;
    this.step = new p5.Vector(0,-1);
    this.angle = 0;
  }
  //draw the bullet in top left corner to be screen grabbed
  draw() {
    //push();
    //translate(sin(this.angle)-10,cos(this.angle)-10);
    noStroke();
    fill(244,66,54);
    rect(this.position.x+1,this.position.y+1,1,1);
    rect(this.position.x+2,this.position.y+2,1,1);
    rect(this.position.x+3,this.position.y+3,1,1);
    rect(this.position.x+4,this.position.y+2,7,7);
    rect(this.position.x+5,this.position.y+1,5,9);
    rect(this.position.x+1,this.position.y+6,1,1);
    rect(this.position.x+2,this.position.y+7,1,1);
    rect(this.position.x+1,this.position.y+8,1,1);
    rect(this.position.x+3,this.position.y+7,2,2);

    fill(255,153,0);
    rect(this.position.x+6,this.position.y+2,1,7);
    rect(this.position.x+6,this.position.y+3,3,5);
    rect(this.position.x+9,this.position.y+4,1,3);
    rect(this.position.x+5,this.position.y+4,1,1);
    rect(this.position.x+5,this.position.y+7,1,1);

    fill(255);
    rect(this.position.x+7,this.position.y+4,1,1);
    rect(this.position.x+8,this.position.y+5,1,1);
    rect(this.position.x+7,this.y+6,1,1);
    //pop();
  }
}
//bullet object fired by the skeleton enemies
class fireBullet{
  constructor(){
    this.position = new p5.Vector(0, 0);
    this.image = images[images.length - 1];
    this.fire = 1;
    this.angle = 0;
    this.vec = new p5.Vector(0,-1);
  }
  //Start drawing at center of the skeleton
  draw(){
    
    image(this.image, this.position.x - 20, this.position.y - 20, 40, 40);
    //fill(0);
    //circle(this.position.x, this.position.y, 20);
  }
  //Move with respect to angle set in chase state
  move() {
    this.position.x += 2 * sin(this.angle + PI / 2);
    this.position.y -= 2 * cos(this.angle + PI / 2);

    
    //When it should disappear/not effect character
    if(dist(this.position.x,this.position.y,kratos.position.x,kratos.position.y) < 35) {
      this.fire = 0;
      kratos.health -= 0.5;
      //print('noooo')
    }
    //When it should disappear/not effect character
    for(var i = 0; i < walls.length; i++) {
      if(dist(this.position.x,this.position.y,walls[i].x,walls[i].y) < 40) {
        //print('wall')
        this.fire = 0;
      }
    }
    // if (this.position.y < 0 || this.position.y > 400 || this.position.x > 400 || this.position.x < 0) {
    //   this.fire = 0;
    // }


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

//class for enemy wandering state
class skeleWander {
  constructor() {
    this.xDir = 1;
    this.yDir = 1;
  }

  execute(me) {
    //check if distance is greater than 350 pixels
    if(dist(targetX,targetY,me.x,me.y) >= 350){
      //print('wandering')
      //Move in the set random directions
      me.y += this.yDir;
      me.x += this.xDir;
      //Make sure skeleton is facing direction of movement
      if(this.xDir > 0){
        me.direction = 0;
      }
      else{
        me.direction = 1;
      }
      //Every 2 seconds, set random x and y direction
      if(frameCount % 120 === 0) {
        skelyDir = random([-1,1]);
        skelxDir = random([-1,1]);
        this.yDir = skelyDir;
        this.xDir = skelxDir;
      }
    }
    else{
      //change to chase if condition not satisfied
      me.changeState(1);
    }
  }
}

//class for enemy hurt state
//Enter here when attacked in the chase state
class skeleHurt {
  constructor() {
    this.timer = 0;
  }

  execute(me) {
    //Set a timer and have the skeleton float back for set time
    this.timer++;
    //print('here')
    //Adjust position in direction of knockback set when attack happens
    me.x += me.knockback * 2;
    me.y -= 2;
    // print("timer: ")
    // print(this.timer)
    // print("////")
    if(this.timer === 30) {
      //Move back for half second before returning to chase state
      me.hurt = 0;
      this.timer = 0;
      me.changeState(1);
    }
  }
}
//Chase state for the skeleton based on how far it is from kratos
class skeleChase {
  constructor() {
    this.xDir = 1 ;
    this.bullets = [new fireBullet(), new fireBullet(), new fireBullet(), new fireBullet()];
    this.vec = new p5.Vector(0, 0);
    this.angle = 0;
    this.angleDir = 0;
    this.val = 0;
    this.index = 0;
  }

  execute(me) {
    //Make sure Kratos is within range
    if(dist(targetX,targetY,me.x,me.y) < 350) {
      //print('chasing')
      //Set up vector to help skeleton move in that direction to kratos
      me.step.set(targetX - me.x, targetY - me.y);
      //Normalize so it only moves 1 unit at a time
      me.step.normalize();
      //Calculate angle of movement, used in firing
      me.angle = me.step.heading() + PI/2;
      //Set direction skeleton is facing when it is chasing kratos
      if(abs(me.step.heading()) > 1.5 && abs(me.step.heading()) < 3.0){
        me.direction = 0;
      }
      else{
        me.direction = 1;
      }
      //print(me.y);
      //Adjust position based on this vector calculation
      me.x += me.step.x;
      me.y += me.step.y;
      //If skeleton is alive
      if(me.health > 0){
        
        //if(dist(me.x, me.y, kratos.position.x, kratos.position.y) < 120){
          //Fire a bullet from the array of bullets available in this state
          if(this.val < frameCount - 100){
            
            this.val = frameCount;
            this.bullets[this.index].fire = 1;
            this.bullets[this.index].position.x = me.x + 20;
            this.bullets[this.index].position.y = me.y + 20;
            this.bullets[this.index].angle = me.angle - PI/2;
            firedWebs.push(this.bullets[this.index]);
            this.index++;
            if(this.index > 3){
              this.index = 0;
            }
          //}
          
          
        }
        for(var i = 0; i < 3; i++){
          if(this.bullets[i].fire === 1){
            this.bullets[i].draw();
            this.bullets[i].move();
          }
        }
        //If bullets are too far from skeleton, they disappear
        for(var i = 0; i < this.bullets.length; i++) {
          if(dist(this.bullets[i].position.x,this.bullets[i].position.y,me.x,me.y) > 1200) {
            this.bullets[i].fire = 0;
          }
        }
        //Switch to hurt state
        if(me.hurt === 1) {
          me.changeState(2);
        }
      }
    }
    else{
      //Otherwise move back to wander state
      me.changeState(0);
    }
  }
}

//Base NPC skeleton enemy class
//Set up all flags and values for skeleton in character interactions
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
    this.angle = 0;
    this.attackTimer = 0;
    this.step = new p5.Vector(0,-1);
    this.state = [new skeleWander(), new skeleChase(),new skeleHurt()];
    this.currState = 0;
    this.ammo = [];
    this.direction = 0;
    this.hurt = 0;
    this.knockback = 0;
  }
  //change state in state classes
  changeState(x) {
    this.currState = x;
  }
  //Draw skeelton based on whether it is hurt and based on what direction it is moving/facing kratos
  draw(){
    //print(this.health)
    if(this.health > 0 && this.direction === 0){
      let index = floor(this.index) % this.len;
      if(this.hurt === 0) {
        image(skelarray[index],this.x,this.y,this.scale,this.scale);
      }
      else if(this.hurt === 1) {
        image(skelarrayhurt[index],this.x,this.y,this.scale,this.scale);
      }
      
    }
    else if(this.health > 0 && this.direction === 1){
      let index = floor(this.index) % this.len;
      if(this.hurt === 0) {
        image(skelarray_rev[index],this.x,this.y,this.scale,this.scale);
      }
      else if(this.hurt === 1) {
        image(skelarrayhurt_rev[index],this.x,this.y,this.scale,this.scale);
      }
    }
    else{
      //Death animation with particle systems
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
        //Cut off death animation after certain amount of time
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
  //Old attack animation to show hits, not used anymore
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
  //Spray particle system representing blood in waterfall type motion
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
  //Draw Zeus character
  draw(){
    let index = floor(this.index) % this.len;
    image(zeusarray[index],this.x,this.y,this.scale,this.scale);
    //image(this.img,this.x,this.y,this.scale,this.scale);
    
  }
  //Basic Zeus animation
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

//class for lightning
class Lightning{
  constructor(x, y, scale){
    this.x = x;
    this.y = y;
    this.scale = scale;
    this.dir = 0.5;
   
    this.len = lightningarray.length;
    this.index = 0;
  }
  //Draw lightning bolt
  draw(){
    let index = floor(this.index) % this.len;
    image(lightningarray[index],this.x,this.y,this.scale,this.scale);
    
    
  }
  //Animate lightning by switching through array items per frame
  animate() {
    this.index += 0.25;
  }
  ZeusBoltAnimate() {
    this.y += this.dir;
    if(this.y > 220) {
      this.dir = -0.5;
    }
    else if(this.y < 180) {
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
    this.grass = [new Platform(200,300, "p"),new Platform(160,300, "p"),new Platform(120,300, "p"),new Platform(80,300, "p"),new Platform(40,300, "p"),new Platform(0,300, "p"),new Platform(200,300, "p"),new Platform(240,300, "p"),new Platform(280,300, "p"),new Platform(320,300, "p"),new Platform(360,300, "p")];
    this.rocks = [new Wall(200,335,"w"),new Wall(160,335,"w"),new Wall(120,335,"w"),new Wall(80,335,"w"),new Wall(40,335,"w"),new Wall(0,335,"w"),new Wall(200,335,"w"),new Wall(240,335,"w"),new Wall(280,335,"w"),new Wall(320,335,"w"),new Wall(360,335,"w"),new Wall(200,375,"w"),new Wall(160,375,"w"),new Wall(120,375,"w"),new Wall(80,375,"w"),new Wall(40,375,"w"),new Wall(0,375,"w"),new Wall(200,375,"w"),new Wall(240,375,"w"),new Wall(280,375,"w"),new Wall(320,375,"w"),new Wall(360,375,"w")];
    this.mtns = [new mountain(100,120,200,200),new mountain(-100,120,200,200),new mountain(300,120,200,200)];
    this.animateKratos = 1;
    this.skeleton = new Skeleton(200, 230, 80);
    this.animateSkeleton = 1;
    this.textX = 100;
    this.textY = 420;
    
  }
  //Draw the intro screen
  draw(){
    //Draw background for intro screen
    this.bg.draw();
    //fill(194, 178, 128);
    //rect(0, 300, 400, 100);
    //fill(135,206,235);
    //rect(0, 0, 400, 300);
    //Draw the omega symbol and have it fade in
    stroke(0, this.omega.alpha);
    //fill(0,154,23);
    //rect(0, 250, 400, 50);
    //fill(135, 206, 235);
    //Rest of graphics in the intro screen including text and character movements
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
  //Show Kratos moving in tandem with skeleton, also add animations
  //for text and the omega logo
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
  //What to do when going to instruction screen
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
    this.grass = [new Platform(200,300, "p"),new Platform(160,300, "p"),new Platform(120,300, "p"),new Platform(80,300, "p"),new Platform(40,300, "p"),new Platform(0,300, "p"),new Platform(200,300, "p"),new Platform(240,300, "p"),new Platform(280,300, "p"),new Platform(320,300, "p"),new Platform(360,300, "p")];
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
    this.lightning = [new Lightning(295,80,250),new Lightning(200,80,250)];
    this.zeusbolt = new Lightning(290,190,60);
  }
  //Draw various background items and characters and their animations in the screen
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

    for(var i = 0; i <this.lightning.length; i++) {
      this.lightning[i].draw();
      this.lightning[i].animate();
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
    this.zeusbolt.draw();
    this.zeusbolt.animate();
    this.zeusbolt.ZeusBoltAnimate();
    //this.skeleton.animate();
    noStroke();
    noFill();
    this.drawInstructs();

  }
  animate(){
    
    if(frameCount % 70 === 0) {
      this.kratos.swing = 1;
    }
    this.kratos.position.x += this.animateKratos;
    if(this.kratos.position.x > 150 || this.kratos.position.x < 25){
      this.animateKratos = -this.animateKratos;
      this.kratos.swing = 0;
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
  //State machine that controls instructions panel
  drawInstructs(){
    //Base screen that allows choices from various options
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
      //move into characters screen
      if((mouseIsPressed) && mouseX > 50 && mouseX < 150 && mouseY > 25 && mouseY < 75 && this.base){
        this.base = false;
        this.characters = true;
        this.instructions = false;
        
      }
      //move into instructions screen
      if((mouseIsPressed) && mouseX > 245 && mouseX < 350 && mouseY > 25 && mouseY < 75 && this.base){
        this.base = false;
        this.instructions = true;
        this.characters = false;
        
      }
    }
    //What to do in instructions screen
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
      //Switch to the base screen
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
    //Based on tilemap input
    //Draw different types of walls/rocks
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
//Class that was used for background images, but no longer used
class BackGround{
  constructor(x, y, image){
    this.x = x;
    this.y = y;
    this.image = image;
  }
  draw(){
    image(this.image, this.x, this.y, 40, 40);
  }
}


/*
Potion class that adds health when collected
Also bounces up and down for animation
*/
class Potion{
  constructor(x, y){
    this.timer = 0;
    this.x = x;
    this.y = y;
    this.image = images[7];
    this.collect = 0;
  }
  draw(){
    this.timer++;
    if(this.collect === 0){
      image(this.image, this.x, this.y, 20, 20);
      
    }
  }
  animate(){
    if(this.timer % 30 === 15){
      this.y += 5;
    }
    else if(this.timer % 30 == 0){
      this.y -= 5;
    }
  }
}

/*
Key class that adds to the player when collected
Also bounces up and down for animation
Will be used to unlock boss fights
*/
class Key{
  constructor(x, y){
    this.timer = 0;
    this.x = x;
    this.y = y;
    this.image = images[6];
    this.collect = 0;
  }
  draw(){
    this.timer++;
    if(this.collect === 0){
      image(this.image, this.x, this.y, 20, 20);
    }
  }
  animate(){
    if(this.timer % 30 === 15){
      this.y += 5;
    }
    else if(this.timer % 30 == 0){
      this.y -= 5;
    }
  }
}

//class for grass platform textures
class Platform{
  constructor(x, y, type){
    this.x = x;
    this.y = y;
    this.type = type;
    this.platform = loadImage("grassland_tileset/grassland_tileset/PNG/terrain_platform_center.png");
    this.bridge = images[3];
  }
  draw(){
    if(this.type === "p"){
      image(this.platform, this.x, this.y, 40, 40);
    }
    if(this.type === "b"){
      image(this.bridge, this.x, this.y, 40, 40);
    }
  }
}
/*
Create ladders on the tilemap screen
Item itself used in collision detection when
doing ladder movement
*/
class Ladder{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  draw(){
    image(images[2], this.x, this.y, 40, 40);
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
  //Draw the background and tilemap to the screen
  drawBackground(){
    // for(var b = 0; b < backgroundArray.length; b++){
    //   backgroundArray[b].draw();
    // }
    //Draw the background 16 times to improve quality
    //break it up into 16 parts
    image(images[8], 0, 0, 1000, 930);
    image(images[8], 1000, 0, 1000, 930);
    image(images[8], 2000, 0, 1000, 930);
    image(images[8], 3000, 0, 1000, 930);
    image(images[8], 0, 930, 1000, 930);
    image(images[8], 0, 1860, 1000, 930);
    image(images[8], 0, 2790, 1000, 930);
    image(images[8], 1000, 930, 1000, 930);
    image(images[8], 1000, 1860, 1000, 930);
    image(images[8], 1000, 2790, 1000, 930);
    image(images[8], 2000, 930, 1000, 930);
    image(images[8], 2000, 1860, 1000, 930);
    image(images[8], 2000, 2790, 1000, 930);
    image(images[8], 3000, 930, 1000, 930);
    image(images[8], 3000, 1860, 1000, 930);
    image(images[8], 3000, 2790, 1000, 930);
    //Draw the walls identified in tilemap
    for(var i = 0; i < walls.length; i++){

      walls[i].draw();
    }
    //Draw platforms found in tilemap
    for(var j = 0; j < grass.length; j++){
      grass[j].draw();
    }
    //Draw enemies, animate the wing motion, and activate state for each enemy
    for(var k = 0; k < this.enemies.length; k++){
      this.enemies[k].draw();
      this.enemies[k].animate();
      this.enemies[k].state[enemies[k].currState].execute(enemies[k]);
      //print(this.enemies[k].health);
    }
    //Draw ladders on the tilemap
    for(var l = 0; l < ladders.length; l++){
      ladders[l].draw();
    }
    //Draw the keys from tilemaps
    for(var x = 0; x < keys.length; x++){
      keys[x].draw();
      keys[x].animate();
    }
    //Draw potions from the tilemaps
    for(var y = 0; y < potions.length; y++){
      potions[y].draw();
      potions[y].animate();
    }
    fill(0);
    rect(this.kratos.position.x-200,this.kratos.position.y-200,80,40);
    fill(255)
    text("HP: ",this.kratos.position.x-180,this.kratos.position.y-180)
    text(this.kratos.health,this.kratos.position.x-150,this.kratos.position.y-180);
  }
  //Method to detect various kinds of platform collisions 
  platformCollision(){
    //Make sure Kratos can land on the top of the platform
    for(var i = 0; i < this.grassArray.length; i++){
      if(dist(this.kratos.position.x, this.kratos.position.y, this.grassArray[i].x, this.grassArray[i].y) < 40){
        if(this.kratos.position.y < this.grassArray[i].y && this.kratos.velocity.y > 0){
          this.kratos.position.y = this.grassArray[i].y - 40 + 5;
          this.kratos.jump = 0;
          this.kratos.velocity.set(0, 0);
        }
      }
      //Bounce up if the enemies collides with the platform
      for(var j = 0; j < this.enemies.length; j++) {
        if(dist(this.enemies[j].x, this.enemies[j].y, this.grassArray[i].x, this.grassArray[i].y) < 40){
          if(this.enemies[j].y < this.grassArray[i].y) {
            this.enemies[j].y = this.grassArray[i].y -40;
          }
        }
      }
    }
    //What kratos should do when colliding with the walls in the game map
    for(var i = 0; i < this.wallsArray.length; i++) {
      if(dist(this.kratos.position.x, this.kratos.position.y, this.wallsArray[i].x, this.wallsArray[i].y) < 40){
        if(this.kratos.position.y < this.wallsArray[i].y && this.kratos.velocity.y >= 0) {
          
          this.kratos.position.y = this.wallsArray[i].y - 35;
          this.kratos.jump = 0;
          this.kratos.velocity.set(0, 0);
          //print("top col");
        }
        else {
          if(this.kratos.position.x < this.wallsArray[i].x) {
            
            this.kratos.position.x -= 5;
            //this.kratos.velocity.set(0, 0);
            this.kratos.velocity.x = -this.kratos.velocity.x;
            //print("left col");
          }

          if(this.kratos.position.x > this.wallsArray[i].x) {
            
            this.kratos.position.x += 5;
            //this.kratos.velocity.set(0, 0);
            this.kratos.velocity.x = -this.kratos.velocity.x;
            //print("right col");
          }


          if(this.kratos.position.y > this.wallsArray[i].y) {
            this.kratos.position.y += 5; 
            this.kratos.velocity.y = -this.kratos.velocity.y;
            //print("bottom col");
          }
      }
    }
  }
//What the enemies should do if they collide with the walls
    for(var j = 0; j < this.enemies.length; j++) {
      for(var k = 0; k < this.wallsArray.length; k++) {
        if(dist(this.enemies[j].x, this.enemies[j].y, this.wallsArray[k].x, this.wallsArray[k].y) < 40){

          if(this.enemies[j].x < this.wallsArray[k].x) {
           
            this.enemies[j].x -= 10;

            
          }
  
          if(this.enemies[j].x > this.wallsArray[k].x) {
            
            this.enemies[j].x += 10;
 
          }
  
          if(this.enemies[j].y < this.wallsArray[k].y) {
            
            this.enemies[j].y = this.wallsArray[k].y - 40 + 5;
            

          }
  
          if(this.enemies[j].y > this.wallsArray[k].y) {
            
            this.enemies[j].y += 10; 
            skelyDir = 1;

          }
        }
      }
    }
  }
//What should happen if the character collects an item
  itemCollision(){
    for(var i = 0; i < keys.length; i++){
      if(dist(this.kratos.position.x, this.kratos.position.y, keys[i].x, keys[i].y) < 20 && keys[i].collect === 0){
        keys[i].collect = 1;
      }
    }
    for(var j = 0; j < potions.length; j++){
      if(dist(this.kratos.position.x, this.kratos.position.y, potions[j].x, potions[j].y) < 20 && potions[j].collect === 0){
        potions[j].collect = 1;
        this.kratos.health++;
      }
    }
  }
  //Combat animation and interactiosn
  //Define hit box for attacking skeletons
  //Trigger knockbacks and injury animations
  //Check if Kratos should be afflicted by fire bullets
  combat(){
    for(var i = 0; i < this.enemies.length; i++){
      /*if(dist(this.kratos.position.x, this.kratos.position.y, this.enemies[i].x, this.enemies[i].y) < 40 && this.kratos.swing === 1){
        if(this.kratos.timer % 100 === 0){
          this.enemies[i].health--;
        }
        this.enemies[i].attackedAnimation();
      }*/
      //print("kratos")
      //print(this.kratos.position)
      //print("")
      stroke(0,255,0)
      
      //print(this.kratos.attackRect[0]+this.kratos.position.x)
      //print(this.kratos.attackRect[1]+this.kratos.position.y)
      if(this.kratos.dir === 1)
      {
        //rect(this.kratos.attackRect[0]+this.kratos.position.x,this.kratos.attackRect[1]+this.kratos.position.y,this.kratos.attackRect[2],this.kratos.attackRect[3]);
        if(dist(this.kratos.position.x+30, this.kratos.position.y, this.enemies[i].x, this.enemies[i].y) < 40 && this.kratos.swing === 1) {

          if(this.kratos.timer % 25 === 0 && this.enemies[i].health > 0) {
          //this.enemies[i].x += 10;
          //this.enemies[i].y -= 8;
            this.enemies[i].health--;
            this.enemies[i].knockback = 1;
            this.enemies[i].hurt = 1;
          }
          
          print('hit')
          //this.enemies[i].attackedAnimation();
        }
      }
      if(this.kratos.dir === -1) {
        
        if(dist(this.kratos.position.x-30, this.kratos.position.y, this.enemies[i].x, this.enemies[i].y) < 40 && this.kratos.swing === 1) {

          if(this.kratos.timer % 5 === 0 && this.enemies[i].health > 0) {
            //this.enemies[i].x -= 10;
            //this.enemies[i].y += 8;
              this.enemies[i].health--;
              this.enemies[i].knockback = -1;
              this.enemies[i].hurt = 1;
            }
          //print('hit')
          //this.enemies[i].attackedAnimation();
        }
      }
    }
  }

  //Overall game method
  play(){
    this.drawBackground();
    var lava = new fireBullet();
    
    this.kratos.draw();
    this.kratos.animate();
    this.kratos.move();
    this.platformCollision();
    this.itemCollision();
    this.combat();
    targetX = this.kratos.position.x;
    targetY = this.kratos.position.y;
  }
}

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

  zeussp = loadImage('zeussprite.png');
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
        //print("potion added");
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
    //wall.draw();
    pop();
  }
  //Otherwise losing screen
  else{
    background(0);
  }
}