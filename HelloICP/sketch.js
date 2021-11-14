let x, y;  //x, y座標
let A;  //振幅
let w;  //角周波数
let p;  //初期位相
let t;  //経過時間
let rad;  //ラジアン
 
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);  
  noStroke();
  fill(0);
 
  A = min(windowWidth/TWO_PI, windowHeight/PI);  //振幅を設定
  w = 1.0;    //角周波数を設定
  p = 0.0;    //初期位相を設定
  t = 0.0;    //経過時間を初期化
	
	rad = TWO_PI/180.0;
}
 
function draw() {
  x = A*sin(w*t - p)*2;
  y = -A*sin(w*t*2 - p);
  ellipse(x + width/2, y + height/2, 5, 5);  //円を描く
 
  t += rad;    //時間を進める
}