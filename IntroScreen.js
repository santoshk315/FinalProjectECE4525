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