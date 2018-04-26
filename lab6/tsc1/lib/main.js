"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Student =
/*#__PURE__*/
function () {
  function Student(name, yob) {
    _classCallCheck(this, Student);

    this.name = name;
    this.yob = yob;
  }

  _createClass(Student, [{
    key: "test",
    value: function test() {
      console.log("test");
    }
  }, {
    key: "getYob",
    value: function getYob() {
      console.log(this.yob);
    }
  }]);

  return Student;
}();

function sayHello(person) {
  console.log("Hello" + person.name);
}

var zenek = new Student("Zenek", 1996);
var ziutek = new Student("Ziutek", 1956);
console.log(zenek.name);
zenek.getYob();
var myList = [ziutek, zenek];
var myTuple = ["Fiat", 1998];
console.log(myTuple[0]);
var Color;

(function (Color) {
  Color[Color["Red"] = 0] = "Red";
  Color[Color["Green"] = 1] = "Green";
  Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));

var smthig = 5;
smthig = "Hello";
smthig = false;