const express = require("express");
const OrderModel = require("../Models/order.model");
const orderRouter = express.Router();

orderRouter.get("/",async(req,res)=>{
    const data = await OrderModel.find();
    res.send({msg:"Orders get done",data:data});
});

orderRouter.post("/new",async(req,res)=>{
    await OrderModel.insertMany([req.body]);
    res.send({msg:"Order Posted"});
})

orderRouter.get('/download', async(req, res) => {
    // Find all data from MongoDB
    data = await OrderModel.find();
      // Convert data to CSV format
    let csv = `name,status,address,price \n}`;
    csv += data.map(row => `${row.userName},${row.orderStatus},${row.deliveryAddress},${row.price}`).join('\n');

    // Set response headers for file download
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=data.csv');

    // Send the CSV file to the client
    res.send(csv);
    });

orderRouter.patch("/update/:id",async(req,res)=>{
    await OrderModel.findByIdAndUpdate(req.params.id,req.body);
    const data = await OrderModel.findById(req.params.id);
    res.send({msg:"Order status Updated",data:data});
})

module.exports = orderRouter;