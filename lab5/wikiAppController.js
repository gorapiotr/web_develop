var app = angular.module('wikiApp', []);
app.controller('wikiController', function($scope) {
    $scope.name = "John";
    $scope.wikiResponse= ['a', 'b','c'];
    $scope.test = "test";

    var q = $('#q');
    $scope.keyups = Rx.Observable.fromEvent(q, 'keyup');

    $scope.keyups.throttleTime(500).map(function(x) {
            return q.val();
    })
    .switchMap(function(x){
        return searchWikipedia(x);
    })
    .do(function(x){   
        //console.log(x);
    })
    .subscribe(function(x){
        $scope.test1(x);
        //console.log(x);
        //$scope.wikiResponse = x;
        
        //$('#result').text(x);
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

        

$scope.test1 = function(x){
console.log("wywołanie funkcji test");
  $scope.test = "blablabla";
} 

});


