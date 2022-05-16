const express = require('express');
const cors = require('cors');


const proxy = require('express-http-proxy');

const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
// const port = 8000;
// const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const url = process.env.ATLAS_URI;
global.URL = url;

mongoose.connect(url, {
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to Mongo!');
})
.catch((err) => {
    console.error('Error connecting to Mongo', err);
});

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("MongoDB connection successfully");
});

// const deliverys = proxy("http://localhost:8001");
// app.use("/delivery_service", deliverys);

const deliverys = require("./routes/delivery_service.js");
app.use("/delivery", deliverys);

app.listen(8001,() =>{
    console.log(`Server - Running On Port: 8001}`);
});