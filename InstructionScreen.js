

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
      this.kratMove = new Kratos(260, 40, 20);
  
      this.kratAttack = new Kratos(260, 60, 20);
      this.timer = 0;
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
        this.zeus.position.x += -5;
        this.zeusbolt.x -= 5;
      }
      else{
        instructionsS = false;
        //introS = true;
        this.kratos.position.x = 100;
        this.zeus.position.x = 240;
        this.zeusbolt.x = 290;
        
      }
    }
    //State machine that controls instructions panel
    drawInstructs(){
      //Base screen that allows choices from various options
      this.timer++;
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
        text("Instructions", 110, 35);
        textFont('Helvetica');
        
        this.kratMove.draw();
        if(this.timer % 30 < 15){
          this.kratMove.position.x++;
        }
        else{
          this.kratMove.position.x--;
        }
        this.kratMove.walkani = 1;
        this.kratMove.animate();
        this.kratAttack.swing = 1;
        this.kratAttack.draw();
        this.kratAttack.animate();
        var p = new Potion(260, 90);
        p.draw();
        p.animate();
        var k = new Key(300, 90);
        k.draw();
        k.animate();
        textSize(7.5);
        text("Use the Arrow Keys to move Kratos throughout the world\n\nUse the spacebar to attack enemies\n\nCollect Keys for points and potions to restore health.", 110, 40, 150, 100);
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
  