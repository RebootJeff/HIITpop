angular.module('mainApp', ['ngAnimate', 'ngMaterial']);

angular.module('mainApp').controller('testCtrl', function($scope) {
  $scope.test = 'hello';
});

var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();

var env = process.env.NODE_ENV || 'development';


// ============================================================================
// Middleware
// ============================================================================
app.use(express.static(__dirname + '/../dist'));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev')); // logging


// ============================================================================
// Basic routes
// ============================================================================
app.route('/api/dev')
  .get(function(req, res, next){

  })
  .post(function(req, res, next){

  });


// ============================================================================
// Start server
// ============================================================================
app.listen(8000);
console.log('Listening on port 8000...');
