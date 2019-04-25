let x;
let y;
let speed;
let proximity;
other = [];
points = [];



function setup() {
  createCanvas(1200, 600);
  for (let i = 0; i < 20; i++) {
    points.push(new Points(random(0,1200),random(0,600), 0.005, 100));

  }
}


function draw() {
background(0);
strokeWeight(2);


stroke(150,30,100);
fill(110,50,200, 100);


// for (let i = 0; i < points.length; i++) {
//   points[i].display();
// }


for (let i = 0; i < points.length; i++) {

//1.SOLIS - NEKUSTĪGI OBJEKTI
points[i].display();
points[i].update();

//2.SOLIS - KUSTĪGI OBJEKTI

for (let j = 0; j < points.length; j++) {
if (i != j && points[i].isNear(points[j])) {
line(points[i].x, points[i].y, points[j].x, points[j].y);

}
}
}

}
class Points{
  constructor(x, y, speed, proximity){

  this.x = x;
  this.y = y;
  this.speed = speed;
  this.proximity = proximity;
  this.xoff = random(50000);
  this.yoff = random(50000);
  }

  display(){

  ellipse(this.x,this.y, 40, 40);
  }


update() {
this.x = noise(this.xoff) * (height);
this.x += width/4; // this is here just to offset (to "center") the x coordinate.
this.xoff += this.speed;
this.y = noise(this.yoff) * (height);
this.yoff += this.speed;
}

isNear(other) {
let d = dist(this.x, this.y, other.x, other.y);
return d < this.proximity;
}


}
