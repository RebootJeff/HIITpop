angular.module('mainApp', [
  // 1st party dependencies
  'browseFeature',
  'editFeature',
  'runFeature',

  // 3rd party dependencies
  'ngMaterial'
]);

angular.module('mainApp').config(function($locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/edit');

});
