var ax,ay;
var bx,by;
var cx,cy;
var x,y;


function setup() {
  createCanvas(400, 400);
  background(20);
  
  ax = width/2;
  ay = 0;
  bx = 0;
  by = height;
  cx = width;
  cy = height;
  
  x = random(width);
  y = random(height);
	
  strokeWeight(4);
  stroke(255,200,250);
  
  point(ax,ay);
  point(bx,by);
  point(cx,cy);
  
  
}

function draw() {
  
  for(var i = 0; i< 100;i++) {
  strokeWeight(1);
  
  
  var r = floor(random(3));
  
  switch(r) {
    case 0:
        stroke(255,0,0);
        x = lerp(x,ax,0.5);
        y = lerp(y,ay,0.5);
       
      	break;
    case 1:
        stroke(0,255,0);
        x = lerp(x,bx,0.5);
        y = lerp(y,by,0.5);
      	break;
    case 2:
        stroke(0,0,255);
        x = lerp(x,cx,0.5);
        y = lerp(y,cy,0.5);
      	break;
       }
    
    point(x,y);
  }

  
}
