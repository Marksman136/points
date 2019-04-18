//point = [];
let point;
let x;
let y;
let speed;
let proximity;


function setup (){
createCanvas(800,800);
background(150, 200, 200);

//for(let i = 0; i<200; i++){
//point[i] = (new Points(random(0,800), random(0,800)));
//}

point = new Points(random(0,800),random(0,800), 0.02, 50);
}



function draw() {

//for(let i = 0; i<point.length;i++ ){
//point.display();
//
//}

point.display();
point.update();
}



class Points {

constructor (x, y, speed, proximity) {
this.x = x;
this.y = y;
this.speed = speed;
this.proximity = proximity;
this.xoff = random(5000);
this.yoff = random(5000);


}
display(){

fill(0,220,100, 75);
ellipse(this.x, this.y, 50, 50);
noStroke();


}

update(){

this.x = noise(this.xoff) * (height);
this.x = this.x + width/6;
this.xoff += this.speed;

this.y = noise(this.yoff) * (height);
this.y = this.y + width/6;
this.yoff += this.speed;



}


}