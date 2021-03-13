const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies


function setup() {
 
createCanvas(1500,700)

myEngine=Engine.create()
myWorld=myEngine.world

ground1=new Ground(400,500,1200,20)

b1=new Box(500,450)
b2=new Box(500,400)
b3=new Box(500,350)
b4=new Box(500,300)
b5=new Box(500,250)
b6=new Box(500,200)
b7=new Box(500,150)
b8=new Box(500,100)

b9=new Box(600,450)
b10=new Box(600,400)
b11=new Box(600,350)
b12=new Box(600,300)
b13=new Box(600,250)
b14=new Box(600,200)

b15=new Box(700,450)
b16=new Box(700,400)
b17=new Box(700,350)
b18=new Box(700,300)
b19=new Box(700,250)
b20=new Box(700,200)

ball1=new Ball(400,200)

rope1=new Rope(ball1.body,{x:400,y:100})

}

function draw() {
 
background("orange")

Engine.update(myEngine)

ground1.display()

b1.display()
b2.display()
b3.display()
b4.display()
b5.display()
b6.display()
b7.display()
b8.display()

b9.display()
b10.display()
b11.display()
b12.display()
b13.display()
b14.display()

b15.display()
b16.display()
b17.display()
b18.display()
b19.display()
b20.display()

ball1.display()

rope1.display()

}

function mouseDragged(){

ball1.body.position.x=mouseX
ball1.body.position.y=mouseY

}