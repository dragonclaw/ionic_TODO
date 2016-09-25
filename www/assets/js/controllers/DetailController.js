app.controller('DetailController',['$http','$rootScope','jsonTodos','$routeParams','$stateParams','$state',function($http,$rootScope,jsonTodos,$routeParams,$stateParams,$state){
//id=$routeParams.id;
id=$stateParams.id;
  console.log(id);
jsonTodos.get($rootScope.url,id).then(function(data){
  $rootScope.todo = data;
  console.log(data);
});
$rootScope.saveTodo= function(todo){
  alert(todo.note);
  jsonTodos.put($rootScope.url,todo,todo._id);
  $state.go('home');
};
}]);
