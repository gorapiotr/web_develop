var person = {
    imie : 'Jan',
    nazwisko : 'Kowalski',
    rokUr : 1983
};

//console.log(person.imie);
person.miasto = 'Gdańsk';

//console.log(person.miasto);


/////////////////////////////

var someArray = [ 1, 2, 'trzy'];
someArray.miasto = "Gdańsk";
//console.log(someArray);

someArray.push(5);
 
// do ściąganie pop

//console.log(typeof someArray);
//console.log(someArray);

///////////////////////////////

//console.log(multiply(2,3));

///nie zadziała add bo nie zadaklerowana zmienna add jeszcze
//console.log(add(1,2));

////funkcja jako zmienna 
var higherOrderFunction = function(someFun, b){
    return someFun(b) + b;
}; //przypisanie funkcji do zmiennej wiec ;

function multiply(a)
{
    return a*a;
}

function divide(a)
{
    return a/2;
}



//console.log(higherOrderFunction(multiply,4));

//console.log(higherOrderFunction(divide, 4));


////funkcja jak wartosc zwracana z funkcji 

var counter  = function()
{
    var i = 0;
    return function()  // w wewnetrzej funkcji tworzy się domknięcie, zmienna tam są zapamiętywane <- przykład domknięcia
    {
        return i++;
    };
};

var c = counter(); 

c();
c();
c();

var newc = counter();

newc();

//console.log(c());
//console.log(newc());

////IMMEDIATELY EXECUTED FUNCTION IEF

var counterIEF  = function()
{
    var i = 0; 
    return function()  // w wewnetrzej funkcji tworzy się domknięcie, zmienna tam są zapamiętywane <- przykład domknięcia
    {
        return ++i;
    };
}();

counterIEF();
counterIEF();

//console.log(counterIEF());




////GLOBAL SCOPE!!!!

var counter1  = function()
{
     i = 0; // nie mam var i = 0; dlatego i staje się globalne JEZELI JEST VAR TO MAM SCOPE FUNKCYJNY!!
    return function() 
    {
        return ++i;
    };

    function incr()
    {
        return 'To jest funkcja prywatna inrc()';
    }
};

var c = counter1();
var d = counter1();

c();
c();

d();

//console.log(d());


/// biblioteka

var lib ={};    

lib= (function(){

    var priv1 = 0;
    var priv2 = "hello";

    return{

        message: priv2 + "World",
        counter: function()  ///counter i sayHello są metodami
            {
                return ++c;
            },
        sayHello: function(name)
            {
                return "Hello " + name;
            }    


    };

})();

//console.log(lib.sayHello("piotr"));



///KONTEKST THIS

// zwykły kontekst (jezli nie jest w obiekcie to this wiąze do globala)

function z() {

    console.log(this.a);
}

a = 5;
//z();

//kontekst konstruktora

function Person(name){  //KONWENCJA TAKA ZE KONSTRUKTOR PISZEMY DUZA LITERA !!!!!
    this.name = name;
}

var ziutek = new Person('Ziutek'); //Person uzyte jako konstruktor
//var heniek =  Person('Heniek');  //Person uzyte jako funkcja <-- duzy blad bo KONSTRUKTOR UZYTY JAKO ZWYKŁA FUNKCJA 

//console.log(ziutek.name);
//console.log(heniek.name);


//kontekst meody

var person = {

    imie: "Nieznane",

    sayHello: function(){
        return "Hello "+ this.imie;
    }


}

//console.log(person.sayHello());

//kontekst Apply

function sayKwaKwa(zwierze)
{
    return console.log("Jestem "+zwierze+" bo mówię: "+ this.message);
}

var kaczka = {
    message: "KWA, KWA, KWA, KWA"
};

var pies = {
    message: "Hau, Hau, Hau"
};

sayKwaKwa.apply(kaczka,['kaczka']);
sayKwaKwa.apply(pies, ['pies']);

////


var number = [1,2 ,3,4];

var evenNumbers = number.filter(function(item){
    return item % 2 === 0;
})

console.log(evenNumbers);