angular.module("hmCaptures")

  .service("mainService", mainService);

function mainService($http, $q, $location) {

   var newDate = {};
      newDate.year = parseInt(chance.year({min: 2000, max: 2014}));
      newDate.month = parseInt(chance.month({raw: true}).numeric);
      newDate.day = (function getRandomInt() {
         return Math.floor(Math.random() * (1 - 28 + 1)) + 28;
      })();
   var nasaUrl = 'https://api.nasa.gov/planetary/apod?date=' + newDate.year + "-" + newDate.month + "-" + newDate.day + '&concept_tags=True&api_key=QmiwJO1ygUTVJm0AwdjazhVEU7YvZI1s1D7an51L&format=JSON';

   this.getPic = function() {

      var deferred = $q.defer();

      $http.get(nasaUrl)
      .success(function(data, status) {
         var nasaPic = data;
         console.log(nasaPic, status);
         deferred.resolve(data);
      })
      .error(function(data, status) {
         deferred.error(error);
      })
      return deferred.promise;
      // .then(function(data) {
      //    console.log(data);
      // }, function(error) {
      //    console.log(error)
      // })
   };

};
