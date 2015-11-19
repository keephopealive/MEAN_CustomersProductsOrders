myAppModule.controller('customerDetailsController', function($routeParams, customerFactory){
	var _this = this;

	customerFactory.retrieveOne($routeParams.id, function(customer){
		console.log("BACK FROM FACTORY ", customer)
		_this.customer = customer;
	})

	this.update = function(user){
		customerFactory.update(user, function(){
			console.log("back in controller, done")
		})
	}
})

myAppModule.controller('customersController', function(customerFactory){
	console.log("customersController Loaded...")
	var _this = this;

	function retrieveAll(){
		customerFactory.retrieveAll(function(customers){
			_this.customers = customers;
		})
	}
	retrieveAll();

	this.create = function(newCustomer){
		console.log("customersController - Create", newCustomer)
		customerFactory.create(newCustomer, retrieveAll);

		this.newCustomer = {};
	}

	this.destroy = function(customer){
		customerFactory.destroy(customer, retrieveAll)
	}

});