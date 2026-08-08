const db = require("../config/db");

// Get all hospitals from MySQL
const getAllHospitals = async () => {
  const [rows] = await db
    .promise()
    .query("SELECT * FROM hospitals ORDER BY rating DESC");

  return rows;
};

module.exports = {
  getAllHospitals,
};
