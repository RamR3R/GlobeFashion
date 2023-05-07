const mongoose = require("mongoose");
const productSchema  = mongoose.Schema({
    name:String,
    price: Number,
    discount:Number,
    finalprice:Number,
    stock:String,
    description:Array,
    id:Number,
    category:String,
    sex:String,
    size:Array,
    rating:String,
    image1:String,
    image2:String,
    image3:String,
    image4:String
});

const ProductModel = mongoose.model("product",productSchema);

module.exports = ProductModel;