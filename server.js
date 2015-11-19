// Configuration
// Express
var express = require('express');
var app = express();
// Body Praser 
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// Static Folder
app.use(express.static(__dirname+'/static'));
// Server Listening...
app.listen(1337);

// Mongoose
mongoose = require('mongoose');
require('./server/config/mongoose.js')
// require('./server/models/customer.js')();
// require('./server/models/product.js')();
// require('./server/models/order.js')();

// Routes
require('./server/config/routes.js')(app)