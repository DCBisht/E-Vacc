const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookingSchema = new mongoose.Schema({
  vaccine: {
    type: mongoose.Types.ObjectId,
    ref: "Vaccine",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model('Booking', BookingSchema);