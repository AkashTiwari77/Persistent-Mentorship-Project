const express = require("express");

const router = express.Router();

const hospitalController = require("../controllers/hospitalController");

// Get all hospitals
router.get("/", hospitalController.getAllHospitals);

module.exports = router;
