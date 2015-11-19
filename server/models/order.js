module.exports = function(){
	// Order Schema
	var OrderSchema = new mongoose.Schema({
	  customer: {type: mongoose.Schema.Types.ObjectId, ref:'Customer'},
	  products: [{ type: mongoose.Schema.Types.ObjectId, ref:'Product'}],
	  created_at: { type: Date, default: Date.now },
	  updated_at: { type: Date, default: Date.now }
	});
	mongoose.model('Order', OrderSchema);
}