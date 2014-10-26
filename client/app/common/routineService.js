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
