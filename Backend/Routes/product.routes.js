const express = require("express");
const ProductModel = require("../Models/product.model");
const csv = require('csv-parser');
const fs = require('fs');
const multer = require("multer");
const upload = multer({ dest: 'uploads/' });
const cors = require("cors");
const path = require("path");

const productRouter = express.Router();

productRouter.use(cors());

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
});
productRouter.post('/upload/csv', upload.single('csv'), (req, res) => {
    const storage = multer.memoryStorage();
    const upload = multer({ storage });

    // Access the uploaded file using req.file
    const file = req.file;

    const destinationFolder = './csv';
  
    // Build the full file path
    const filePath = path.join(destinationFolder, "data.csv");
  
    // Move the file to the desired destination
    fs.rename(file.path, filePath, (err) => {
      if (err) {
        console.error('Error uploading file', err);
        res.sendStatus(500);
      } else {
        console.log('File uploaded', filePath);
        res.sendStatus(200);
      }
    });
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
  
    // Send a response back to the client
  });

productRouter.get('/download', async(req, res) => {
    // Find all data from MongoDB
    data = await ProductModel.find();
      // Convert data to CSV format
    let csv = `name,price,discount,finalprice,image1 \n}`;
    csv += data.map(row => `${row.name},${row.price},${row.discount},${row.finalprice},${row.image1}`).join('\n');

    // Set response headers for file download
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=data.csv');

    // Send the CSV file to the client
    res.send(csv);
    });

productRouter.delete("/delete/:id",async(req,res)=>{
    await ProductModel.findByIdAndDelete(req.params.id);
    res.send({msg:"Product Deleted"});
})

module.exports = productRouter;