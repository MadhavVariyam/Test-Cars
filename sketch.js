var car, wall;
var speed, weight;
var score
function setup() {
  createCanvas(1600,400);

  car = createSprite(50,200,100,25)
  speed=random(55,90);
  weight=random(400,1500);

  wall = createSprite(1500,200,50,height/2)
  wall.shapeColor = (80,80,80)
  car.velocityX = speed;

  

}




function draw() {
  background(255,255,255);  


  if (isTouching(car,wall))
  {car.velocityX = 0;
  var defomataion = 0.5 * weight * speed * speed/22500;
    if(defomataion>180)
    {
      car.shapeColor=color(255,0,0);
    }

    if (defomataion<180 && defomataion>100)
    {
        car.shapeColor = color(230,230,0)
    }

    if(defomataion<100)
    {
      car.shapeColor=color(0,255,0)
    }
  }
  
  if(wall.x)

  drawSprites();
} 



function isTouching(object1,object2) {
if (object1.x -  object2.x < object2.width/2 + object1.width/2
     && object2.x - object1.x < object2.width/2 + object1.width/2
     && object1.y -  object2.y < object2.height/2 + object1.height/2
     && object2.y - object1.y < object2.height/2 + object1.height/2)
    return true;
} 



