let cursor = new Cursor();

function setup() {
    createCanvas(600, 600, WEBGL);
    createEasyCam();
    document.oncontextmenu = ()=>false;

    noStroke();
    ambientMaterial(250);
}

function draw() {
    background(225);

    // Lights
    pointLight(255, 255, 255, 0, 0, 400);
    ambientLight(244, 122, 158);

    // Cursor
    cursor.show();
}
