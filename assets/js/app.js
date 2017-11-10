(function(){
  

    var app= angular.module('cochesApp', [ ]);

        app.controller('mainCtrl',['$scope','$http', function($scope,$http){
            $scope.coches={};
           
            $scope.listadoCoches = 'assets/parciales/listadoCoches.html';

            $http.get('data/data.json',{cache:false}).then(function (data) { 
                $scope.coches = data.data.coches;  

                });
        
        }]); //mainCtrl

       app.filter('codigo', function(){
            return function(codigo){
                
                
                return ""

            }
       }); 
}());