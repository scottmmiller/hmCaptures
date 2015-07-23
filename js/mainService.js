angular.module("hmCaptures")

  .service("mainService", mainService);

function mainService($http, $q, $location) {

   var nasaUrl = (function() {
      var newDate = {};
         newDate.year = parseInt(chance.year({min: 2000, max: 2014}));
         newDate.month = parseInt(chance.month({raw: true}).numeric);
         newDate.day = (function getRandomInt() {
            return Math.floor(Math.random() * (1 - 28 + 1)) + 28;
         })();
      console.log("NewDate: ", newDate)
   return 'https://api.nasa.gov/planetary/apod?date=' + newDate.year + "-" + newDate.month + "-" + newDate.day + '&concept_tags=True&api_key=QmiwJO1ygUTVJm0AwdjazhVEU7YvZI1s1D7an51L&format=JSON';

   })();

   this.getPic = function() {

      var deferred = $q.defer();

      $http({
         method: "GET",
         url: nasaUrl,
      })
      .then(function(data, status) {
         var nasaPic = data.data;
            console.log("nasaPic: ", nasaPic);
         deferred.resolve(nasaPic);
      }, function(error, status) {
         deferred.reject(error);
      });
      return deferred.promise;
      // .then(function(data) {
      //    console.log(data);
      // }, function(error) {
      //    console.log(error)
      // })
   };

};
