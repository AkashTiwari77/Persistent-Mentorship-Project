const doctorService = require("../services/doctorService");

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

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error(error);

    if (error.message === "Doctor not found") {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = {
  searchDoctors,
};
