class zeusFlyState{
    constructor(){
      //this.position = new p5.Vector(0, 0);
      this.step = new p5.Vector(0, 0);
      this.xDir = 1 ;
      this.bullets = [new lightningBullet(), new lightningBullet(), new lightningBullet(), new lightningBullet()];
      this.vec = new p5.Vector(0, 0);
      this.angle = 0;
      this.angleDir = 0;
      this.val = 0;
      this.index = 0;
    }
    execute(me){
      //establish base attack animation
      me.baseAttack();
      me.animate1();
      //print(me.level);
      //check if alive before performing state action
      if(me.alive === 1){
        //check distance see if safe to follow, else back away
        if(dist(targetX, targetY, me.position.x, me.position.y) > 100){
          this.step.set(targetX - me.position.x, targetY - me.position.y);
          this.step.normalize();
          me.angle = this.step.heading() + PI/2;
          //Set direction zeus is facing when it is chasing kratos
          if(abs(this.step.heading()) > 1.5 && abs(this.step.heading()) < 3.0){
            me.direction = 0;
          }
          else{
            me.direction = 1;
          }
          me.position.x += this.step.x;
          me.position.y += this.step.y;
        }
        else{
          this.step.set(targetX - me.position.x, targetY - me.position.y);
          this.step.normalize();
          me.angle = this.step.heading() + PI/2;
          //Set direction zeus is facing when it is chasing kratos
          if(abs(this.step.heading()) > 1.5 && abs(this.step.heading()) < 3.0){
            me.direction = 0;
          }
          else{
            me.direction = 1;
          }
          me.position.x -= this.step.x;
          me.position.y -= this.step.y;
        }
        if(me.alive == 1){
            
            //if(dist(me.x, me.y, kratos.position.x, kratos.position.y) < 120){
              //Fire a bullet from the array of bullets available in this state
              if(this.val < frameCount - 50){
                
                this.val = frameCount;
                this.bullets[this.index].fire = 1;
                this.bullets[this.index].position.x = me.position.x + 20;
                this.bullets[this.index].position.y = me.position.y + 20;
                this.bullets[this.index].angle = me.angle - PI/2;
                //firedWebs.push(this.bullets[this.index]);
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
            //If bullets are too far from zeus, they disappear
            for(var i = 0; i < this.bullets.length; i++) {
              if(dist(this.bullets[i].position.x,this.bullets[i].position.y,me.position.x,me.position.y) > 1200) {
                this.bullets[i].fire = 0;
              }
            }
          
        }
        
      }
      if(me.hurt === 1){
        me.changeState(1);
      }
      
    }
  }
  
  class zeusAggressiveFlyState{
    constructor(){
      //this.position = new p5.Vector(0, 0);
      
      this.step = new p5.Vector(0, 0);
      this.xDir = 1 ;
      this.bullets = [new lightningBullet(), new lightningBullet(), new lightningBullet(), new lightningBullet()];
      this.vec = new p5.Vector(0, 0);
      this.angle = 0;
      this.angleDir = 0;
      this.val = 0;
      this.index = 0;
    }
    execute(me){

      me.baseAttack();
      me.animate1();
      //if(me.level < 9){
        if(dist(targetX, targetY, me.position.x, me.position.y) > 100){
          this.step.set(targetX - me.position.x, targetY - me.position.y);
          this.step.normalize();
          me.position.x += 2 * this.step.x;
          me.position.y += 2 * this.step.y;
          me.angle = this.step.heading() + PI/2;
          //Set direction skeleton is facing when it is chasing kratos
          if(abs(this.step.heading()) > 1.5 && abs(this.step.heading()) < 3.0){
            me.direction = 0;
          }
          else{
            me.direction = 1;
          }
          me.position.x += this.step.x;
          me.position.y += this.step.y;
        }
        else{
          this.step.set(targetX - me.position.x, targetY - me.position.y);
          this.step.normalize();
          me.position.x -= 2 * this.step.x;
          me.position.y -= 2 * this.step.y;
          me.angle = this.step.heading() + PI/2;
          //Set direction skeleton is facing when it is chasing kratos
          if(abs(this.step.heading()) > 1.5 && abs(this.step.heading()) < 3.0){
            me.direction = 0;
          }
          else{
            me.direction = 1;
          }
          me.position.x += this.step.x;
          me.position.y += this.step.y;
        }
        if(me.alive == 1){
            
            //if(dist(me.x, me.y, kratos.position.x, kratos.position.y) < 120){
              //Fire a bullet from the array of bullets available in this state
              if(this.val < frameCount - 50){
                
                this.val = frameCount;
                this.bullets[this.index].fire = 1;
                this.bullets[this.index].position.x = me.position.x;
                this.bullets[this.index].position.y = me.position.y;
                this.bullets[this.index].angle = me.angle - PI/2;
                //firedWebs.push(this.bullets[this.index]);
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
            //If bullets are too far from zeus, they disappear
            for(var i = 0; i < this.bullets.length; i++) {
              if(dist(this.bullets[i].position.x,this.bullets[i].position.y,me.position.x,me.position.y) > 1200) {
                this.bullets[i].fire = 0;
              }
            }
          
        }
        
      //}
      if(me.hurt == 1){
        
        me.changeState(1);
      }
      
    }
  }
  
  
  class zeusDownState{
    //Add state transition for this state
    constructor(){
      this.timer = 0;
    }
    execute(me){
      me.falling = 1;
      //print(me.level);
      if(me.alive === 1){
        //print("going to move");
        this.timer++;
        if(this.timer < 50){
          me.move();
        }
      }
      if(me.hurt === 1){
        me.falling = 0;
        me.changeState(1);
        this.timer = 0;
      }
    } 
  
  }
  
