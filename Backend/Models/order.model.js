const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    UserOrderNumber : Number,
    userId : String,
    orderStatus: String,
    delivered:Boolean,
    deliveryAddress:String,
    userName :String,
    price : Number
});

const OrderModel = mongoose.model("order",orderSchema);

module.exports = OrderModel;