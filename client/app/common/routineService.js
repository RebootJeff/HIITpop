angular.module('mainApp').service('RoutineService', function() {
  var RoutineSvc = this;
  var _routinesCache = {};

  RoutineSvc.save = function(routine) {
    RoutineSvc._routinesCache[routine.title] = routine;
  };

  RoutineSvc.getAll = function() {
    return RoutineSvc._routinesCache;
  };

  RoutineSvc.get = function(title) {
    return RoutineSvc._routinesCache[title];
  };

  RoutineSvc.delete = function(routineTitle) {
    delete RoutineSvc._routinesCache[routineTitle];
  };

});
