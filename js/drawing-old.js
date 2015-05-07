var img, boxSize;
var smallPoint, largePoint;
var pixels;

function setup() {
  createCanvas(600, 400);

  img = loadImage("img/placeholder.jpg");
  smallPoint = 4;
  largePoint = 40;
  imageMode(CENTER);
  noStroke();
  boxSize = 4;
  background(255);
  frameRate(60);
}

function draw() {
	// // Drawing code goes here
	// var pointillize = map(mouseX, 0, width, smallPoint, largePoint);
	//   var x = floor(random(img.width));
	//   var y = floor(random(img.height));
	//   var pix = img.get(x, y);
	//   fill(pix, 128);
	//   ellipse(x, y, 4, 4);
  background(255);

  var mX = mouseX;
  var mY = mouseY;

  //store origin coordinates 
  var originX = [];
  var originY = [];
  console.log(mX,mY);

  img.loadPixels();

  for (var x = 0; x < img.width; x += boxSize)
  {
    for (var y = 0; y < img.height; y += boxSize)
    {
      // now we have to compute our "location" in the array
      // images in Processing are technically one dimensional
      // but we normally think of images in terms of being two dimensional
      // so we can do a little math to convert the x & y position to a single dimensional position
      var location = x + y*img.width;
      var d = dist(x,y,mX,mY);

      if (d < 30) {
        fill(img.pixels[location], 255);
      } else {
        fill(img.pixels[location], 128);
      }

      noStroke();
      ellipse(x,y,boxSize,boxSize);



    }
  }



}//end draw loop
