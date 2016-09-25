app.controller('DetailController',['$http','$rootScope','jsonTodos','$routeParams','$stateParams',function($http,$rootScope,jsonTodos,$routeParams,$stateParams){
//id=$routeParams.id;
id=$stateParams.id;
  console.log(id);
jsonTodos.get($rootScope.url,id).then(function(data){
  $rootScope.todo = data;
  console.log(data);
});
$rootScope.saveTodo= function(todo){
  jsonTodos.put($rootScope.url,todo,$rootScope.todo._id);
};
}]);
