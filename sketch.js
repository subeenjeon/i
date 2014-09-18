function setup() {
	createCanvas(640, 400);
	
	backgroundColor = color(0, 0, 255);
	fillColor = color(0, 0, 255);
}

function draw() {
	background(backgroundColor);
	
	fillColor = color(
		Math. random() *255,
		Math. random() *255, 
		Math. random() *255, 
		Math. random() *255);

	mouseColor = color(
		mouseX / 640 * 128 + Math. random() * 128,
		mouseY / 480 * 255, 0);

//fill(fillColor);///
//rect(100, 100, 100, 100);///

	fill(fillColor);
	rect(100, 100, 100, 100);
}