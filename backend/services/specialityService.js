const db = require("../config/db");

const getAllSpecialities = (callback) => {
  const sql = `
    SELECT 
      id,
      title,
      doctors_count,
      route,
      icon,
      bg,
      color
    FROM specialities
    ORDER BY id ASC
  `;

  db.query(sql, callback);
};

module.exports = {
  getAllSpecialities,
};
