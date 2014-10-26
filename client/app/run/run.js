angular.module('runFeature', [
  // 3rd party dependencies
  'ui.router'
]);

angular.module('runFeature')

.config(function($stateProvider) {
  $stateProvider
    .state('run', {
      url: '/run',
      templateUrl: 'app/run/run.html',
      controller: 'runCtrl as run'
    });
})

.controller('runCtrl', function() {
  console.log('in runCtrl');

});
