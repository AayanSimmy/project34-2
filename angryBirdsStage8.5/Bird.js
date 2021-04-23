class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/energy.png");
  
    this.trajectory =[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
   
    if(this.body.velocity.x > 20 && this.body.position.x > 300 ){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
  

    
  }
}
