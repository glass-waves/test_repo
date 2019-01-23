


function setup() {

	createCanvas(windowWidth,windowHeight);


}

function draw() {
var n;
var jitter = random(0, 3)	
n=n+1;
print(n);

background(255);
textSize(30);
text('supper', 100, 100);
var degrees = map(mouseX, 0, windowWidth, 0, PI);

window.onresize = function(){createCanvas(windowWidth, windowHeight)};
var xsize = windowWidth;
var ysize= windowHeight;
fill(0);

beginShape();

vertex(0, ysize);
vertex(xsize,ysize);
vertex(xsize,0);

endShape();

ellipseMode(CENTER);
ellipse(xsize/2-35, ysize/2-35, 100,100 );

strokeWeight(1);
noFill();

bezier((xsize/2)+30,ysize/2- 100, (xsize/2+50)+(n/2), (ysize/2-150)+n,(xsize/2+70)-(n/2), (ysize/2-100)-n,xsize/2+100, ysize/2-150 );
bezier((xsize/2)+40,ysize/2- 90, xsize/2+60, ysize/2-140,xsize/2+80, ysize/2-90,xsize/2+110, ysize/2-140 );
bezier((xsize/2)+50,ysize/2- 80, xsize/2+70, ysize/2-130,xsize/2+90, ysize/2-80,xsize/2+120, ysize/2-130 );
bezier((xsize/2)+30,ysize/2- 100, xsize/2+50, ysize/2-150,xsize/2+70, ysize/2-100,xsize/2+100, ysize/2-150 );
}