angular.module('mainApp', [
  // 1st party dependencies
  'browseFeature',
  'editFeature',
  'runFeature',

  // 3rd party dependencies
  'ngAnimate',
  'ngMaterial'
]);

angular.module('mainApp').config(function($locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/edit');

});

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

angular.module('mainApp').service('RoutineService', function() {
  var _this = this;
  var _routinesCache = {};

  this.save = function(routine) {
    _this._routinesCache[routine.title] = routine;
  };

  this.getAll = function() {
    return _this._routinesCache;
  };

  this.get = function(title) {
    return _this._routinesCache[title];
  };

  this.delete = function(routineTitle) {
    delete _this._routinesCache[routineTitle];
  };

});

angular.module('editFeature', [
  // 3rd party dependencies
  'ui.router'
]);

angular.module('editFeature')

.config(function($stateProvider) {
  $stateProvider
    .state('edit', {
      url: '/edit',
      templateUrl: 'app/edit/edit.html',
      controller: 'editCtrl as edit'
    });
})

.controller('editCtrl', function() {
  this.test = 'hello';

  this.routine = {};
  this.routine.exercises = [{}];

  this.addExercise = function() {
    this.routine.exercises.push({});
  };

  this.removeExercise = function(index) {
    this.routine.exercises.splice(index, 1);
  };

  this.saveRoutine = function() {
    
  };

  this.cancelEdit = function() {

  };

});

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
