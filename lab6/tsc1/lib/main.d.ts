interface Person {
    name: string;
    yob: number;
}
declare class Student {
    name: string;
    yob: number;
    constructor(name: string, yob: number);
    test(): void;
    getYob(): void;
}
declare function sayHello(person: Person): void;
declare let zenek: Student;
declare let ziutek: Student;
declare let myList: Person[];
declare let myTuple: (string | number)[];
declare enum Color {
    Red = 0,
    Green = 1,
    Blue = 2,
}
declare let smthig: any;
