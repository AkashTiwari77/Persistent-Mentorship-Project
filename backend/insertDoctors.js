const db = require("./config/db");
const doctors = require("./data/doctors");

console.log(`Total doctors to insert: ${doctors.length}`);

const sql = `
    INSERT INTO doctors
    (
        name,
        image,
        specialty,
        age,
        experience,
        hospital,
        location,
        rating,
        reviews,
        fee,
        availability,
        summary,
        profile
    )
    VALUES ?
`;

const values = doctors.map((doctor) => [
  doctor.name,
  doctor.image,
  doctor.specialty,
  doctor.age,
  doctor.experience,
  doctor.hospital,
  doctor.location,
  doctor.rating,
  doctor.reviews,
  doctor.fee,
  doctor.availability,
  doctor.summary,
  doctor.profile,
]);

db.query(sql, [values], (err, result) => {
  if (err) {
    console.error("❌ Failed to insert doctors:", err.message);
    db.end();
    return;
  }

  console.log(`✅ Successfully inserted ${result.affectedRows} doctors`);

  db.end();
});
