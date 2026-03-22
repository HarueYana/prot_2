let nowY = 400;

function setup() {
  createCanvas(600, 600);
  colorMode(HSB);
  angleMode(DEGREES);
}

function draw() {
  background(0, 30, 10);
  noStroke();
  fill(30, 70, 60); //胴体
  arc(550, 600, 300, 500, 180, 360);
  fill(0, 80, 30); //机
  rect(0, 540, 600, 70);
  fill(110, 30, 60); //顔・手
  circle(430, 350, 300);
  arc(350, 550, 150, 150, 180, 360);
  arc(500, 550, 150, 150, 180, 360);
  fill(0, 10, 80); //目
  arc(350, 350, 80, 80, 0, 180);
  arc(450, 350, 80, 80, 0, 180);
  fill(0,100,70);
  rect(350,430,100,10);
  
  fill(200,40,80);
  circle(450,440+second()*10,15);
  
  
  for (let a = 40; a <= 500; a = a + 50) { //パテ
    fill(0, 80, 50);
    rect(25, a, 250, 40);
    if (mouseY > a) {
      fill(0, 30, 10);
      rect(25, a, 250, 40);
      fill(25,30,70);
      circle
    }
    fill(30, 80, 80); //下バンズ
    arc(150, 520, 300, 200, 0, 180);
  }
  
  nowY = nowY + (mouseY - nowY) / 10;
  if(nowY < 350){
    nowY = 350;
  }
  if(nowY > 380){
    nowY = 380;
  }
  circle(350, nowY, 30);
  circle(450,nowY,30);
  
  if(mouseIsPressed){
  fill(30,80,80);
  arc(150,mouseY,300,200,180,360);
  fill(30,30,80);
  circle(120,mouseY-80,10);
  circle(100,mouseY-60,10);
  circle(140,mouseY-70,10);
  circle(160,mouseY-80,10);
  circle(180,mouseY-60,10);
  circle(200,mouseY-70,10);
  }
  
}


function keyPressed(){
  if(key === 's'){
    saveCanvas();
  }
}
