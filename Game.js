
//base game class foundation
class Game{
    constructor(walls, grass, kratos, enemies, zeus, potions, keys){
      this.wallsArray = walls;
      this.grassArray = grass;
      this.kratos = kratos;
      this.enemies = enemies;
      this.correctionX = 0;
      this.correctionY = 0;
      this.finalBoss = 0;
      this.score = 0;
      this.zeus = zeus;
      this.timer = 0;
      this.kratCut = new Kratos(this.kratos.position.x, this.kratos.position.y +50, 100);
      this.zeusCut = new Zeus(this.kratos.position.x + 200, this.kratos.position.y - 150, 100);
      this.kratosFinal = new Kratos(20, 230, 40);
      this.zeusFinal = new Zeus(20, 20, 40);
      this.potions = potions;
      this.keys = keys;
      this.inFinal = 0;
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
      for(var i = 0; i < this.wallsArray.length; i++){
  
        this.wallsArray[i].draw();
      }
      //Draw platforms found in tilemap
      for(var j = 0; j < this.grassArray.length; j++){
        this.grassArray[j].draw();
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
      for(var x = 0; x < this.keys.length; x++){
        this.keys[x].draw();
        this.keys[x].animate();
      }
      //Draw potions from the tilemaps
      for(var y = 0; y < this.potions.length; y++){
        this.potions[y].draw();
        this.potions[y].animate();
      }
      fill(0);
      rect(this.kratos.position.x-200,this.kratos.position.y-200,80,40);
      fill(255)
      text("HP: ",this.kratos.position.x-180,this.kratos.position.y-180)
      text(this.kratos.health,this.kratos.position.x-150,this.kratos.position.y-180);
    }
    drawFinalBackground(){
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
      for(var i = 0; i < finalWalls.length; i++){
        finalWalls[i].draw();
      }
      for(var j = 0; j < finalGrass.length; j++){
        finalGrass[j].draw();
      }
      for(var k = 0; k < finalEnemies.length; k++){
        finalEnemies[k].draw();
        finalEnemies[k].animate();
        finalEnemies[k].state[finalEnemies[k].currState].execute(finalEnemies[k]);
        //print(this.enemies[k].health);
      }
      for(var y = 0; y < finalPotions.length; y++){
        finalPotions[y].draw();
        finalPotions[y].animate();
      }
      fill(0);
      rect(this.kratos.position.x-200,this.kratos.position.y-200,80,40);
      fill(255)
      text("HP: ",this.kratos.position.x-180,this.kratos.position.y-180)
      text(this.kratos.health,this.kratos.position.x-150,this.kratos.position.y-180);


    }
    drawFinalBackground2(){
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
      for(var i = 0; i < finalWalls2.length; i++){
        finalWalls2[i].draw();
      }
      for(var j = 0; j < finalGrass.length; j++){
        finalGrass2[j].draw();
      }
      for(var k = 0; k < finalEnemies.length; k++){
        finalEnemies2[k].draw();
        finalEnemies2[k].animate();
        finalEnemies2[k].state[finalEnemies2[k].currState].execute(finalEnemies2[k]);
        //print(this.enemies[k].health);
      }
      for(var y = 0; y < finalPotions2.length; y++){
        finalPotions2[y].draw();
        finalPotions2[y].animate();
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

    final1platformCollision(){
      //Make sure Kratos can land on the top of the platform
      for(var i = 0; i < finalGrass.length; i++){
        if(dist(this.kratos.position.x, this.kratos.position.y, finalGrass[i].x, finalGrass[i].y) < 40){
          if(this.kratos.position.y < finalGrass[i].y && this.kratos.velocity.y > 0){
            this.kratos.position.y = finalGrass[i].y - 40 + 5;
            this.kratos.jump = 0;
            this.kratos.velocity.set(0, 0);
          }
        }
        //Bounce up if the enemies collides with the platform
        for(var j = 0; j < finalEnemies.length; j++) {
          if(dist(finalEnemies[j].x, finalEnemies[j].y, finalGrass[i].x, finalGrass[i].y) < 40){
            if(finalEnemies[j].y < finalGrass[i].y) {
              finalEnemies[j].y = finalGrass[i].y -40;
            }
          }
        }
        if(dist(this.zeus.position.x, this.zeus.position.y, finalGrass[i].x, finalGrass[i].y) < 40){
          if(this.zeus.position.y < finalGrass[i].y) {
            this.zeus.position.y = finalGrass[i].y -40;
            //print("yolo");
          }
        }
      }
      //What kratos should do when colliding with the walls in the game map
      for(var i = 0; i < finalWalls.length; i++) {
        if(dist(this.kratos.position.x, this.kratos.position.y, finalWalls[i].x, finalWalls[i].y) < 40){
          if(this.kratos.position.y < finalWalls[i].y && this.kratos.velocity.y >= 0) {
            
            this.kratos.position.y = finalWalls[i].y - 35;
            this.kratos.jump = 0;
            this.kratos.velocity.set(0, 0);
            //print("top col");
          }
          else {
            if(this.kratos.position.x < finalWalls[i].x) {
              
              this.kratos.position.x -= 5;
              //this.kratos.velocity.set(0, 0);
              this.kratos.velocity.x = -this.kratos.velocity.x;
              //print("left col");
            }
  
            if(this.kratos.position.x > finalWalls[i].x) {
              
              this.kratos.position.x += 5;
              //this.kratos.velocity.set(0, 0);
              this.kratos.velocity.x = -this.kratos.velocity.x;
              //print("right col");
            }
  
  
            if(this.kratos.position.y > finalWalls[i].y) {
              this.kratos.position.y += 5; 
              this.kratos.velocity.y = -this.kratos.velocity.y;
              //print("bottom col");
            }
        }
      }
    }
  //What the enemies should do if they collide with the walls
      for(var j = 0; j < finalEnemies.length; j++) {
        for(var k = 0; k < finalWalls.length; k++) {
          if(dist(finalEnemies[j].x, finalEnemies[j].y, finalWalls[k].x, finalWalls[k].y) < 40){
  
            if(finalEnemies[j].x < finalWalls[k].x) {
             
              finalEnemies[j].x -= 10;
  
              
            }
    
            if(finalEnemies[j].x > finalWalls[k].x) {
              
              finalEnemies[j].x += 10;
   
            }
    
            if(finalEnemies[j].y < finalWalls[k].y) {
              
              finalEnemies[j].y = finalWalls[k].y - 40 + 5;
              
  
            }
    
            if(finalEnemies[j].y > finalWalls[k].y) {
              
              finalEnemies[j].y += 10; 
              skelyDir = 1;
  
            }
          }
        }
      }

      for(var k = 0; k < finalWalls.length; k++) {
        if(dist(this.zeus.position.x, this.zeus.position.y, finalWalls[k].x, finalWalls[k].y) < 40){

          if(this.zeus.position.x < finalWalls[k].x) {
           
            this.zeus.position.x -= 10;

            
          }
  
          if(this.zeus.position.x > finalWalls[k].x) {
            
            this.zeus.position.x += 10;
 
          }
  
          if(this.zeus.position.y < finalWalls[k].y) {
            
            this.zeus.position.y = finalWalls[k].y - 40 + 5;
            

          }
  
          if(this.zeus.position.y > finalWalls[k].y) {
            
            this.zeus.position.y += 10; 
            

          }
        }
      }
    }

    final2platformCollision(){
      //Make sure Kratos can land on the top of the platform
      for(var i = 0; i < finalGrass2.length; i++){
        if(dist(this.kratos.position.x, this.kratos.position.y, finalGrass2[i].x, finalGrass2[i].y) < 40){
          if(this.kratos.position.y < finalGrass2[i].y && this.kratos.velocity.y > 0){
            this.kratos.position.y = finalGrass2[i].y - 40 + 5;
            this.kratos.jump = 0;
            this.kratos.velocity.set(0, 0);
          }
        }
        //Bounce up if the enemies collides with the platform
        for(var j = 0; j < finalEnemies2.length; j++) {
          if(dist(finalEnemies2[j].x, finalEnemies2[j].y, finalGrass2[i].x, finalGrass2[i].y) < 40){
            if(finalEnemies2[j].y < finalGrass2[i].y) {
              finalEnemies2[j].y = finalGrass2[i].y -40;
            }
          }
        }
        if(dist(this.zeus.position.x, this.zeus.position.y, finalGrass2[i].x, finalGrass2[i].y) < 40){
          if(this.zeus.position.y < finalGrass2[i].y) {
            this.zeus.position.y = finalGrass2[i].y -40;
            //print("yolo");
          }
        }
      }
      //What kratos should do when colliding with the walls in the game map
      for(var i = 0; i < finalWalls2.length; i++) {
        if(dist(this.kratos.position.x, this.kratos.position.y, finalWalls2[i].x, finalWalls2[i].y) < 40){
          if(this.kratos.position.y < finalWalls2[i].y && this.kratos.velocity.y >= 0) {
            
            this.kratos.position.y = finalWalls2[i].y - 35;
            this.kratos.jump = 0;
            this.kratos.velocity.set(0, 0);
            //print("top col");
          }
          else {
            if(this.kratos.position.x < finalWalls2[i].x) {
              
              this.kratos.position.x -= 5;
              //this.kratos.velocity.set(0, 0);
              this.kratos.velocity.x = -this.kratos.velocity.x;
              //print("left col");
            }
  
            if(this.kratos.position.x > finalWalls2[i].x) {
              
              this.kratos.position.x += 5;
              //this.kratos.velocity.set(0, 0);
              this.kratos.velocity.x = -this.kratos.velocity.x;
              //print("right col");
            }
  
  
            if(this.kratos.position.y > finalWalls2[i].y) {
              this.kratos.position.y += 5; 
              this.kratos.velocity.y = -this.kratos.velocity.y;
              //print("bottom col");
            }
        }
      }
    }
  //What the enemies should do if they collide with the walls
      for(var j = 0; j < finalEnemies2.length; j++) {
        for(var k = 0; k < finalWalls2.length; k++) {
          if(dist(finalEnemies2[j].x, finalEnemies2[j].y, finalWalls2[k].x, finalWalls2[k].y) < 40){
  
            if(finalEnemies2[j].x < finalWalls2[k].x) {
             
              finalEnemies2[j].x -= 10;
  
              
            }
    
            if(finalEnemies2[j].x > finalWalls2[k].x) {
              
              finalEnemies2[j].x += 10;
   
            }
    
            if(finalEnemies2[j].y < finalWalls2[k].y) {
              
              finalEnemies2[j].y = finalWalls2[k].y - 40 + 5;
              
  
            }
    
            if(finalEnemies2[j].y > finalWalls2[k].y) {
              
              finalEnemies2[j].y += 10; 
              skelyDir = 1;
  
            }
          }
        }
      }

      for(var k = 0; k < finalWalls2.length; k++) {
        if(dist(this.zeus.position.x, this.zeus.position.y, finalWalls2[k].x, finalWalls2[k].y) < 40){

          if(this.zeus.position.x < finalWalls2[k].x) {
           
            this.zeus.position.x -= 10;

            
          }
  
          if(this.zeus.position.x > finalWalls2[k].x) {
            
            this.zeus.position.x += 10;
 
          }
  
          if(this.zeus.position.y < finalWalls2[k].y) {
            
            this.zeus.position.y = finalWalls2[k].y - 40 + 5;
            

          }
  
          if(this.zeus.position.y > finalWalls2[k].y) {
            
            this.zeus.position.y += 10; 
            

          }
        }
      }
    }
  //What should happen if the character collects an item
    itemCollision(){
      for(var i = 0; i < this.keys.length; i++){
        if(dist(this.kratos.position.x, this.kratos.position.y, this.keys[i].x, this.keys[i].y) < 20 && this.keys[i].collect === 0){
          this.keys[i].collect = 1;
          this.kratos.score++;
        }
      }
      for(var j = 0; j < this.potions.length; j++){
        if(dist(this.kratos.position.x, this.kratos.position.y, this.potions[j].x, this.potions[j].y) < 20 && this.potions[j].collect === 0){
          this.potions[j].collect = 1;
          this.kratos.health++;
        }
      }
    }

    final1itemCollision(){
      for(var j = 0; j < finalPotions.length; j++){
        if(dist(this.kratos.position.x, this.kratos.position.y, finalPotions[j].x, finalPotions[j].y) < 20 && finalPotions[j].collect === 0){
          finalPotions[j].collect = 1;
          this.kratos.health++;
        }
      }
    }

    final2itemCollision(){

      for(var j = 0; j < finalPotions2.length; j++){
        if(dist(this.kratos.position.x, this.kratos.position.y, finalPotions2[j].x, finalPotions2[j].y) < 20 && finalPotions2[j].collect === 0){
          finalPotions2[j].collect = 1;
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
    final1combat(){
      for(var i = 0; i < finalEnemies.length; i++){
        stroke(0,255,0)
        if(this.kratos.dir === 1)
        {
          if(dist(this.kratos.position.x+30, this.kratos.position.y, finalEnemies[i].x, finalEnemies[i].y) < 40 && this.kratos.swing === 1) {
  
            if(this.kratos.timer % 25 === 0 && finalEnemies[i].health > 0) {
              finalEnemies[i].health--;
              finalEnemies[i].knockback = 1;
              finalEnemies[i].hurt = 1;
            }
          }
        }
        if(this.kratos.dir === -1) {
          
          if(dist(this.kratos.position.x-30, this.kratos.position.y, finalEnemies[i].x, finalEnemies[i].y) < 40 && this.kratos.swing === 1) {
  
            if(this.kratos.timer % 5 === 0 && finalEnemies[i].health > 0) {
              //finalEnemies[i].x -= 10;
              //finalEnemies[i].y += 8;
                finalEnemies[i].health--;
                finalEnemies[i].knockback = -1;
                finalEnemies[i].hurt = 1;
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
      if(this.kratos.score < 9){

        this.drawBackground();
        var lava = new fireBullet();
        
        this.kratos.draw();
        this.kratos.animate();
        this.kratos.move();
        this.platformCollision();
        this.itemCollision();
        this.combat();
        // this.zeus.draw();
        // this.zeus.state[this.zeus.currState].execute(this.zeus);
        // //Fix combat issues
        // this.zeusCombat();
        targetX = this.kratos.position.x;
        targetY = this.kratos.position.y;
      }
      else if(this.kratos.score === 9 && this.finalBoss === 0){
        
        this.kratos.position.x = 320;
        targetX = this.kratos.position.x;
        targetY = this.kratos.position.y;
        this.kratCut.position.x = targetX - 200;
        this.kratCut.position.y = targetY + 50;
        this.zeusCut.position.x = targetX + 50;
        this.zeusCut.position.y = targetY - 150;

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
        //cutscene code
        //this.drawBackground();
        this.timer++;
        if(this.timer < 100){
          print("cutting to scene");
          fill(0);
          rect(targetX - 200 + this.timer * 4, targetY - 200, 400, 400);
          noFill();
        }
        
        if(this.timer > 100 && this.timer < 300){
          this.kratCut.swing = 0;
          this.kratCut.walkani = 0;
          fill(255);
          rect(targetX - 200, targetY + 150, 400, 200);
          noFill();
          textSize(10);
          this.kratCut.draw();
          this.zeusCut.draw();
          this.kratCut.animate();
          fill(0, 0, 255);
          text("Kratos: Boi you my dad and u abandoned me", targetX - 200, targetY + 150, 400, 200);
          noFill();
        }
        else if(this.timer > 300 && this.timer < 600){
          this.kratCut.draw();
          //this.kratCut.animate();
          this.zeusCut.specialAttack();
          this.zeusCut.animate1();
          fill(255);
          rect(targetX - 200, targetY + 150, 400, 200);
          noFill();
          textSize(10);
          fill(255, 0, 0);
          text("Zeus: Son I left so that you wouldn't kill me as you were prophesized to", targetX - 200, targetY + 150, 400, 200);
        }
        else if(this.timer > 600 && this.timer < 1000){
          this.kratCut.swing = 0;
          this.kratCut.walkani = 0;
          fill(255);
          rect(targetX - 200, targetY + 150, 400, 200);
          noFill();
          textSize(10);
          fill(255, 0, 255);
          text("Kratos: I GUESS I HAVE NO CHOICE BUT TO KILL YOU", targetX - 200, targetY + 150, 400, 200);
          fill(255, 0, 255);
          text("Zeus: I GUESS I HAVE NO CHOICE BUT TO KILL YOU", targetX - 200, targetY + 170, 400, 200);
          this.kratCut.draw();
          this.zeusCut.specialAttack();
          this.kratCut.animate();
          this.zeusCut.animate1();
          
        }
        if(this.timer == 1000){
          this.finalBoss = 1;
        }
      }
      else{
        print("final battle 1");
        this.drawFinalBackground();
        if(this.inFinal === 0){
          this.kratos.position.x = 40;
          this.kratos.position.y = 220;
          this.zeus.position.x = 40;
          this.zeus.position.y = 100;
          this.inFinal = 1;
        }
        print(this.kratos.position.x);
        print(this.kratos.position.y);
        this.kratos.draw();
        this.kratos.animate();
        this.kratos.move();
        targetX = this.kratos.position.x;
        targetY = this.kratos.position.y;
        this.final1platformCollision();
        this.final1itemCollision();
        this.final1combat();
        this.zeus.draw();
        this.zeus.state[this.zeus.currState].execute(this.zeus);
        this.zeusCombat();
      }
    }
    play2(){
      if(this.kratos.score < 9){

        this.drawBackground();
        var lava = new fireBullet();
        
        this.kratos.draw();
        this.kratos.animate();
        this.kratos.move();
        this.platformCollision();
        this.itemCollision();
        this.combat();
        // this.zeus.draw();
        // this.zeus.state[this.zeus.currState].execute(this.zeus);
        // //Fix combat issues
        // this.zeusCombat();
        targetX = this.kratos.position.x;
        targetY = this.kratos.position.y;
      }
      else if(this.kratos.score === 9 && this.finalBoss === 0){
        
        this.kratos.position.x = 320;
        targetX = this.kratos.position.x;
        targetY = this.kratos.position.y;
        this.kratCut.position.x = targetX - 200;
        this.kratCut.position.y = targetY + 50;
        this.zeusCut.position.x = targetX + 50;
        this.zeusCut.position.y = targetY - 150;

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
        //cutscene code
        //this.drawBackground();
        this.timer++;
        if(this.timer < 100){
          print("cutting to scene");
          fill(0);
          rect(targetX - 200 + this.timer * 4, targetY - 200, 400, 400);
          noFill();
        }
        
        if(this.timer > 100 && this.timer < 300){
          this.kratCut.swing = 0;
          this.kratCut.walkani = 0;
          fill(255);
          rect(targetX - 200, targetY + 150, 400, 200);
          noFill();
          textSize(10);
          this.kratCut.draw();
          this.zeusCut.draw();
          this.kratCut.animate();
          fill(0, 0, 255);
          text("Kratos: Boi you my dad and u abandoned me", targetX - 200, targetY + 150, 400, 200);
          noFill();
        }
        else if(this.timer > 300 && this.timer < 600){
          this.kratCut.draw();
          //this.kratCut.animate();
          this.zeusCut.specialAttack();
          this.zeusCut.animate1();
          fill(255);
          rect(targetX - 200, targetY + 150, 400, 200);
          noFill();
          textSize(10);
          fill(255, 0, 0);
          text("Zeus: Son I left so that you wouldn't kill me as you were prophesized to", targetX - 200, targetY + 150, 400, 200);
        }
        else if(this.timer > 600 && this.timer < 1000){
          this.kratCut.swing = 0;
          this.kratCut.walkani = 0;
          fill(255);
          rect(targetX - 200, targetY + 150, 400, 200);
          noFill();
          textSize(10);
          fill(255, 0, 255);
          text("Kratos: I GUESS I HAVE NO CHOICE BUT TO KILL YOU", targetX - 200, targetY + 150, 400, 200);
          fill(255, 0, 255);
          text("Zeus: I GUESS I HAVE NO CHOICE BUT TO KILL YOU", targetX - 200, targetY + 170, 400, 200);
          this.kratCut.draw();
          this.zeusCut.specialAttack();
          this.kratCut.animate();
          this.zeusCut.animate1();
          
        }
        if(this.timer == 1000){
          this.finalBoss = 1;
        }
      }
      else{
        print("final battle 1");
        this.drawFinalBackground2();
        if(this.inFinal === 0){
          this.kratos.position.x = 40;
          this.kratos.position.y = 220;
          this.zeus.position.x = 40;
          this.zeus.position.y = 100;
          this.inFinal = 1;
        }
        print(this.kratos.position.x);
        print(this.kratos.position.y);
        this.kratos.draw();
        this.kratos.animate();
        this.kratos.move();
        targetX = this.kratos.position.x;
        targetY = this.kratos.position.y;
        this.final2platformCollision();
        this.final2itemCollision();
        this.final2combat();
        this.zeus.draw();
        this.zeus.state[this.zeus.currState].execute(this.zeus);
        this.zeusCombat();
      }
     
    }
  }