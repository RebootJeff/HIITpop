angular.module('browseFeature', [
  // 3rd party dependencies
  'ui.router'
]);

angular.module('browseFeature')

.config(function($stateProvider) {
  $stateProvider
    .state('browse', {
      url: '/browse',
      templateUrl: 'app/browse/browse.html',
      controller: 'browseCtrl as browse'
    });
})

.controller('browseCtrl', function() {

  this.selectedRoutineTitle = 'Pick a Routine';

});
