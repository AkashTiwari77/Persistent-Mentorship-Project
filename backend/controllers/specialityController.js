const specialityService = require("../services/specialityService");

const getAllSpecialities = (req, res) => {
  specialityService.getAllSpecialities((error, results) => {
    if (error) {
      console.error("Error fetching specialities:", error);

      return res.status(500).json({
        success: false,
        message: "Failed to fetch specialities",
        error: error.message,
      });
    }

    res.json({
      success: true,
      count: results.length,
      data: results,
    });
  });
};

module.exports = {
  getAllSpecialities,
};
