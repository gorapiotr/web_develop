var Rx = require('rxjs/Rx');
/*
var myObservable = Rx.Observable.range(0,10);

var anyObserver = {
        next: item => console.log(`Next item ${item}`),
        error: item => console.log(`Extepion ${item}`),
        complete: item => console.log("Complete")
}

myObservable.subscribe(anyObserver);
*/

Rx.Observable.range(0,10)

.map(item => item*2)

.filter(item => item%4===0)

.subscribe({
    next: item => console.log(`Next item ${item}`),
    error: item => console.log(`Extepion ${item}`),
    complete: item => console.log("Complete")
});