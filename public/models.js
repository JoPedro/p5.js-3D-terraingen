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

    // Click and drag to grow mounts
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