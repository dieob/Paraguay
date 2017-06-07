
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
  .when("/publicar", {
    templateUrl : "templates/publicar.html"
  })
  .when("/productos", {
    templateUrl : "templates/productos.html"
  })
  .when("/promociones", {
    templateUrl : "templates/promociones.html"
  });
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
