//Create variables here


var dog,dogimg,foodS
function preload()
{
	//load images here

  happydog = loadImage('images/dogImg1.png')

  saddog = loadImage('images/dogImg.png')

}

function setup() {
  database=firebase.database()
	createCanvas(800, 800);
  dog = createSprite(400,400,20,20);
  dog.scale = 0.3;
  dog.addImage(saddog);



  database.ref('food').on("value",readStock);
  textSize(20); 
}


function draw() {  
background('orange');

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happydog);
}
  if (keyWentUp(UP_ARROW)){
    dog.addImage(saddog);
  }

 
  drawSprites();
  //add styles here
  text("Remaining food = " + foodS,200,200);

}
function readStock (data) {
  foodS=data.val()
}
function writeStock(x) {

  if (x<=0) {
    x=0
  } else {
    x=x-1
  }
  database.ref('/').update({
    food:x
  })
}

