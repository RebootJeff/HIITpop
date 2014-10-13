angular.module('mainApp').controller('homeCtrl', function() {
  this.test = 'hello';

  this.routine = {};
  this.routine.exercises = [{}];

  this.addExercise = function() {
    this.routine.exercises.push({});
  };

});
