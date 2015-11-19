module.exports = function(){
	// Product Schema
	var ProductSchema = new mongoose.Schema({
	  title: { type: String, required:true, trim:true},
	  created_at: { type: Date, default: Date.now },
	  updated_at: { type: Date, default: Date.now }
	});
	mongoose.model('Product', ProductSchema);
};