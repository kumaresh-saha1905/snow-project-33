class slid{
    constructor(x,y){
    var opt={
        'isStatic':true,
        'density':1
        
    }
     this.x=x;
     this.y=y;
     this.radius=10;
     this.body=Bodies.circle(x,y,30,opt);
     this.image=loadImage("00L.png");
     World.add(world,this.body);
}
        display(){
          var pos=this.body.position;
          imageMode(CENTER);
         image(this.image,pos.x+20-40-60,pos.y+80+70+30+190,500-60-30,200+10);
        }
 }
 