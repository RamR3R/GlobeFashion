const express = require("express");
const UserModel = require("../Models/user.model");
const userRouter = express.Router();

userRouter.get("/",(req,res)=>{
    res.send("User data Fecthed");
})

userRouter.post("/register",async(req,res)=>{
    const data = req.body;
    const id = await UserModel.find();
    data.userId = id.length + 1;
    data.noOfOrder = 0;
    UserModel.insertMany([data]);
    res.send({msg:"User registered Successfull",Data:data});
});

userRouter.post("/login",async(req,res)=>{
    res.send({msg:"Logged In successfull",User:req.name});
});

userRouter.patch("edit/:id",async(req,res)=>{
    
})
module.exports = userRouter;