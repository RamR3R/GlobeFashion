const express = require("express");
const ProductModel = require("../Models/product.model");
const csv = require('csv-parser');
const fs = require('fs');

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

productRouter.post("/csv",async(req,res)=>{
    fs.createReadStream('../csv/data.csv')
    .pipe(csv())
    .on('data', (row) => {
        const newData = new ProductModel({
            name:row.name,
            price: row.price,
            discount:row.discount,
            finalprice:row.finalprice,
            stock:row.stock,
            description:row.description,
            id:row.id,
            category:row.category,
            sex:row.sex,
            size:row.size,
            rating:row.rating,
            image1:row.image1,
            image2:row.image2,
            image3:row.image3,
            image4:row.image4
        });
        newData.save((err) => {
        if (err) {
            console.error(err);
        }
        });
    })
    .on('end', () => {
        console.log('Data upload completed.');
        res.send("Data Uploaded to DB");
  });
})

productRouter.delete("/delete/:id",async(req,res)=>{
    await ProductModel.findByIdAndDelete(req.params.id);
    res.send({msg:"Product Deleted"});
})

module.exports = productRouter;