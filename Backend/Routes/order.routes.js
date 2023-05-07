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

orderRouter.patch("/update/:id",async(req,res)=>{
    await OrderModel.findByIdAndUpdate(req.params.id,req.body);
    const data = await OrderModel.findById(req.params.id);
    res.send({msg:"Order status Updated",data:data});
})

module.exports = orderRouter;