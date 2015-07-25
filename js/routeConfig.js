(function() {

  angular.module("hmCaptures")
    .config(config);

  function config($routeProvider, $httpProvider) {
     
     delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $routeProvider
      .when("/", {
        templateUrl: "../views/mainView.html",
        controller: 'MainController'
        controllerAs: 'sm'
      })
      .otherwise('/');
  };

})();
