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

.controller('runCtrl', function($interval, RoutineSvc) {
  var runCtrl = this;
  var currentExerciseIndex;
  var status;
  var timer;

  var _mockRoutine = {
    title: 'Mock Routine',
    exercises: [
      { name: 'one', duration: 5 },
      { name: 'two', duration: 2 },
      { name: 'three', duration: 3 },
    ]
  };

  runCtrl.routine = _mockRoutine;

  init();

  function init() {
    status = 'stopped';
    currentExerciseIndex = 0;
    runCtrl.currentExercise = runCtrl.routine.exercises[currentExerciseIndex];
    runCtrl.timeLeft = runCtrl.currentExercise.duration
  }

  runCtrl.playPause = function() {
    if(status === 'playing') {
      stop();
    } else {
      play();
    }
  };

  function play() {
    status = 'playing';
    timer = $interval(runRoutine, 1000);
  }

  function runRoutine() {
    if(runCtrl.timeLeft === 0) {
      switchExercise();
    } else {
      runCtrl.timeLeft--;
    }
  }

  function switchExercise() {
    currentExerciseIndex++;
    if(moreExercisesLeft()) {
      runCtrl.currentExercise = runCtrl.routine.exercises[currentExerciseIndex];
      runCtrl.timeLeft = runCtrl.currentExercise.duration
    } else {
      pause();
    }
  }

  function moreExercisesLeft() {
    return currentExerciseIndex < runCtrl.routine.exercises.length;
  }

  function pause() {
    console.log('paused');
    $interval.cancel(timer);
    status = 'paused';
  }

  function reset() {
    pause();
    init();
  }

});
