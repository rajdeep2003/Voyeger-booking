const mongoose = require("mongoose");
const Hotel = require("../models/HotelSchema");
const User = require("../models/UserSchema");
const Booking = require("../models/bookingschema");

const roomSchema = new mongoose.Schema({
  
  hotel: String,
  hotelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
    required: true,
  },
  room_type: String
}, { timestamps: true });

module.exports = mongoose.model("Room", roomSchema);
