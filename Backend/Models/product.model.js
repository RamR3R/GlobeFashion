const mongoose = require("mongoose");
const productSchema  = mongoose.Schema({
    title:String,
    price: Number,
    discount:String,
    stockstatus:String,
    discription:String,
    ASIN:String,
    category:String,
    dimensions:String,
    rating:String,
    longdisp:String,
    bestseller:String,
    image1:String,
    image2:String,
    image3:String,
    image4:String,
    image5:String,
    image6:String
});

const ProductModel = mongoose.model("product",productSchema);

module.exports = ProductModel;