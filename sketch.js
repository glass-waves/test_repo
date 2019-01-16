


function setup() {

	createCanvas(windowWidth,windowHeight);


}

function draw() {

var jitter = random(0, 3)	


background(255);
var degrees = map(mouseX, 0, windowWidth, 0, PI);

window.onresize = function(){createCanvas(windowWidth, windowHeight)};
var xsize = windowWidth;
var ysize= windowHeight;
fill(0);

beginShape();

vertex(jitter+40, ysize);
vertex(xsize,ysize);
vertex(xsize,jitter);

endShape();

push();
angleMode(DEGREES);
translate((xsize/2)-50, (ysize/2)-35,);
rotate(360-((frameCount*7)%720));
rectMode(CENTER);
rect(0, 0, 100, 100 );
pop();
}