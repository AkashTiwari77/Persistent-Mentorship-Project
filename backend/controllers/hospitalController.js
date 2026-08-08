const hospitalService = require("../services/hospitalService");

// Get All Hospitals
const getAllHospitals = async (req, res) => {
  try {
    const hospitals = await hospitalService.getAllHospitals();

    res.status(200).json({
      success: true,
      count: hospitals.length,
      data: hospitals,
    });
  } catch (error) {
    console.error("Error fetching hospitals:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch hospitals",
      error: error.message,
    });
  }
};

module.exports = {
  getAllHospitals,
};
