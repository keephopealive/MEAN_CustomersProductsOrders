module.exports = function(app){
	var Customer = mongoose.model('Customer')
	var Product = mongoose.model('Product')
	var Order = mongoose.model('Order')

	var customer = require('./../controllers/customers.js');

	// Routes
	app.get('/customers', customer.index);

	app.post('/customers', customer.create);

	app.delete('/customers/:id', customer.destroy);

	app.get('/customers/:id', customer.show);

	app.put('/customers/:id', function(req, res){
		Customer.update({_id: req.params.id}, {name: req.body.name }, function(err, customer){
			return res.json(true)
		})
	})


	app.get('/products', function(req, res){
		Product.find({}, function(err, products){
			res.json(products);
		})
	})
	app.post('/products', function(req, res){
		var productInstance = new Product(req.body);
		productInstance.save(function(err){
			return res.json(true);
		})
	})
	app.delete('/products/:id', function(req, res){
		Product.remove({ _id: req.params.id }, function(err){
			return res.json(true);
		})
	})
	app.get('/products/:id', function(req, res){
		Product.findOne({_id:req.params.id}, function(err, product){
			return res.json(product);
		})
	})
	app.put('/products/:id', function(req, res){
		Product.update({_id: req.params.id}, {title: req.body.title }, function(err, product){
			return res.json(true)
		})
	})

	app.post('/orders', function(req, res){
		console.log(req.body);
	 	var orderInstance = new Order();
	 	for(index in req.body.products){
	 		orderInstance.products.push(req.body.products[index]._id)
	 	}
	 	orderInstance.customer = req.body.customer_id
	 	orderInstance.save(function(err){
	 		if(err){ console.log(err) }
	 		res.json(true);
	 	})
	})

	app.get('/orders', function(req, res){
		Order.find().populate('products').populate('customer').exec(function(err, orders){
			res.json(orders);
		})
	})

	app.delete('/orders/:id', function(req, res){
		Order.remove({_id: req.params.id}, function(err){
			res.json(true);
		})
	})
}