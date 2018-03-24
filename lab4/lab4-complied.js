"use strict";

//Lab4
//var doubles = [1, 2, 3].map( item => item*2);

//doubles.forEach(item => console.log(item));

//var events = [1, 2, 3, 4, 5, 6].filter(v => v%2  === 0);

//var myFunction = v => v % 2 === 0;

//var events = [1, 2, 3, 4, 5, 6].filter(myFunction);

/*var aShape = {
    x: 4,
    y: 3,
    move: delta => this.x += delta,
    move1: function(delta) {
        this.x += delta;
    }
}

aShape.move(4);
console.log(aShape.x);*/

var aShape = {
    numbers: [1, 2, 3, 4, 5],
    scale: 2,
    move: function move() {
        console.log("Scale: " + this.scale);
        var self = this; /// lub var that = this  <- this źle działa dla lambda, nie rozpoznuje go
        this.numbers = this.numbers.map(function (element) {
            return element * self.scale;
        });
    }
};

aShape.move();

aShape.numbers.forEach(function (element) {
    console.log(element);
});
//console.log(events);
//console.log(doubles);
