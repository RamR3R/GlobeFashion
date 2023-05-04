const mongoose = require("mongoose");
require("dotenv").config();
const connnection = mongoose.connect(process.env.mongoUrl);

module.exports = connnection;