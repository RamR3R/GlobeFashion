const express = require("express");
const ProductModel = require("../Models/product.model");

const productRouter = express.Router();

productRouter.get("/",async(req,res)=>{
    const data = await ProductModel.find();
    res.send(data);
});

productRouter.post("/add",async(req,res)=>{
    await ProductModel.insertMany([req.body]);
    const data = await ProductModel.find();
    res.send({msg:"Data added to db",Data:data});
})

productRouter.patch("/edit/:id",async(req,res)=>{
    await ProductModel.findByIdAndUpdate(req.params.id,req.body);
    const data = await ProductModel.findById(req.params.id);
    res.send({msg:"Prodicted edited" , Data : data});
})

productRouter.delete("/delete/:id",async(req,res)=>{
    await ProductModel.findByIdAndDelete(req.params.id);
    res.send({msg:"Product Deleted"});
})

module.exports = productRouter;