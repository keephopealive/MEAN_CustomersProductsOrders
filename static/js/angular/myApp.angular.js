// Module
var myAppModule = angular.module('myApp', ['ngRoute']);

// Routes
myAppModule.config(function($routeProvider){
	$routeProvider
	.when('/', {
		redirectTo: "/customers"
	})
	.when('/customers', {
		templateUrl: "partials/customers.partial.html",
		controller: "customersController",
		controllerAs: "customersCtrl"
	})
	.when('/customers/:id', {
		templateUrl: "partials/customerDetails.partial.html",
		controller: "customerDetailsController",
		controllerAs: "customerCtrl"
	})
	.when('/orders', {
		templateUrl: "partials/orders.partial.html",
		controller: "ordersController",
		controllerAs: "ordersCtrl"
	})
	.when('/products', {
		templateUrl: "partials/products.partial.html",
		controller: "productsController",
		controllerAs: "productsCtrl"
	})
	.when('/products/:id', {
		templateUrl: "partials/productDetails.partial.html",
		controller: "productDetailsController",
		controllerAs: "productCtrl"
	})
})