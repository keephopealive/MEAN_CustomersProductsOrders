// Factories
myAppModule.factory('customerFactory', function ($http, $location){
	var factory = {};


	factory.update = function(user, callback){
		$http.put('/customers/'+user._id, user).success(function(response){
			console.log("Back in factory - update: ", response);
			$location.path('/customers')
			callback();
		})
	}

	factory.retrieveOne = function(id, callback){
		console.log('in factory', id)
		$http.get('/customers/'+id).success(function(response){
			console.log("BACK FORM SERVER ", response)
			callback(response);
		})
	}
	// Retrieve All
	factory.retrieveAll = function(callback){
		$http.get('/customers')
		.success(function(response){
			callback(response)
		})
	}

	// Create
	factory.create = function(newCustomer, callback){
		console.log("customerFactory - Create", newCustomer)
		$http.post('/customers', newCustomer)
		.success(function(response){
			console.log("customerFactory - Create - Response", response)
			callback();
		})
	}

	// Destroy delete '/customers/5'
	factory.destroy = function(customer, callback){
		$http.delete('/customers/'+customer._id)
		.success(function(response){
			callback();
		})
	}

	return factory;
});
