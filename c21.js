var a,b,c

function setup() {

  createCanvas(800,400);
  A=createSprite(400, 200, 80, 50);
  A.shapeColor='yellow'

B= createSprite(100,200,50,50)
B.shapeColor='yellow'

C=createSprite(200,200,40,40)
C.shapeColor='yellow'
}

function draw() {
  background('green');  

  
  if(touching(A,C)){

    A.shapeColor='blue'
    C.shapeColor='blue'

  }else{

    A.shapeColor='yellow'
    C.shapeColor='yellow' 

  }

  A.x=mouseX
  A.y=mouseY
  drawSprites();
}



