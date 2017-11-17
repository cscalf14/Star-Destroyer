var img
var sound
var pew
var ufo
var ship
function preload() {
sound = loadSound("6dogs.mp3");
pew = loadSound("pew.mp3");
img = loadImage("Star.jpg");
ufo = loadImage("ufo.png")
ship = loadImage("fighter.png")
}

// Arrays for the X and Y positions of the Aliens
var alspeed = 1

var sphereCoordsX = [0, 0, 0, 0, 0];

var sphereCoordsY = [0, 0, 0, 0, 0];



// Other variables

var sphereDia = 25, speed = 1, score = 0;

var end = false, shoot = false;




var ship = {

    x : 30,

    y : 560,

    x2 : 0,

    y2 : 530,

    x3 : 30,

    y3 : 560,

}

var aliens = {

    x : [0,0,0,0,0],

    y : [0,0,0,0,0],



}

function setup() {
 sound.loop();

  // Create an area that is not the full screen

  createCanvas(600, 620);



  // set the x position of each alien randomly

  for( var i = 0; i < 5; i++){

    aliens.x[i] = random(0, width-75);

      print("x Coords =" + aliens.x);

    // The variable width is the width of the Canvas

    // We would use height for the height of the Canvas

  }

  textSize(40);

  // Setting this for the size the score will be displayed at


}


function draw() {

  //background(255);

 image(img, 0, 0);

  drawSpheres();

  moveSpheres();

  drawShip();

  if (shoot){

    checkShoot();


  }



   textAlign(CENTER);

    fill (255,0,0);

   text("Score:" + score, 310, 320);

   endCheck();

    if (end == true){

    background(0);

    fill(255,0,0);

    text ("Game Over! Click To Restart", 310, 320);

    text ("Final Score:" + score, 310, 365);

    }


}



  // Write a line to Display the Score,

  // near the top, cenetered would be best



function drawSpheres(){

  fill(0,255,0);

    for (var i = 0; i < 5; i++) {
      image(ufo,aliens.x[i],aliens.y[i], 75, 50);
  }
}
  // you should use a loop here.










function moveSpheres(){

  // Move Spheres down the screen,

    for (var i = 0; i < 5; i++) {




        aliens.y[i] += alspeed;

  // you should use a loop here.

    }

  // i.e. change sphereCoordsY

}



function drawShip(){

fill(200,00,00)

image(ship,mouseX, 500, 80, 80);

}



function checkShoot(){

  strokeWeight(3);

  stroke(255,0,0);

  fill(255,0,0);


  line(mouseX+40, 530, mouseX+40, 0);

    pew.play()

   for (var i = 0; i < 5; i++){

    if (mouseX+40 > aliens.x[i] && mouseX < aliens.x[i]+65) {

    aliens.x[i] = random(0, width-75) ;

    aliens.y[i] = 0;

    score++;
       if (score%10==0)
    alspeed = alspeed+.5


  }

   }



  shoot = false;

  strokeWeight(1);

  stroke("limeGreen");

}


function mousePressed(){

  shoot = true;

     if (end == true){

    end = false;

         score = 0;
		 alspeed = 1
         print(end);



          for (i = 0; i < 5; i++) {

      aliens.x[i] = random (0, 600);

              aliens.y[i]=0;



          }



         //Make sure print works to check for if running


}



}



function endCheck(){

   for (var i = 0; i < 5; i++){

    if (aliens.y[i] > 550) {

       end = true;

   }



   }


}
