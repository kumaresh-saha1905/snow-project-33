
 const Engine = Matter.Engine;
 const World= Matter.World;
 const Bodies = Matter.Bodies;
   var umb;//it is the name of the variable of umbrella with the boy
   var bg;
   var cloud;
   var thunder;
   var slide;
   var imag;
 var drops=[];
 var maxDrops=100;
  var thunderCreatedFrame=0; // question
 function preload(){
   bg=loadImage("snow2.jpg");
   cloud=loadImage("cloud.png");
   imag=loadImage("SNOW BEST.png")
 }
 
 function setup(){
     
     var canvas = createCanvas(1200,800);
     engine = Engine.create();
     world = engine.world;
     
     slide=new slid(200,200);
     umb=new umbrella(800,705.0);
     rand=Math.round(random(1,4))
     if(frameCount%60===0){
         thunderCreatedFrame=frameCount;
         thunder=createSprite(random(10,370),random(10,30),10,10);
         switch(rand){
             case 1: thunder.addImage(cloud);
                    
                  
             break;
             case 2: thunder.addImage(cloud);
             
             break;
             case 3 :thunder.addImage(cloud);
             
             break;
             case 4 : thunder.addImage(cloud);
             
             
             break;

             default:break;
         }
         thunder.scale=random(0.3,0.6);
         thunder.velocityX=random(-6,-10);
     }
     if(thunder.position.x=710  || thunder.position.x>710){
      rand=Math.round(random(1,4))
      if(frameCount%60===0){
          thunderCreatedFrame=frameCount;
          thunder=createSprite(random(10,370),random(10,30),10,10);
          switch(rand){
              case 1: thunder.addImage(cloud);
                     
                   
              break;
              case 2: thunder.addImage(cloud);
              
              break;
              case 3 :thunder.addImage(cloud);
              
              break;
              case 4 : thunder.addImage(cloud);
              
              
              break;
 
              default:break;
          }
          thunder.scale=random(0.3,0.6);
          thunder.velocityX=random(6,10);
      }
     }
 }
 
 function draw(){
     Engine.update(engine) ;
 
     background(bg);
     umb.display();
      slide.display();
 
     for(var i=0; i<maxDrops; i++){
         drops.push(new CreateDrop(random(0,1200),random(0,400)));
         drops[i].display();//question
         drops[i].update();//question
  
      }
     
      
     drawSprites();
     
 }   
 function clouds(){
   
 }
 
 