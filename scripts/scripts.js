
var app = angular.module('myApp', ["ngRoute"]);
app.controller('controller', function($rootScope, $http) {
  $rootScope.records = [
    {city: 'Encarnacion', description:'San Jose Beach is the main attraction in this city, with an extension of 700 mts is the summer destination for paraguayans.', hashtags:["beach", "summer", "outdoor"], imagePath: 'imagenes/encarnacion.jpg'},
    {city: 'Laguna Blanca', description:'Laguna Blanca is an ecological and tourist location of Paraguay that comprehends an agricultural and cattle establishment, with a lake that is settled over calcareous sand, fact that makes the water completely transparent and apt for diving.', hashtags:["summer", "ecological", "beach"], imagePath: 'imagenes/lagunablanca.jpeg'},
    {city: 'CDE', description:'Ciudad del Este (Spanish for City of the East; also known as CDE) is the second-largest city in Paraguay and capital of the Alto Paraná Department, situated on the Paraná River. It is located 327 km from Asunción, the capital, and is adjacent to the border with Brazil, to which it is connected by the Friendship Bridge on the Paraná River. It is the largest city within the Triple Frontier region, which borders Foz do Iguaçu, Brazil and Puerto Iguazú, Argentina. The Itaipú Dam, one of the largest hydroelectric power plants in the world, is near Ciudad del Este, as is the Iguazu Falls.', hashtags:["shopping", "nightlife"], imagePath: 'imagenes/cde.jpeg'},
    {city: 'Salto Cristal', description:'La Rosada is inside the National Park of Ybycui. Inside the Park there is also the Salto Mina, also called Salto Cristal, where you can take long walks admiring the fauna and flora of the region, and through the paths you can get to the Salto Guaraní. In Ybycuí we can also appreciate the Pozo Tatacua, with unknown depth, resides the Paso Ita. The ancient home of Bernardino Caballero is a popular attraction among the tourist who want to know more of the Paraguayan history. The School Farm Mamorei wants to make the population realize about the importance of taking care of nature.', hashtags:["nature", "ecological", "trail", "hike"], imagePath: 'imagenes/saltocristal.jpg'}
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
    templateUrl : "templates/destinos.html"
  })
  .when("/resultados", {
    templateUrl : "templates/resultados.html"
  });
});

app.controller("resultsController", function($scope, $rootScope) {
});

app.controller("HomeController", function($scope, $rootScope, $location) {
  $rootScope.results = [];
  $rootScope.noResults = true;
  $scope.onSubmitGetResults = function() {
    $rootScope.records.forEach(function (item, index) {
      //Search by city
      if(item.city.toUpperCase() === $scope.searchParameter.toUpperCase()){
        $rootScope.results.push(item)
      }
      item.hashtags.forEach(function(hashtag){
        if(hashtag.toUpperCase() === $scope.searchParameter.toUpperCase()){
          $rootScope.results.push(item)
        }
      })
    });
    if($rootScope.results.length > 0){
      $rootScope.noResults = false;
    }

    $location.path('/resultados')
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

