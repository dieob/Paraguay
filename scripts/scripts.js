
var app = angular.module('myApp', ["ngRoute"]);
app.controller('controller', function($rootScope, $http) {
  $rootScope.records = [
    {city: 'Encarnacion', description:'san jose beach'},
    {city: 'CDE', description:'shopping tour'}
  ]

  $rootScope.result = [];
});
app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
    templateUrl : "templates/home.html"
  })
  .when("/home", {
    templateUrl : "templates/home.html"
  })
  .when("/publicar", {
    templateUrl : "templates/publicar.html"
  })
  .when("/destinos", {
    templateUrl : "templates/resultados.html"
  });
});

app.controller("resultsController", function($scope, $rootScope) {
});

app.controller("HomeController", function($scope, $rootScope, $location) {
  console.log("homeController");
  $rootScope.results = [];
  $scope.onSubmitGetResults = function() {
    console.log("entered function");
    $rootScope.records.forEach(function (item, index) {
      if(item.city === $scope.searchParameter){
        $rootScope.results.push(item)
        console.log("city is: "+ item.city)
      }
  });
  $location.path('/destinos')
  }
});


// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navSmall");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

