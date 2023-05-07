const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    UserOrderNumber : Number,
    userId : String,
    orderStatus: String,
    delivered:Boolean,
    deliveryAddress:String,
    userName :String
});

const OrderModel = mongoose.model("order",orderSchema);

module.exports = OrderModel;