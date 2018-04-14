var q = $('#q');
var keyups = Rx.Observable.fromEvent(q, 'keyup');

keyups.throttleTime(500).map(function(x) {
        return q.val();
})
.switchMap(function(x){
   
    return searchWikipedia(x);
})
.do(function(x){
    //console.log(x);
})
.subscribe(function(x){

    $('#result').html(htmlView(x));
});

function searchWikipedia(term){
    return $.ajax({
        url: 'http://en.wikipedia.org/w/api.php',
        dataType: 'jsonp',
        data: {
            action: 'opensearch',
            format: 'json',
            search: term
        }
    }).promise();
}

function htmlView(x){


    try{
    let table = '<table class="table table-striped"><thead><tr><th scope="col">First</th><th scope="col">Last</th><th scope="col">Link</th></tr></thead><tbody>';

    x[1].forEach(function(element, index ){
        table+=`<tr><td class="col-md-2">${x[1][index]}</td><td class="col-md-8">${x[2][index]}</td><td class="col-md-2"><a href="${x[3][index]}">Link</a></td></tr>`;
    });

    table += '</tbody></table>';
    return table;
    }
    catch(e){
        return `<h1>Brak wyników wyszukiwania</h1>`;
    }
    //return "asdas";
}

 //ZADANIE DOMOWE
 //wizualizacja wyniku 