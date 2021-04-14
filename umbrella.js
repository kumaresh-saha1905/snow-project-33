class umbrella{
    constructor(x,y){
    var opt={
        'isStatic':true,
        'density':1
        
    }
     this.x=x;
     this.y=y;
     this.radius=10;
     this.body=Bodies.circle(x,y,30,opt);
     this.image=loadImage("SNOW BEST.png");
     World.add(world,this.body);
}
        display(){
          var pos=this.body.position;
          imageMode(CENTER);
         image(this.image,pos.x+200,pos.y-10,100,300-23);
        }
 }
 