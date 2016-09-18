
app.factory('jsonTodos', ['$http', function($http){

	return {
		get: function(url,id){
				if(id===0)
			return $http.get(url+'todos').then(function(response){
			return response.data;
		});
		else
		return $http.get(url+'todos/'+id).then(function(response){
		return response.data;
		});
	},
	post: function(url,setData){
		return $http({
		                        method : 'POST',
		                        url : url+'todos/',
		                        data : {name:setData,
														completed:false
														},
		                        headers : {
		                            'Content-Type' : 'application/json'
		                        }
		                    }).then(function(response,err ){
													console.log(response.data);
													return response.data;
												});
		},
		put: function(url,setData,id){
			return $http({
			                        method : 'PUT',
			                        url : url+'todos/'+id,
			                        data : {"name":setData.name,
															"completed":setData.completed,
															"note":setData.note
															},
			                        headers : {
			                            'Content-Type' : 'application/json'
			                        }
			                    }).then(function(_success, _error ){
														return _success.data;
													});
		}
}}]);

/*app.factory('jsonCreate',['$http',function($http){
return $http({
                        method : 'POST',
                        url : 'http://localhost:3000/todos',
                        data : {"name":newTodo,
												"completed":false
												},
                        headers : {
                            'Content-Type' : 'application/json'
                        }
                    }).then( _success, _error );
}]);

app.factory('jsonTodo',['$http', function($http){
	return $http.get('http://localhost:3000/todos/:id').success(function(data){
		return data;
	});
}]);
*/
