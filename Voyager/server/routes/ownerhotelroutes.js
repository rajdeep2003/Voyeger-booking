const express = require("express");
const ownerHotelRoutes = express.Router();

const {
  authMiddleware,
  authorizeRoles,
} = require("../middleware/authMiddleware");
const {
  createHotel,
  getAllHotels,
  deleteHotel,
} = require("../controller/hotelcontroller");
ownerHotelRoutes.post(
  "/create",
  authMiddleware,
  authorizeRoles("Owner"),
  createHotel
);
ownerHotelRoutes.get(
  "/all",
  authMiddleware,
  authorizeRoles("Owner"),
  getAllHotels
);
ownerHotelRoutes.delete(
  "/delete/:id",
  authMiddleware,
  authorizeRoles("Owner"),
  deleteHotel
);

module.exports = ownerHotelRoutes;
