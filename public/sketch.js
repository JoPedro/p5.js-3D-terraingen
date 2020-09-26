let cols, rows;
let scl = 20;
let w = 600;
let h = 600;
let zTable = [[]];

function makeArray(w, h, val) {
    var arr = [];
    for(let i = 0; i < h; i++) {
        arr[i] = [];
        for(let j = 0; j < w; j++) {
            arr[i][j] = val;
        }
    }
    return arr;
}

function setup() {
    createCanvas(600, 600, WEBGL);
    cols = w / scl;
    rows = h / scl;
    zTable = makeArray(cols, rows, 0)
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            zTable[x][y] = random(-10, 10);
        }
    }
}

function draw() {
    background(225);

    translate(width / 2, height / 2);
    rotateX(PI/3);

    translate(-width, -height);
    for (let y = 0; y < rows; y++) {
        beginShape(TRIANGLE_STRIP);
        for (let x = 0; x < cols; x++) {
            vertex(x * scl, y * scl, zTable[x][y]);
            vertex(x * scl, (y + 1) * scl, zTable[x][y + 1]);
        }
        endShape();
    }
}

function mouseDragged() {
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            if (mouseY < pmouseY) {
                if ((mouseX - x * scl > 5) && (mouseY - y * scl > 5)) {
                    zTable[x][y] += 5;
                } 
            }
            else {
                if ((mouseX - x * scl > 5) && (mouseY - y * scl > 5)) {
                    zTable[x][y] -= 5;
                }
            }
        }
    }
}