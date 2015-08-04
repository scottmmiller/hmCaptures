(function() {

  angular
      .module("hmCaptures")
      .controller('MainController', MainController);

  function MainController(mainService, $log) {

    var vm = this;
   //  angular.extend(vm, {
    //
   //  });

      vm.test = "TEST";

      // vm.getPic = mainService.getPic()
      //     .then(function(response) {
      //       console.log("MainCntrlr response: ", response);
      //       vm.pic = response;
      //          console.log("vm.pic.url: ", vm.pic.url)
      //       // vm.details = response.explanation;
      //       // vm.title = response.title;
      //    });

  };    //end of MainController

})();
