const express = require("express");
import {
  deleteBooking,
  getBookingById,
  newBooking,
} from "../Controllers/Booking";

// const router = express.Router();

const bookingsRouter = express.Router();
bookingsRouter.get("/:id", getBookingById);
bookingsRouter.post("/", newBooking);
bookingsRouter.delete("/:id", deleteBooking);

module.exports = router;
