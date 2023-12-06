const mongoose= require("mongoose");
const {Schema}= mongoose;


const hospitalSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    district:{
        type: String,
        required: true,
    },
    address: {
      type: String,
      required: true,
    },
    contact: {
      phone: {
        type: String,
      },
      email: {
        type: String,
      },
    },
    hoursOfOperation: {
      type: String,
    },
    // Add more fields as needed for hospital details
  });

  module.exports = mongoose.model("Hospital",hospitalSchema);