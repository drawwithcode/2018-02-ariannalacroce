function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,228,196);
  angleMode(DEGREES);
  // put setup code here
}

function draw() {

  strokeWeight(1.7);

  push();
  translate(width/2,height/2);
  stroke(lerpColor(color('#4156C5'), color('#CD69C9'),frameCount/120));
  noFill();
  line(-200,0,cos(frameCount*4)*-200,sin(frameCount*4)*-200);
  pop();


  push();
  stroke(255,228,196);
  translate(width/2,height/2);
  line(-200,200,cos(frameCount*4)*-200,sin(frameCount*4)*200);
  pop();


 if (frameCount == 90) {
     noLoop();
   }
  // put drawing code here
}
