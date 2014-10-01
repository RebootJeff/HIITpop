angular.module('mainApp', ['ngAnimate', 'ngMaterial']);

angular.module('mainApp').controller('testCtrl', function($scope) {
  $scope.test = 'hello';
});
