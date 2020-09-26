let terrain;

function setup() {
    createCanvas(600, 600, WEBGL);
    terrain = new Terrain(600, 600, 20);
}

function draw() {
    background(225);

    translate(width / 2, height / 2);
    rotateX(PI/3);
    
    translate(-width, -height);
    terrain.show();
}

function mouseDragged() {
    terrain.grow();
}