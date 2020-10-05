let easycam;

function setup() {
    createCanvas(600, 600, WEBGL);

    easycam = createEasyCam();
    document.oncontextmenu = () =>false;

    noStroke();
    ambientMaterial(250);
}

function draw() {
    background(225);

    // Lights
    pointLight(255, 255, 255, 0, 0, 400);
    ambientLight(244, 122, 158);

    box();

    easycam.beginHUD();
    myCursor();
    easycam.endHUD();

    //Implement Infinite Plane to fix XYZ axes of the cursor
}

// XYZ axis color-coded arrows
function myCursor() {
    const x = mouseX + 20;
    const y = mouseY + 20;

    // X axis arrow shaft
    push();
    fill(255, 0, 0);
    translate(x + 10, y, 0);       
    angleMode(DEGREES);
    rotateZ(90);
    cylinder(1, 20);
    pop();

    // // X axis arrow head
    // push();
    // fill(255, 0, 0);
    // translate(x + 20, y, 0);       
    // angleMode(DEGREES);
    // rotateZ(270);
    // cone(2, 5);
    // pop();

    // Y Axis arrow shaft
    push();
    fill(0, 255, 0);
    translate(x, y - 10, 0);
    cylinder(1, 20);
    pop();

    // // Y Axis arrow head
    // push();
    // fill(0, 255, 0);
    // translate(x, y + 20, 0);
    // cone(2, 5);
    // pop();

    // Z axis arrow shaft
    push();
    fill(0, 0, 255);
    translate(x, y, -20);   
    angleMode(DEGREES);
    rotateX(90);
    cylinder(1, 20);
    pop();

    // // Z axis arrow head
    // push();
    // fill(0, 0, 255);
    // translate(x, y, 20);       
    // angleMode(DEGREES);
    // rotateX(90);
    // cone(2, 5);
    // pop();
}
