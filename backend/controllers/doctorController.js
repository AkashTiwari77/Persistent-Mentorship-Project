const wikipediaService = require("../services/wikipediaService");

const searchDoctors = async (req, res) => {
  try {
    const doctorName = req.query.name;

    if (!doctorName) {
      return res.status(400).json({
        success: false,
        message: "Doctor name is required",
      });
    }

    const result = await wikipediaService.searchWikipedia(doctorName);

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = {
  searchDoctors,
};
