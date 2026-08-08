const express = require("express");

const router = express.Router();

const doctorController = require("../controllers/doctorController");

// Get all doctors
router.get("/", doctorController.getAllDoctors);

// Search doctors
router.get("/search", doctorController.searchDoctors);

module.exports = router;
