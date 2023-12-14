const mongoose= require("mongoose");
const {Schema}= mongoose;

const VaccineSchema= new Schema({
    name:{
        type:String,
        required:true,
        sparse:true,
        // unique:true,
    },
    when_to_give: {
        type: String,
        required: true,
      },
      dose: {
        type: String,
      },
      route: {
        type: String, // Assuming you store the image URL
      },
      description: {
        type: String,
      },
      site: {
        type: String,
        default: "",
      },
});

module.exports = mongoose.model("Vaccine",VaccineSchema);