  class zeusHurtState{
    constructor(){
      this.timer = 0;
    }
    execute(me){
      me.hurtAnimation();
      this.timer++;
      
      //print(me.level);
      //Adjust position in direction of knockback set when attack happens
      me.position.x += me.knockback * 2;
      me.position.y -= 2;
      if(this.timer === 30 && me.level < 3) {
        //Move back for half second before returning to chase state
        me.hurt = 0;
        this.timer = 0;
        me.changeState(0);
      }
      else if(this.timer === 30 && me.level < 5){
        me.hurt = 0;
        this.timer = 0;
        me.changeState(2);
      }
      else if(this.timer === 30 && me.level < 10){
        me.hurt = 0;
        this.timer = 0;
        me.changeState(3);
      }
      else if(this.timer === 30 && me.level < 12){
        me.hurt = 0;
        this.timer = 0;
        me.changeState(4);
      }
      else if(this.timer === 30 && me.level < 17){
        me.hurt = 0;
        this.timer = 0;
        me.changeState(3);
      }
      else if(this.timer === 30 && me.level < 19){
        me.hurt = 0;
        this.timer = 0;
        me.changeState(4);
      }
      else if(this.timer === 30 && me.level >= 19){
        me.alive = 0;
        me.level = 0;
        this.timer = 0;
        me.changeState(0);
        
      }
    }
  }
  
  class zeusHellFire{
    constructor(){
      this.bullets = [new lightningBullet(), new lightningBullet(), new lightningBullet(), new lightningBullet(), new lightningBullet(), new lightningBullet(), new lightningBullet(), new lightningBullet()];
      this.timer = 0;
      this.index = 0;
      this.val = 0;
    }
    //Add the animations and the bullets firing from top of screen
    execute(me){
      //perform special animation for attack
      me.specialAttack();
      me.animate1();
      me.invincible = 1;
      this.timer++;
      //Draw Bullets in a raining fashion, impacted by gravity
      if(this.val < frameCount - 10){
        //check if bullets shoudld be fired
        this.val = frameCount;
        this.bullets[this.index].fire = 1;
        this.bullets[this.index].position.x = me.position.x - 20 + (20 * this.index);
        this.bullets[this.index].position.y = me.position.y;
        this.bullets[this.index].angle = PI/2;
        //firedWebs.push(this.bullets[this.index]);
        this.index++;
        if(this.index > 7){
          this.index = 0;
        }
      //}
      
      
      } 
      //draw and move bullets accordingly
      for(var i = 0; i < 7; i++){
        if(this.bullets[i].fire === 1){
          this.bullets[i].draw();
          this.bullets[i].moveHellFire();
        }
      }
      //Normal transition
      if(this.timer === 300 && kratos.health > 0){
        me.invincible = 0;
        this.timer = 0;
        me.changeState(3);

      }
      //transition in dead state
      if(kratos.health <= 0){
        me.invincible = 0;
        this.timer = 0;
      }
      
    }
  }
  
  
  //class for final boss Zeus
  class Zeus{
    constructor(x, y, scale){
      this.x = x;
      this.y = y;
      this.scale = scale;
      this.dir = 0.5;
      this.level = 0;
      this.state = [new zeusFlyState(), new zeusHurtState(), new zeusDownState(), new zeusAggressiveFlyState(), new zeusHellFire()];
      this.currState = 0;
      this.len = zeushellfire_array.length;
      this.index = 0;
      this.hurt = 0;
      this.knockback = 0;
      this.alive = 1;
      this.position = new p5.Vector(this.x, this.y);
      this.velocity = new p5.Vector(0, 0);
      this.acceleration = new p5.Vector(0, 0);
      this.direction = 0;
      this.angle = 0;
      this.invincible = 0;
      this.falling = 0;
    }
    //Draw Zeus character
    draw(){
      let index = floor(this.index) % this.len;
      //check if alive and not in hellfire state
      if(this.alive === 1 && this.currState != 4){
        //check if falling to draw normal animation
        if(this.falling === 0){
          //draw in appropriate direction
          if(this.direction === 0){
            image(zeusarray[index],this.position.x,this.position.y,this.scale,this.scale);
          }
          else{
            image(zeusarray_rev[index],this.position.x,this.position.y,this.scale,this.scale);
          }
        }
        else{
          //draw falling body
          if(this.direction === 0){
            image(zeusfallingarray[index], this.position.x, this.position.y, this.scale, this.scale);
          }
          else{
            image(zeusfallingarray_rev[index], this.position.x, this.position.y, this.scale, this.scale);
          }
        } 
      }
      //image(this.img,this.x,this.y,this.scale,this.scale);
      
    }
    //apply force to add gravity in raining of lightning
    applyForce(force){
      this.acceleration.add(force);
    }
    //Basic Zeus animation
    animate() {
      //this.index += 0.25;
      this.position.y += this.dir;
      if(this.position.y > 210) {
        this.dir = -0.5;
      }
      else if(this.position.y < 170) {
        this.dir = 0.5;
      }
    }

