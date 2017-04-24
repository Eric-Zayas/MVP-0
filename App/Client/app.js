// var igdb = require('igdb-api-node');

var app = angular.module("Lib",["ngRoute"])
  .config(function($routeProvider){
    $routeProvider
      .when("/", {
        templateUrl : "App/index.html"
    })

  })
  .controller('searchCtrl',function($scope,$http){
    $scope.searchInfo = '';
    $scope.displayInfo = '';
    $scope.qAPI = function(){
      // $scope.displayInfo = 'Ive been wrongfully searched'
      $http({
        'method': 'GET',
        'headers':{
          "X-Mashape-Key" : "uw6gmmY9rVmshLmB0OdTga3iqkfSp1vf3WUjsnA7vIRNU0gVpc",
          'Accept': 'application/json',
          "X-Login-Ajax-call": 'true'
        },
        "url": "https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name&limit=10&offset=0&order=release_dates.date%3Adesc&search=" + $scope.searchInfo,

     }).then(function(response){
        $scope.displayInfo = response
      })
    }
  })
