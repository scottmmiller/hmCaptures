// var app = angular.module("hmCaptures");
//
// app.controller("MainController", function($scope) {
//
//   $scope.test = "TEST";
//
//   $scope.pic = function() {
//             console.log("VM PIC")
//             return mainService.getPics()
//               .then(function(response) {
//                 console.log(response)
//               });
//   }
//
// });


(function() {

  angular.module("hmCaptures")
    .controller('MainController', MainController);

  function MainController(mainService) {

    var vm = this;
    angular.extend(vm, {

    });

      vm.test = "TEST";

      vm.getPic = function() {
        mainService.getPic()
          .then(function(response) {
            console.log("Cntrl response: " + response)
          });
      };

  };    //end of MainController

})();
