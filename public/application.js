      angular.module("NutreApp",['ngRoute'])
        .config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/index.html'
      }).
      when('/patients', {
        templateUrl: 'views/patients.html',
        controller: 'GetUsers'
      }).
      otherwise({
        redirectTo: '/nutre'
      });
        }])
        .controller("GetUsers", function($scope,$http){
            $scope.Usuarios = $http.get("/nutre/patients") 
           .success(function(data){
             $scope.Usuarios = data;
           })
           .error(function(err){
               console.log(err);
           });
                      
        });
