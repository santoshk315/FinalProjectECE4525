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
      this.score = 9;
      this.rage = 0;
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
      //tint(255, 0, 165);
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