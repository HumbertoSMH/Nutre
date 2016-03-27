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
        when("/patient/new",{
        templateUrl : "views/patient-new.html",
        controller  : "GetUsers"
    })
        .otherwise({
        redirectTo: '/'
      });
        }])


        .controller("GetUsers", function($scope,$http){

             $scope.datas = {};
            $scope.Usuarios = $http.get("/patient/all")
                .success(function(data){
                    $scope.Usuarios = data;
                })
                .error(function(err){
                    console.log(err);
                });

            $scope.AgregarPaciente = function () {
                $http.post("/patient/new",$scope.datas)
                    .success(function(data){
                        console.log(data);
                    })
                    .error(function () {
                        alert("No se ha podido Agregar")
                    })
            }
        });



      /* es necesario reescribir todo esté codigo*/