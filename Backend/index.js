const express = require('express');
const app = express();
const connnection = require("./db");

app.use(express.json());

app.get('/', (req, res) => res.send('Globe Fashion API'));

app.listen(process.env.PORT, async() =>{
    try{
        await connnection;
        console.log("Conected to DB");
        console.log(`Server Running in PORT ${process.env.PORT}`);
    }
    catch(err)
    {
        console.log(err);
        console.log("Connection to DB Failed");
    }
})
