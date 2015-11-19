myAppModule.factory('productFactory', function ($http, $location){
	var factory = {};


	factory.update = function(product, callback){
		$http.put('/products/'+product._id, product).success(function(response){
			$location.path('/products')
			callback();
		})
	}

	factory.retrieveOne = function(id, callback){
		$http.get('/products/'+id).success(function(response){
			callback(response);
		})
	}
	// Retrieve All
	factory.retrieveAll = function(callback){
		$http.get('/products')
		.success(function(response){
			callback(response)
		})
	}

	// Create
	factory.create = function(newProduct, callback){
		$http.post('/products', newProduct)
		.success(function(response){
			callback();
		})
	}

	// Destroy delete '/products/5'
	factory.destroy = function(product, callback){
		$http.delete('/products/'+product._id)
		.success(function(response){
			callback();
		})
	}

	return factory;
});