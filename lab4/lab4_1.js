class Shape {

    constructor(x, y) {
        this.x = x;
        this.y =y;
    }

    move(delta) {
        this.x += delta;
        this.y += delta;
    }

    moveToZero() {
        this.x = 0;
        this.y = 0;
    }

}

var aShape = new Shape(1,2);

aShape.move(5);

console.log(aShape.x);