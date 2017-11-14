app.controller('detalleCocheCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $scope.id =$routeParams.id;
    $scope.coches = {};
    $scope.current = [];
    $scope.visible=false;
    $http.get('data/data.json', { cache: false }).then(function (data) {
        $scope.coches = data.data.coches;

    });
    $scope.toggleView = function () {
        $scope.visible = !$scope.visible;
    }
  
}]);