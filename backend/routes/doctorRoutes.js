const express = require("express");
const doctorController = require("../controllers/doctorController");

const router = express.Router();

router.get("/", doctorController.searchDoctors);

module.exports = router;
