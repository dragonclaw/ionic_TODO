// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('todoApp', ['ionic', 'ngRoute'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.config(function($routeProvider,$ionicConfigProvider,$stateProvider,$urlRouterProvider) {
  /*$routeProvider
    .when('/', {
      controller: 'DataController',
      templateUrl: 'assets/js/directives/views/home.html'
    })
    .when('/:id', {
        templateUrl: 'assets/js/directives/views/todo_detail.html',
        controller: 'DetailController'
     });*/
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'assets/js/directives/views/home.html',
      controller: 'DataController'
    })
    .state('detail', {
      url: '/:id',
      templateUrl: 'assets/js/directives/views/todo_detail.html',
      controller: 'DetailController'
    });
  $urlRouterProvider.otherwise('/');
  $ionicConfigProvider.views.maxCache(0);
});
