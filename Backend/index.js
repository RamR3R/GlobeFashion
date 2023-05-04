const express = require('express');
const app = express();
const connection = require("./db");
const userRouter = require('./Routes/user.routes');

app.use(express.json());

app.get('/', (req, res) => res.send('Globe Fashion API'));

app.use("/users",userRouter);

app.listen(process.env.PORT, async() =>{
    try{
        await connection;
        console.log("Conected to DB");
        console.log(`Server Running in PORT ${process.env.PORT}`);
    }
    catch(err)
    {
        console.log(err);
        console.log("Connection to DB Failed");
    }
})
