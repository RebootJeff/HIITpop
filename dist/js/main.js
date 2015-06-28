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

angular.module('mainApp').service('RoutineSvc', function() {
  var RoutineSvc = this;
  var _routineCache = {};

  RoutineSvc.currentRoutine = {};

  RoutineSvc.save = function(routine) {
    RoutineSvc._routineCache[routine.title] = routine;
  };

  RoutineSvc.getAllTitles = function() {
    return Object.keys(RoutineSvc._routineCache);
  };

  RoutineSvc.get = function(title) {
    return RoutineSvc._routineCache[title];
  };

  RoutineSvc.delete = function(routineTitle) {
    delete RoutineSvc._routineCache[routineTitle];
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
      pause();
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
      nextExercise();
    } else {
      runCtrl.timeLeft--;
    }
  }

  function nextExercise() {
    currentExerciseIndex++;
    if(moreExercisesLeft()) {
      runCtrl.setCurrentExercise(currentExerciseIndex);
    } else {
      pause();
    }
  }

  function moreExercisesLeft() {
    return currentExerciseIndex < runCtrl.routine.exercises.length;
  }

  runCtrl.setCurrentExercise = function(index) {
    currentExerciseIndex = index;
    runCtrl.currentExercise = runCtrl.routine.exercises[currentExerciseIndex];
    runCtrl.timeLeft = runCtrl.currentExercise.duration
  };

  function pause() {
    $interval.cancel(timer);
    status = 'paused';
  }

  function reset() {
    pause();
    init();
  }

});
