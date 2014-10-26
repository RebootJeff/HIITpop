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
