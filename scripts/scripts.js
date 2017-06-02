
var app = angular.module('myApp', ["ngRoute"]);
app.controller('controller', function($scope, $http) {
});
app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
    templateUrl : "templates/home.html"
  })
  .when("/home", {
    templateUrl : "templates/home.html"
  })
  .when("/combos", {
    templateUrl : "templates/combos.html"
  })
  .when("/servicios", {
    templateUrl : "templates/servicios.html"
  })
  .when("/productos", {
    templateUrl : "templates/productos.html"
  })
  .when("/promociones", {
    templateUrl : "templates/promociones.html"
  });
});
