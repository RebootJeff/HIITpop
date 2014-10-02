angular.module('mainApp', ['ngAnimate',
  'ngMaterial',
  'ui.router'
]);

angular.module('mainApp').config(function($locationProvider, $stateProvider) {
  $locationProvider.html5Mode(true);

});

angular.module('mainApp').controller('testCtrl', function($scope) {
  $scope.test = 'hello';
});
