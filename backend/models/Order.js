const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    orderItems: Array,
    totalPrice: Number,
    isPaid: Boolean
});
module.exports = mongoose.model('Order', OrderSchema);
