myAppModule.factory('orderFactory', function ($http){
	var factory = {};

	factory.destroy = function(order_id, callback){
		$http.delete('/orders/'+order_id).success(function(response){
			callback();
		})

	}

	factory.create = function(customer_id, products, callback){
		console.log(customer_id)
		console.log(products)
		console.log(callback)
		var selectedProducts = [];
		for(index in products){
			if(products[index].isSelected && products[index].isSelected == true){
				console.log("TRUE", products[index])
				selectedProducts.push(products[index])
			}
		}
		$http.post('/orders', {customer_id: customer_id, products: selectedProducts}).success(function(response){
			callback();
		})
	}

	factory.retrieveAll = function(callback){
		$http.get('/orders').success(function(response){
			callback(response);
		})
	}

	return factory;
});