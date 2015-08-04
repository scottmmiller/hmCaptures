(function() {

  angular
      .module('hmCaptures')
      .config(config);

  function config($routeProvider) {

    $routeProvider
      .when("/", {
        templateUrl: "../views/mainView.html",
        controller: 'MainController',
        controllerAs: 'sm'
      })
      .when("/carousel", {
        templateUrl: "../views/carouselView.html",
        controller: 'MainController',
        controllerAs: 'sm'
      })
      .when("/slick", {
        templateUrl: "../views/slickCarouselView.html",
        controller: 'MainController',
        controllerAs: 'sm'
      })
      .otherwise('/');
  };

})();
