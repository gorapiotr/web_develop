
interface Person {
    name: string;
    yob: number;
   // married: boolean;
}

class Student {

    constructor(public name: string,public yob: number){
        this.name = name;
        this.yob = yob;
    }
    test(){
        console.log("test");
    }
    getYob(){
        console.log(this.yob);
    }

}

function sayHello(person: Person){
    console.log("Hello"+ person.name);
}

let zenek = new Student("Zenek", 1996);
let ziutek = new Student("Ziutek", 1956);

console.log(zenek.name);
zenek.getYob();



let myList: Person[] = [ziutek, zenek];
let myTuple = ["Fiat",1998];
console.log(myTuple[0]);


enum Color {Red, Green, Blue}
let smthig:any = 5;
smthig= "Hello";
smthig= false;