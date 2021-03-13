class Box{

constructor(x,y){

 var  options={
        restitution:.5
      }
      
     
      this.body=Bodies.rectangle(x,y,60,60,options);
      World.add(myWorld,this.body)


}

display(){
push()
translate(this.body.position.x,this.body.position.y)
//angleMode(RADIANS);
rotate(this.body.angle)  
rectMode(CENTER)
fill("purple")
rect(0,0,60,60);
pop()


}

}