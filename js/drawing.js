var img;
var videoScale;
var capture;
var h,s,b;
var mode = 1;
var myCanvas;
var e;

var pos = [2];

function setup() {
  colorMode(HSB,255,255,255);
  myCanvas = createCanvas(640, 480);
  myCanvas.parent('tabula-rasa');
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();
  noStroke();
  background(255);
  fill(0);
  videoScale = 6;
  b = 200;
  frameRate(30);
}

function draw() {
  background(255);
  capture.loadPixels();
  colorControl();
  console.log()

  if (mode == 1) {
  // Variable layer
    for (var x = 0; x < capture.width; x += videoScale)
    {
      for (var y = 0; y < capture.height; y += videoScale)
      {

        var location = x + y*capture.width;
        // noStroke();

        var darkness = ((255 - capture.pixels[location*4]) / 255);
        var radius = videoScale * darkness;
        // var fillColor = color(r,g,b);
        // fill(fillColor);
        fill(h,s,b);
        ellipse(x,y,radius,radius);

      }
    }

    //change video scale 



  } else {
      image(capture, 0,0,640,480);
  }

}//end draw loop


function colorControl() {
  var hue = (map(mouseY, 0, capture.height, 0, 255));
  var saturation = (map(mouseX,0,capture.width,50,255));
  //var brightness = (map(mouseY,0,capture.height, 255,0));

  h = hue;
  s = saturation;

  return h,s;

}

function keyTyped() {

  if (key == ' ') {
    mode *= -1;
  }

  if (key == 's') {
    saveImage();
  }
}

function keyPressed() {
  //control dot size

  if (keyCode == UP_ARROW) {
    videoScale += 1;
  }
  if (keyCode == DOWN_ARROW) {
    videoScale -= 1;
  }

  //control darkness

  if (keyCode == LEFT_ARROW) {
    b -= 10;
  }
  if (keyCode == RIGHT_ARROW) {
    b += 10;
  }

}

function saveImage() {
  save('canvas-drawing.jpg');
}
