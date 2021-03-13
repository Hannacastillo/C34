class Ball{

    constructor(x,y){
    
     var  options={
            restitution:.5,
            density:1

          }
          
         
          this.body=Bodies.circle(x,y,50,options);
          World.add(myWorld,this.body)
    
    
    }
    
    display(){
    push()
    //translate(this.body.position.x,this.body.position.y)
    //angleMode(RADIANS);
    //rotate(this.body.angle)  
    ellipseMode(RADIUS)
    fill("blue")
    ellipse(this.body.position.x,this.body.position.y,50,50);
    pop()
    
    
    }
    
    }