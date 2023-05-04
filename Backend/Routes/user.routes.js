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
    UserModel.insertMany([data]);
    res.send({msg:"User registered Successfull",Data:data});
});

module.exports = userRouter;