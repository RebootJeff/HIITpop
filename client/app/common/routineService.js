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
