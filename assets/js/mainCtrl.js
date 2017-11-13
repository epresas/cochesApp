app.controller('mainCtrl',['$scope','$http', function($scope,$http){
    $scope.menuSuperior = 'assets/parciales/menuSuperior.html';
    $scope.coches={};
   
    $scope.listadoCoches = 'assets/parciales/listadoCoches.html';

    $http.get('data/data.json',{cache:false}).then(function (data) { 
        $scope.coches = data.data.coches;  

        });

}]); //mainCtrl
