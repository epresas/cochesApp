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
            .when('/customCar',{
                templateUrl: 'assets/parciales/customCar.html',
                controller: 'customCarCtrl'   
            })
            .when('/detalleCoche/:id', {
                templateUrl: 'assets/parciales/detalleCoche.html',
                controller: 'detalleCocheCtrl'
            })
            .otherwise({
                redirectTo:'/'
            });
        });