'use strict';

var spiderapusApp = angular.module('spiderapusApp', [
  'ngResource',
  'ngRoute',
  'parametrizedLocation',
  'underscore'
]);

spiderapusApp 
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/courses', {
        templateUrl: 'views/courses.html',
        controller: 'MainCtrl'
      })
      .when('/groupS', {
        templateUrl: 'views/groupS.html',
        controller: 'MainCtrl'
      })
      .when('/execute/:execution', {
        templateUrl: 'views/execution.html',
        controller: 'MainCtrl'
      })
      .when('/configure', {
        templateUrl: 'views/configuration.html',
        controller: 'MainCtrl'
      })
      .when('/report', {
        templateUrl: 'views/reports.html',
        controller: 'MainCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
  });

spiderapusApp.controller('navigationCtrl', [
  '$scope', '$location', '$log', '$window', '$timeout','_',
  function(/*$rootScope,*/ $scope, $location, $log, $window, $timeout,_) {
    $scope.$back = function () {
      $timeout(function() {
        $window.history.back();
      },100);
    }

    $scope.$navPathFull = function(url) {
      var clearizedLocation = $location.path().substring(1);
      return (clearizedLocation=='')?'home':clearizedLocation;
    }
     $scope.$navPath = function(url) {       
      return $scope.$navPathFull().split('/')[0];
    }
  }]);