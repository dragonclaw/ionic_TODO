app.controller('DetailController',['$http','$rootScope','jsonTodos','$routeParams',function($http,$rootScope,jsonTodos,$routeParams){
id=$routeParams.id;
console.log(id);
jsonTodos.get($rootScope.url,id).then(function(data){
  $rootScope.todo = data;
  console.log(data);
});
$rootScope.saveTodo= function(todo){
  alert($rootScope.todo._id);
  jsonTodos.put($rootScope.url,todo,$rootScope.todo._id);
};
}]);
