const mongoose=require('mongoose');
const Vaccine = require('./Vaccine');
const {Schema}=mongoose;

const UserSchema=new Schema({
    firstName:{
        type:String,
        default:'',
        required:true
    },
    lastName:{
        type:String,
        default:'',
        required:true
    },
    phNo:{
        type:Number,
        default:0,
        // unique:true,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    vaccines: {
        type: [Vaccine.schema],
    }
});


module.exports=mongoose.model('Users',UserSchema);