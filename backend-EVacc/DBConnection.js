const mongoose=require('mongoose');
const mongoURI="mongodb+srv://chakshubisht459:5bXxZbGn0DMQSgvB@cluster0.h9p94dc.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo=async()=>{
    try{
        mongoose.set("strictQuery",false);
        mongoose.connect(mongoURI);
        console.log("Connection Successful, Connected to Admin");
    }catch(error){
        console.log(error);
    }
}

module.exports=connectToMongo;