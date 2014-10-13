angular.module('mainApp', [
  'ngAnimate',
  'ngMaterial',
  'ui.router'
]);

angular.module('mainApp').config(function($locationProvider, $urlRouterProvider, $stateProvider) {
  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'app/home/home.html',
      controller: 'homeCtrl as home'
    });

});


angular.module('mainApp').directive('tfFloat', function() {
  return {
    restrict: 'E',
    replace: true,
    scope : {
      fid : '@?',
      value : '='
    },
    compile : function() {
      return {
        pre : function(scope, element, attrs) {
          // transpose `disabled` flag
          if ( angular.isDefined(attrs.disabled) ) {
            element.attr('disabled', true);
            scope.isDisabled = true;
          }

          // transpose the `label` value
          scope.label = attrs.label || "";
          scope.fid = scope.fid || scope.label;

          // transpose optional `type` and `class` settings
          element.attr('type', attrs.type || "text");
          element.attr('class', attrs.class );
        }
      }
    },
    template:
      '<material-input-group ng-disabled="isDisabled">' +
        '<label for="{{fid}}">{{label}}</label>' +
        '<material-input id="{{fid}}" ng-model="value">' +
      '</material-input-group>'
  };
});

angular.module('mainApp').controller('homeCtrl', function() {
  this.test = 'hello';

  this.routine = {};
  this.routine.exercises = [{}];

  this.addExercise = function() {
    this.routine.exercises.push({});
  };

});
