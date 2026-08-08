const doctorService = require("../services/doctorService");

// Get All Doctors
const getAllDoctors = async (req, res) => {
  try {
    const doctors = await doctorService.getAllDoctors();

    res.status(200).json({
      success: true,
      count: doctors.length,
      data: doctors,
    });
  } catch (error) {
    console.error("Error fetching doctors:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// Search Doctor
const searchDoctors = async (req, res) => {
  try {
    const doctorName = req.query.name;

    if (!doctorName) {
      return res.status(400).json({
        success: false,
        message: "Doctor name is required",
      });
    }

    const result = await doctorService.searchDoctors(doctorName);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Error searching doctor:", error);

    if (error.message === "Doctor not found") {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }

    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

module.exports = {
  getAllDoctors,
  searchDoctors,
};
