const express = require("express");
const UserModel = require("../Models/user.model");
const userRouter = express.Router();

userRouter.get("/",async(req,res)=>{
    const data = await UserModel.find();
    res.send({msg:"User data Fecthed",data:data});
})

userRouter.post("/register",async(req,res)=>{
    const data = await UserModel.find({email:req.body.email});
    if(data.length>0)
    res.send({msg:"User Already Exists"})
    else
    {
        const id = await UserModel.find();
        data.userId = id.length + 1;
        data.noOfOrder = 0;
        UserModel.insertMany([data]);
        res.send({msg:"User registered Successfull",Data:data});
    }
}); 

userRouter.post("/login",async(req,res)=>{
    const data = await UserModel.find({email:req.email,passsword:req.passsword});
    if(data.length>0)
    res.send({msg:"Logged In successfull",User:data.name});
    else
    res.send({msg:"User Doesn't exists Register As new User"});
});

userRouter.patch("edit/:id",async(req,res)=>{
    
})
module.exports = userRouter;