//base game class foundation
class Game{
    constructor(walls, grass, kratos, enemies, zeus){
      this.wallsArray = walls;
      this.grassArray = grass;
      this.kratos = kratos;
      this.enemies = enemies;
      this.correctionX = 0;
      this.correctionY = 0;
      this.finalBoss = 0;
      this.score = 0;
      this.zeus = zeus;
      
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
    drawFinalBackground(){

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
        if(dist(this.zeus.position.x, this.zeus.position.y, this.grassArray[i].x, this.grassArray[i].y) < 40){
          if(this.zeus.position.y < this.grassArray[i].y) {
            this.zeus.position.y = this.grassArray[i].y -40;
            //print("yolo");
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

      for(var k = 0; k < this.wallsArray.length; k++) {
        if(dist(this.zeus.position.x, this.zeus.position.y, this.wallsArray[k].x, this.wallsArray[k].y) < 40){

          if(this.zeus.position.x < this.wallsArray[k].x) {
           
            this.zeus.position.x -= 10;

            
          }
  
          if(this.zeus.position.x > this.wallsArray[k].x) {
            
            this.zeus.position.x += 10;
 
          }
  
          if(this.zeus.position.y < this.wallsArray[k].y) {
            
            this.zeus.position.y = this.wallsArray[k].y - 40 + 5;
            

          }
  
          if(this.zeus.position.y > this.wallsArray[k].y) {
            
            this.zeus.position.y += 10; 
            

          }
        }
      }
    }
  //What should happen if the character collects an item
    itemCollision(){
      for(var i = 0; i < keys.length; i++){
        if(dist(this.kratos.position.x, this.kratos.position.y, keys[i].x, keys[i].y) < 20 && keys[i].collect === 0){
          keys[i].collect = 1;
          this.kratos.score++;
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
        stroke(0,255,0)
        if(this.kratos.dir === 1)
        {
          if(dist(this.kratos.position.x+30, this.kratos.position.y, this.enemies[i].x, this.enemies[i].y) < 40 && this.kratos.swing === 1) {
  
            if(this.kratos.timer % 25 === 0 && this.enemies[i].health > 0) {
              this.enemies[i].health--;
              this.enemies[i].knockback = 1;
              this.enemies[i].hurt = 1;
            }
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
          }
        }
      }
    }
    zeusCombat(){
      stroke(0,255,0)
        if(this.kratos.dir === 1)
        {
          if(dist(this.kratos.position.x+30, this.kratos.position.y, this.zeus.position.x, this.zeus.position.y) < 40 && this.kratos.swing === 1 && this.zeus.invincible === 0) {
  
            if(this.kratos.timer % 25 === 0 && this.zeus.level < 10) {
              this.zeus.level++;
              this.zeus.knockback = 1;
              this.zeus.hurt = 1;
            }
          }
        }
        if(this.kratos.dir === -1) {
          
          if(dist(this.kratos.position.x-30, this.kratos.position.y, this.zeus.position.x, this.zeus.position.y) < 40 && this.kratos.swing === 1 && this.zeus.invincible === 0) {
  
            if(this.kratos.timer % 5 === 0 && this.zeus.level < 10) {
                this.zeus.level++;
                this.zeus.knockback = -1;
                this.zeus.hurt = 1;
              }
          }
        }
    }
  
    //Overall game method
    play(){
      if(this.kratos.score < 14){

        this.drawBackground();
        var lava = new fireBullet();
        
        this.kratos.draw();
        this.kratos.animate();
        this.kratos.move();
        this.platformCollision();
        this.itemCollision();
        this.combat();
        this.zeus.draw();
        this.zeus.state[this.zeus.currState].execute(this.zeus);
        //Fix combat issues
        this.zeusCombat();
        targetX = this.kratos.position.x;
        targetY = this.kratos.position.y;
      }
      // else if(this.kratos.score === 14 && this.finalBoss === 0){
      //   //cutscene code
      //   this.finalBoss === 1;
      // }
      // else{
      //   this.drawFinalBackground();
      //   this.kratos.draw();
      //   this.kratos.animate();
      //   this.kratos.move();
      //   targetX = this.kratos.position.x;
      //   targetY = this.kratos.position.y;
      //   this.platformCollision();
      //   this.zeus.draw();
      //   this.zeus.state[this.currState].execute(this.zeus);
      //   this.zeusCombat();
      // }
    }
  }