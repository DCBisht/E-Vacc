const express = require("express");
const {getBookingById,newBooking,deleteBooking} = require("../Controllers/Booking")

// const router = express.Router();

const bookingsRouter = express.Router();
bookingsRouter.get("/:id", getBookingById);
bookingsRouter.post("/", newBooking);
bookingsRouter.delete("/:id", deleteBooking);

module.exports = bookingsRouter;
