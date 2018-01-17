//for gradient background
var Y_AXIS = 1;
var X_AXIS = 2;
var c1, c2;
var px,py;

function setup() {
  var banner = createCanvas(640,480);
  banner.parent('banner');

  // Define colors
  c1 = color('#191654');
  c2 = color('#4b6cb7');
  setGradient(0, 0, width, height, c1, c2, Y_AXIS);

}

function draw(){
  if (mouseIsPressed){
    px = mouseX;
    py = mouseY;
    star(mouseX, mouseY, 3, 7, 5);
    noStroke();
    fill('#A7BFE8');
  }


}

function star(x, y, radius1, radius2, npoints) {//copied from https://p5js.org/examples/form-star.html
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }
  else if (axis == X_AXIS) {  // Left to right gradient
    for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  }
}//https://p5js.org/examples/color-linear-gradient.html