    animate1() {
      this.index += 0.25;
    }
    //throwing motion
    baseAttack(){
      let index = floor(this.index) % this.len;
      if(this.direction === 0){
        image(zeusshooting[index],this.position.x,this.position.y,this.scale,this.scale);
      }
      else{
        image(zeusshooting_rev[index],this.position.x,this.position.y,this.scale,this.scale);
      }
  
    }
    //hurt motion and change in animation
    hurtAnimation(){
      let index = floor(this.index) % this.len;
      if(this.direction === 0){
        image(zeushurtarray[index],this.position.x,this.position.y,this.scale,this.scale);
      }
      else{
        image(zeushurtarray_rev[index],this.position.x,this.position.y,this.scale,this.scale);
      }
    }
    //special attack image and animation
    specialAttack(){
      let index = floor(this.index) % this.len;
      image(zeushellfire_array[index], this.position.x, this.position.y, this.scale, this.scale);
    }
    changeState(statevar){
      this.currState = statevar;
    }
    //how to move when in hellfire
    move(){
      this.acceleration.set(0, 0);
      this.applyForce(gravity);
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.acceleration.set(0, 0);
      
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
  
  class lightningBullet{
    constructor(){
      this.position = new p5.Vector(0, 0);
      this.velocity = new p5.Vector(0, 0);
      this.acceleration = new p5.Vector(0, 0);
      this.image = images[images.length - 1];
      this.fire = 1;
      this.angle = 0;
      this.vec = new p5.Vector(0,-1);
      this.scale = 60;
      this.index = 0;
      this.len = lightningarray.length;
    }
    draw(){
      push();
      translate(this.position.x + 30, this.position.y + 30);
      let index = floor(this.index) % this.len;
      rotate(this.angle + PI/2);
      image(lightningarray[index],0,0,this.scale,this.scale);
      pop();
  
    }
  
    applyForce(force){
      this.acceleration.add(force);
    }
  
    move() {
      this.position.x +=  4 * sin(this.angle + PI / 2);
      this.position.y -=  4 * cos(this.angle + PI / 2);
  
      
      //When it should disappear/not effect character
      if(dist(this.position.x,this.position.y,kratos.position.x,kratos.position.y) < 35) {
        this.fire = 0;
        kratos.health -= 0.5;
      }
      //When it should disappear/not effect character
      
      for(var i = 0; i < finalWalls.length; i++) {
        if(dist(this.position.x,this.position.y, finalWalls[i].x, finalWalls[i].y) < 40) {
          this.fire = 0;
        }
      }
      for(var j = 0; j < finalWalls2.length; j++) {
        if(dist(this.position.x,this.position.y, finalWalls2[j].x,finalWalls2[j].y) < 40) {
          this.fire = 0;
        }
      }
      // if (this.position.y < 0 || this.position.y > 400 || this.position.x > 400 || this.position.x < 0) {
      //   this.fire = 0;
      // }
  
  
    }
    //add gravity to bolts to send in shower type of falling
    moveHellFire(){
      this.acceleration.set(0, 0);
      this.applyForce(gravity);
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.acceleration.set(0, 0); 
      if(dist(this.position.x,this.position.y,kratos.position.x,kratos.position.y) < 35) {
        this.fire = 0;
        kratos.health -= 0.5;
      }
      //When it should disappear/not effect character
      
      for(var i = 0; i < finalWalls.length; i++) {
        if(dist(this.position.x,this.position.y, finalWalls[i].x, finalWalls[i].y) < 40) {
          this.fire = 0;
        }
      }
      for(var j = 0; j < finalWalls2.length; j++) {
        if(dist(this.position.x,this.position.y, finalWalls2[j].x, finalWalls2[j].y) < 40) {
          this.fire = 0;
        }
      }
    }
  }
  
  