class Rope{

 constructor(body1,point2){
    var options={

        bodyA:body1,
        pointB:point2,
        stiffness:.5,
        length:200
      
      }
      
     this.sling=Matter.Constraint.create(options);
      World.add(myWorld,this.sling)

 }  
 
 display(){
 strokeWeight(4)


 line(this.sling.bodyA.position.x, this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y)    
 }
 



}