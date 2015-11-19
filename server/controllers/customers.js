var Customer = mongoose.model('Customer')
var Product = mongoose.model('Product')
var Order = mongoose.model('Order')

module.exports = {
	index: function(req, res){
		Customer.find({}, function(err, customers){
			res.json(customers);
		})
	},
	show: function(req, res){
		Customer.findOne({_id:req.params.id}, function(err, customer){
			return res.json(customer);
		})
	},
	create: function(req, res){
		var customerInstance = new Customer(req.body);
		customerInstance.save(function(err){
			return res.json(true);
		})
	},
	destroy: function(req, res){
		Customer.remove({ _id: req.params.id }, function(err){
			return res.json(true);
		})
	}

}