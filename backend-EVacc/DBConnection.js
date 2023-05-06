const mongoose=require('mongoose');
const mongoURI="mongodb://localhost:27017";

const connectToMongo=async()=>{
    try{
        mongoose.set("strictQuery",false);
        mongoose.connect(mongoURI);
        console.log("Connection Successful");
    }catch(error){
        console.log(error);
    }
}

module.exports=connectToMongo;