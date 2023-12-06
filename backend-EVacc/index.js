const express = require("express");
const mongoose = require("mongoose");
const dotenv= require("dotenv");

dotenv.config();

const username = encodeURIComponent("chakshubisht459");
const password = encodeURIComponent("forproduction");
const uri = `mongodb+srv://${username}:${password}@cluster0.h9p94dc.mongodb.net/?retryWrites=true&w=majority`;

const app = express();
app.use(express.json());

mongoose.connect(uri).then(()=>app.listen(5000, ()=>{
    console.log(`Connected to database and server is running at ${5000}`);
})).catch(e=> console.log("Error"+e));



app.use('/admin',require('./routes/Admin'));
app.use('/user',require('./routes/User'));