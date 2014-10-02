angular.module('mainApp', [
  'ngAnimate',
  'ngMaterial',
  'ui.router'
]);

angular.module('mainApp').config(function($locationProvider, $stateProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('index', {
      url: '',
      views: {
        'homeView': {
          templateUrl: 'home/home.html',
          controller: 'homeCtrl as home'
        }
      }
    });

});



angular.module('mainApp').controller('homeCtrl', function() {
  this.test = 'hello';
});
