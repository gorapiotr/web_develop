//Dziedziczenie//

//Klasy dziedzczone w js maja ukryta zmienna prywatna *proto*, która odwołuje się do object Object

function Shape (x, y) {
    this.x = x;
    this.y = y;
};

Shape.prototype.message = function(){   ///prototype pozwala nam odwolac się do funckcji message!!
    console.log('Hello from message');
};

Shape.prototype = {                     //bardziej popularna sładnia
    getY: function()
    {
        return this.getY;
    }
};

Shape.prototype.getX = function(){
    return this.x;
};

Shape.prototype.move = function(delatX, deltaY){
this.x += delatX;
this.y += deltaY;
};

//var aShape = new Shape(2, 1);
//aShape.move(4,3);
//console.log(aShape.getX());
//aShape.message();

function Circle ( x, y, r){
    Shape.call(this,x,y);  //powiązanie x y koła z x y kształtu!!
    this.r = r; 

}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function() {
    return Math.PI * this.r * this.r;
}


var aCircle = new Circle(20,30,40);

console.log(aCircle.area());
console.log(aCircle)






/*
//Wzorzec fabryki//
//FACTORY//
//FACTORY//

function create (proto) {                               ///FUNCKJA ISTNIEJE W KLASIE OBJECT!!!

    function F() {};
    F.prototype = proto;                                ///TUTAJ JEST DZIEDZICZENIE
    F.prototype.sayHello = function(){
        return "Hello it is message from Factory";
    };
    return new F();

}

var base = {
    x: 5,
    y: 7,
    getX: function() {
        return this.x;
    },
    getY: function() {
        return this.y;
    }
}

var someBase = create(base);
console.log(someBase.sayHello());                      ///sayHello to metodza dziedziczona po F object
*/