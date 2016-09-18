var app = angular.module('todoApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
    .when('/', {
      controller: 'DataController',
      templateUrl: 'assets/js/directives/views/home.html'
    })
    .when('/:id', {
        templateUrl: 'assets/js/directives/views/todo_detail.html',
        controller: 'DetailController'
     });
});
