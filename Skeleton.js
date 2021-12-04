
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
        for(var t = 0; t < firedWebs.length; t++){
          if(firedWebs[t].fire === 1){
            firedWebs[t].draw();
            firedWebs[t].move();
          }
          else{
            firedWebs[t].fire = 0;
          }
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
      for(var t = 0; t < firedWebs.length; t++){
        if(firedWebs[t].fire === 1){
          firedWebs[t].draw();
          firedWebs[t].move();
        }
        else{
          firedWebs[t].fire = 0;
        }
      }
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
            if(this.val < frameCount - 200){
              
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
      this.position.x += .5 * sin(this.angle + PI / 2);
      this.position.y -= .5 * cos(this.angle + PI / 2);
  
      
      //When it should disappear/not effect character
      if(dist(this.position.x,this.position.y,kratos.position.x+20,kratos.position.y+20) < 25) {
        this.fire = 0;
        kratos.health -= 0.5;
        //print('noooo')
      }
      //When it should disappear/not effect character
      if(level === 1){
        for(var i = 0; i < walls.length; i++) {
          if(dist(this.position.x,this.position.y,walls[i].x,walls[i].y) < 20) {
            //print('wall')
            this.fire = 0;
          }
        }
        for (var i = 0; i < grass.length; i++) {
          if(dist(this.position.x,this.position.y,grass[i].x,grass[i].y) < 20) {
            this.fire = 0;
          }
        }
      }
      else{
        for(var i = 0; i < walls2.length; i++) {
          if(dist(this.position.x,this.position.y,walls2[i].x,walls2[i].y) < 20) {
            //print('wall')
            this.fire = 0;
          }
        }

        for (var i = 0; i < grass2.length; i++) {
          if(dist(this.position.x,this.position.y,grass2[i].x,grass2[i].y) < 20) {
            this.fire = 0;
          }
        }
      }
      // if (this.position.y < 0 || this.position.y > 400 || this.position.x > 400 || this.position.x < 0) {
      //   this.fire = 0;
      // }
  
  
    }
  }