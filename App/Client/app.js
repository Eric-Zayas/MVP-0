
var app = angular.module("Lib",["ngRoute"])
  .config(function($routeProvider){
    $routeProvider
      .when("/", {
        templateUrl : "App/index.html"
    })
  })

  .controller('searchCtrl',function($scope,$http){
    $scope.searchInfo = '';
    $scope.displayInfo;
    $scope.lib = [];
    $scope.qAPI = function(){
      $http({
        method: 'POST',
         url: '/file',
         data: {
           'key': $scope.searchInfo
         }
     }).then(function(response){
       console.log(response.data);
       $scope.displayInfo = response;
        return response.data.key
     })
    }
  })
