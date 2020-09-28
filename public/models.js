// XYZ axis color-coded arrows
class Cursor {
    show() {
        const x = mouseX - width / 2;
        const y = mouseY - height / 2;

        push();
        noFill();
        plane(width, height);
        pop();

        // X axis arrow shaft
        push();
        fill(255, 0, 0);
        translate(x - 10, y, 0);       
        angleMode(RADIANS);
        rotateZ(PI / 2);
        cylinder(1, 20);
        pop();

        // X axis arrow head
        push();
        fill(255, 0, 0);
        translate(x - 20, y, 0);       
        angleMode(RADIANS);
        rotateZ(PI / 2);
        cone(2, 5);
        pop();

        // Y Axis arrow shaft
        push();
        fill(0, 255, 0);
        translate(x, y - 10, 0);
        cylinder(1, 20);
        pop();

        // Y Axis arrow head
        push();
        fill(0, 255, 0);
        translate(x, y - 20, 0);
        angleMode(RADIANS);
        rotateX(PI);
        cone(2, 5);
        pop();

        // Z axis arrow shaft
        push();
        fill(0, 0, 255);
        translate(x, y, -10);       
        angleMode(RADIANS);
        rotateX(PI / 2);
        cylinder(1, 20);
        pop();

        // Z axis arrow head
        push();
        fill(0, 0, 255);
        translate(x, y, -20);       
        angleMode(RADIANS);
        rotateY(PI);
        rotateX(PI / 2);
        cone(2, 5);
        pop();       
    }
}

// 3D editable terrain class
class Terrain {
    constructor(w, h, scl) {
        this.scl = scl;
        this.cols = w / scl;
        this.rows = h / scl;
        this.zTable = makeArray(this.cols, this.rows, 0);
    }

    // Make the triangle mesh-like structure
    show() {
        for (let y = 0; y < this.rows; y++) {
            beginShape(TRIANGLE_STRIP);
            for (let x = 0; x < this.cols; x++) {
                vertex(x * this.scl, y * this.scl, this.zTable[x][y]);
                vertex(x * this.scl, (y + 1) * this.scl, this.zTable[x][y + 1]);
            }
            endShape();
        }
    }

    // Click and drag to grow mounts (update after 3D picking implementation)
    grow() {
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                if (((mouseX - x * this.scl < 50) && (mouseX - x * this.scl > -50)) && ((mouseY - y * this.scl < 50) && (mouseY - y * this.scl > -50))) {
                    this.zTable[x][y] += 2;
                }
            }
        }
    }
}

// Two-dimensional array constructor
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