myAppModule.controller('productDetailsController', function($routeParams, productFactory){
	var _this = this;

	productFactory.retrieveOne($routeParams.id, function(product){
		_this.product = product;
	})

	this.update = function(product){
		productFactory.update(product, function(){
			console.log("back in controller, done")
		})
	}
})

myAppModule.controller('productsController', function(productFactory){
	console.log("productsController Loaded...")
	var _this = this;

	function retrieveAll(){
		productFactory.retrieveAll(function(products){
			_this.products = products;
		})
	}
	retrieveAll();

	this.create = function(newProduct){
		console.log("productsController - Create", newProduct)
		productFactory.create(newProduct, retrieveAll);

		this.newProduct = {};
	}

	this.destroy = function(product){
		productFactory.destroy(product, retrieveAll)
	}

});