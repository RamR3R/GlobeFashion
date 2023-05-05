const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    UserOrderNumber : Number,
    orderId:String,
    userId : String,
    orderStatus: String,
    delivered:Boolean,
    deliveryAddress:String
});

const OrderModel = mongoose.model("order",orderSchema);

module.exports =OrderModel;