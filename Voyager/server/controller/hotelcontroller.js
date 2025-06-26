const Hotel = require("../models/HotelSchema");
const bcrypt = require("bcryptjs");

exports.createHotel = async (req, res) => {
  try {
    const {
      place,
      name,
      location,
      geolocation,
      main_image,
      ownerEmail,
      ownerPassword,
      price,
      rating,
      features,
      hotel_images,
      room_images,
      amenities_images,
      dining_images,
      amenities,
      description,
      duration,
      people,
      standard_rooms,
      deluxe_rooms,
      suite_rooms,
      isActive,
      nearby_attractions,
      airports,
      rail,
      bus,
      ports,
      local_transport,
      contact_info,
      reviews,
      policy
    } = req.body;

    // Basic required field validation
    if (!place || !name || !location || !price || !ownerEmail || !ownerPassword) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields: place, name, location, price, ownerEmail, or ownerPassword."
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(ownerPassword, 10);

    // Create hotel document
    const newHotel = await Hotel.create({
      place,
      name,
      location,
      geolocation,
      main_image,
      ownerEmail: ownerEmail.toLowerCase().trim(),
      ownerPassword: hashedPassword,
      price,
      rating,
      features,
      hotel_images,
      room_images,
      amenities_images,
      dining_images,
      amenities,
      description,
      duration,
      people,
      standard_rooms,
      deluxe_rooms,
      suite_rooms,
      isActive: isActive !== undefined ? isActive : true,
      nearby_attractions,
      airports,
      rail,
      bus,
      ports,
      local_transport,
      contact_info,
      reviews,
      policy
    });

    return res.status(201).json({
      success: true,
      message: "Hotel created successfully",
      hotel: newHotel
    });

  } catch (error) {
    console.error("Error creating hotel:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
};

exports.getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



