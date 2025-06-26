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
  createRooms,
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
ownerHotelRoutes.post(
  "/rooms/bulkCreate",
  authMiddleware,
  authorizeRoles("Owner"),
  createRooms
);


module.exports = ownerHotelRoutes;
