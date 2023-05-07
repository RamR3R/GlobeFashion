const mongoose = require("mongoose");
const userSchema  = mongoose.Schema({
    name:String,
    userId : Number,
    email : String,
    password : String,
    noOfOrder : Number,
    admin:Boolean
});

const UserModel = mongoose.model("user",userSchema);


module.exports = UserModel;