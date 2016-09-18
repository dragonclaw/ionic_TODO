app.controller('DataController', ['$http','$rootScope','$scope','jsonTodos', function($http,$rootScope,$scope,jsonTodos){
	$rootScope.url="http://192.168.1.111:3000/";
	jsonTodos.get($rootScope.url,0).then(function(data){
		$rootScope.todos = data;
	});
	$rootScope.save=function(todo){
		alert("this is the todo" + todo);
		console.log(test);
		var test = jsonTodos.post($rootScope.url,todo);
		alert(test);
		console.log(test);
	}
}]);
