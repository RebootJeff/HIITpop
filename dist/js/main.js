angular.module('mainApp', [
  'ngAnimate',
  'ngMaterial',
  'ui.router'
]);

angular.module('mainApp').config(function($locationProvider, $urlRouterProvider, $stateProvider) {
  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'app/home/home.html',
      controller: 'homeCtrl as home'
    });

});



angular.module('mainApp').controller('homeCtrl', function() {
  this.test = 'hello';

  console.log('controller boom');
});
