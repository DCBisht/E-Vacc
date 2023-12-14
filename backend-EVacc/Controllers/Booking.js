const Vaccine = require('../models/Vaccine');
const Users = require('../models/Users');
const Booking =require("../models/Booking");
const mongoose= require("mongoose");

const newBooking = async (req, res) => {
  const { vaccine, date, user } = req.body;

  let existingVaccine;
  let existingUser;
  try {
    existingVaccine = await Vaccine.findById(vaccine);
    existingUser = await Users.findById(user);
  } catch (err) {
    return console.log(err+"dcbisht");
  }
  if (!existingVaccine) {
    return res.status(404).json({ message: "Vaccine Not Found With Given ID" });
  }
  if (!user) {
    return res.status(404).json({ message: "User not found with given ID " });
  }
  let booking;

  try {
    booking = new Booking({
      vaccine,
      date: new Date(`${date}`),
      user,
    });
    const session = await mongoose.startSession();
    session.startTransaction();
    await existingUser.save({ session });
    await existingVaccine.save({ session });
    await booking.save({ session });
    session.commitTransaction();
  } catch (err) {
    return console.log(err);
  }

  if (!booking) {
    return res.status(500).json({ message: "Unable to create a booking" });
  }

  return res.status(201).json({ booking });
};

 const deleteBooking = async (req, res) => {
  const id = req.params.id;
  let booking;
  try {
    booking = await Booking.findByIdAndRemove(id).populate("user movie");
    console.log(booking);
    const session = await mongoose.startSession();
    session.startTransaction();
    // await booking.user.bookings.pull(booking);
    // await booking.movie.bookings.pull(booking);
    await booking.movie.save({ session });
    await booking.user.save({ session });
    session.commitTransaction();
  } catch (err) {
    return console.log(err);
  }
  if (!booking) {
    return res.status(500).json({ message: "Unable to Delete" });
  }
  return res.status(200).json({ message: "Successfully Deleted" });
};

const getBookingById = async (req, res, next) => {
  const id = req.params.id;
  let booking;
  try {
    booking = await Bookings.findById(id);
  } catch (err) {
    return console.log(err);
  }
  if (!booking) {
    return res.status(500).json({ message: "Unexpected Error" });
  }
  return res.status(200).json({ booking });
};

module.exports={getBookingById,deleteBooking,newBooking};