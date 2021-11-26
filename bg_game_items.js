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