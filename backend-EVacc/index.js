const express = require("express");
const mongoose = require("mongoose");
const dotenv= require("dotenv");
dotenv.config();

const username = encodeURIComponent(process.env.MONGODB_USERNAME);
const password = encodeURIComponent(process.env.MONGODB_PASSWORD);
const uri = `mongodb+srv://${username}:${password}@cluster0.h9p94dc.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(uri).then(()=>app.listen(5000, ()=>{
    console.log(`Connected to database and server is running at ${5000}`);
})).catch(e=> console.log("Error"+e));
const app = express();
const port=5000;

// import run from './DBConnection';
// run().catch(console.dir);

app.use(express.json());

app.use('/admin',require('../backend-EVacc/routes/Admin'));
app.use('/user',require('../backend-EVacc/routes/User'));


