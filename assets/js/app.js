(function(){
  

    var app= angular.module('cochesApp', ['ngRoute']);

        

        app.config(function($routeProvider){
            $routeProvider
            .when('/',{
                templateUrl:'assets/parciales/home.html',
                controller: 'mainCtrl'
            })
            .when('/listadoCoches',{
                templateUrl:'assets/parciales/listadoCoches.html',
                controller:'mainCtrl'
            })
            .otherwise({
                redirectTo:'/'
            })
        });


        app.controller('mainCtrl',['$scope','$http', function($scope,$http){
            $scope.position = 5;
            $scope.menuSuperior = 'assets/parciales/menuSuperior.html';
            $scope.coches={};
           
            $scope.listadoCoches = 'assets/parciales/listadoCoches.html';

            $http.get('data/data.json',{cache:false}).then(function (data) { 
                $scope.coches = data.data.coches;  

                });


            $scope.nextList = function () {
                if ($scope.coches.length > $scope.position) {
                    $scope.position +=5;
                    
                }
            }
            $scope.prevList = function () {
                if ($scope.position > 5) {
                    $scope.position -=5;
                    
                }
            }
        
        }]); //mainCtrl


}());