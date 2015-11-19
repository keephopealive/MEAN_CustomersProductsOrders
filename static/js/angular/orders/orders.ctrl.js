myAppModule.controller('ordersController', function(customerFactory, productFactory, orderFactory){
	console.log("ordersController Loaded...")
	
	var _this = this;

	retrieveAllOrders()
	retrieveAllCustomers()
	retrieveAllProducts()
	function retrieveAllOrders(){
		orderFactory.retrieveAll(function(orders){
			_this.orders = orders;
		})
	}

	function retrieveAllCustomers(){
		customerFactory.retrieveAll(function(customers){
			_this.customers = customers;
		})
	}

	function retrieveAllProducts(){
		productFactory.retrieveAll(function(products){
			_this.products = products;
		})
	}

	this.create = function(customer_id, products){
		console.dir(customer_id)
		console.log(products)
		orderFactory.create(customer_id, products, retrieveAllOrders)
	}
	this.destroy = function(order_id){
		orderFactory.destroy(order_id, retrieveAllOrders)
	}
	
});
