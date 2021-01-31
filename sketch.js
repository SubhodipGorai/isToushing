var moving_o,fix_o,as,bs,cs;
function setup() {
  createCanvas(800,400);
  moving_o = createSprite(400, 200, 50, 50);
  moving_o.debug = true;
  fix_o = createSprite(200, 300, 50, 50);
  fix_o.debug = true;
  as = createSprite(100,200,50,50);
  as.shapeColor = "white";
  bs = createSprite(200,100,50,50);
  bs.shapeColor = "blue";
 cs = createSprite(500,360,50,50);
 cs.shapeColor = "red"


}

function draw() {
  background(5,55,55);  
  moving_o.x = mouseX;
  moving_o.y = mouseY;
  if(isTouching(moving_o,as)){
  as.shapeColor = "green";
  }
  else {
    as.shapeColor = "white";
  }
  if(isTouching(moving_o,bs)){
    bs.shapeColor = "lightblue";
    }
    else {
      bs.shapeColor = "blue";
    }
    if(isTouching(moving_o,cs)){
      cs.shapeColor = "lightgreen";
      }
      else {
        cs.shapeColor = "green";
      }
      if(isTouching(moving_o,fix_o)){
        fix_o.shapeColor = "yellow";
        }
        else {
          fix_o.shapeColor = "pink";
        }
  drawSprites();
}             
