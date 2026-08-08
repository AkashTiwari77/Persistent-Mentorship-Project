const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Akash@7117",
  database: "persistent_healthcare_db",
  port: 3306,
});

connection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.message);
    return;
  }

  console.log("✅ MySQL Connected Successfully");
});

module.exports = connection;
