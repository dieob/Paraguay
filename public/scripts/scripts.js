
var app = angular.module('myApp', ["ngRoute"]);
app.controller('controller', function($rootScope, $scope, $location) {
  $rootScope.records = [
    {city: 'Encarnacion', description:'San Jose Beach is the main attraction in this city, with an extension of 700 mts is the summer destination for paraguayans.', hashtags:["beach", "summer", "outdoor"], imagePath: 'imagenes/encarnacion.jpg', mapSrc:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3078187.718862392!2d-57.05642804682274!3d-26.365092069513103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945793db2496ab05%3A0xe02f58d092146b60!2sEncarnaci%C3%B3n%20itapua!5e0!3m2!1ses!2spy!4v1580583150079!5m2!1ses!2spy'},
    {city: 'Laguna Blanca', description:'Laguna Blanca is an ecological and tourist location of Paraguay that comprehends an agricultural and cattle establishment, with a lake that is settled over calcareous sand, fact that makes the water completely transparent and apt for diving.', hashtags:["summer", "ecological", "beach"], imagePath: 'imagenes/lagunablanca.jpeg', mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14601.157089067103!2d-56.2930870253813!3d-23.808310521221994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9460fe0dbc586be7%3A0x67536af6e448745c!2sLaguna%20Blanca!5e0!3m2!1ses!2spy!4v1580587822110!5m2!1ses!2spy"},
    {city: 'CDE', description:'Ciudad del Este (Spanish for City of the East; also known as CDE) is the second-largest city in Paraguay and capital of the Alto Paraná Department, situated on the Paraná River. It is located 327 km from Asunción, the capital, and is adjacent to the border with Brazil, to which it is connected by the Friendship Bridge on the Paraná River. It is the largest city within the Triple Frontier region, which borders Foz do Iguaçu, Brazil and Puerto Iguazú, Argentina. The Itaipú Dam, one of the largest hydroelectric power plants in the world, is near Ciudad del Este, as is the Iguazu Falls.', hashtags:["shopping", "nightlife"], imagePath: 'imagenes/cde.jpeg', mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230487.1741676379!2d-54.81113097115593!3d-25.49296769599957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f68499feb6b1d1%3A0xce33cb9eeb700b1e!2sCd.%20del%20Este!5e0!3m2!1ses!2spy!4v1580587887615!5m2!1ses!2spy"},
    {city: 'Salto Cristal', description:'La Rosada is inside the National Park of Ybycui. Inside the Park there is also the Salto Mina, also called Salto Cristal, where you can take long walks admiring the fauna and flora of the region, and through the paths you can get to the Salto Guaraní. In Ybycuí we can also appreciate the Pozo Tatacua, with unknown depth, resides the Paso Ita. The ancient home of Bernardino Caballero is a popular attraction among the tourist who want to know more of the Paraguayan history. The School Farm Mamorei wants to make the population realize about the importance of taking care of nature.', hashtags:["nature", "ecological", "trail", "hike"], imagePath: 'imagenes/saltocristal.jpg', mapSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d459091.69795370026!2d-56.997605751792506!3d-25.97938916117971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94594d03d3d6edd3%3A0xaf46df46e84aa678!2sSalto%20Cristal%20Ecoaventura!5e0!3m2!1ses!2spy!4v1580588099369!5m2!1ses!2spy"}
  ]

  $rootScope.result = [];

  $scope.isActive = function(viewLocation) {
    return viewLocation === $location.path();
  };

  //function for searching from top nav menu
  $rootScope.results = [];
  $rootScope.noResults = true;
  $scope.onSubmitGetResults = function() {
    $rootScope.records.forEach(function (item, index) {
      //Search by city
      if(item.city.toUpperCase() === $scope.searchBy.toUpperCase()){
        $rootScope.results.push(item)
      }
      item.hashtags.forEach(function(hashtag){
        if(hashtag.toUpperCase() === $scope.searchBy.toUpperCase()){
          $rootScope.results.push(item)
        }
      })
    });
    if($rootScope.results.length > 0){
      $rootScope.noResults = false;
    }
    $scope.searchBy = "";
    $location.path('/resultados')
  }
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
  .when("/item", {
    templateUrl : "templates/item.html"
  })
  .when("/resultados", {
    templateUrl : "templates/resultados.html"
  });
});

app.controller("resultsController", function($scope, $rootScope, $location) {
  $scope.selectItem = function(item) {
    $rootScope.selectedItem = item;
    $location.path('/item')
  }
});

app.controller("itemController", function($scope, $rootScope,$sce) {
  $scope.currentMapUrl = $sce.trustAsResourceUrl($rootScope.selectedItem.mapSrc);
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

