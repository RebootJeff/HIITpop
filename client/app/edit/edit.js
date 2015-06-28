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

.controller('editCtrl', function(RoutineSvc) {
  var editCtrl = this;
  editCtrl.test = 'hello';

  editCtrl.routine = {};
  editCtrl.routine.exercises = [{}];

  editCtrl.addExercise = function() {
    editCtrl.routine.exercises.push({});
  };

  editCtrl.removeExercise = function(index) {
    editCtrl.routine.exercises.splice(index, 1);
  };

  editCtrl.saveRoutine = RoutineSvc.save;

  editCtrl.cancelEdit = function() {

  };

});
