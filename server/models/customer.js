module.exports = function(){
	// Customer Schema
	var CustomerSchema = new mongoose.Schema({
	  name: { type: String, required:true, trim:true},
	  created_at: { type: Date, default: Date.now },
	  updated_at: { type: Date, default: Date.now }
	});
	mongoose.model('Customer', CustomerSchema);
}