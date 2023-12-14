const mongoose=require('mongoose');
const {Schema}=mongoose;

const AdminSchema=new Schema({
    adminid:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    admin:{
        type:Boolean,
        default:true
    },
});

module.exports=mongoose.model('Admins',AdminSchema);