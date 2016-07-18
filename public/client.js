var app = angular.module('jonApp', []);

app.controller('JonController', function($scope, $http){
  $scope.getStudentList = function() {
    $http.get('/students')
    .then(function(response){
    $scope.studentList = response.data.names;
  });
};
});
