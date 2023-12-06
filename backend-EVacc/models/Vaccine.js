const mongoose= require("mongoose");
const HospitalSchema = require("./HospitalSchema");
const {Schema}= mongoose;

const VaccineSchema= new Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    manufacturer: {
        type: String,
        required: true,
      },
      dateAdministered: {
        type: Date,
      },
      image: {
        type: String, // Assuming you store the image URL
      },
      description: {
        type: String,
      },
      availableQuantity: {
        type: Number,
        default: 0,
      },
      hospitals:{
        type:[HospitalSchema.schema],
      },  
});

module.exports = mongoose.model("Vaccine",VaccineSchema);