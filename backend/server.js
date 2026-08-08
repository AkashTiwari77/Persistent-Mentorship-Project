const express = require("express");
const cors = require("cors");
const path = require("path");

require("./config/db");


const doctorRoutes = require("./routes/doctorRoutes");
const hospitalRoutes = require("./routes/hospitalRoutes");
const specialityRoutes = require("./routes/specialityRoutes"); // ✅ ADD THIS

const app = express();
const PORT = 5000;

console.log("Backend folder:", __dirname);
console.log("Public folder:", path.join(__dirname, "../public"));

app.use(cors());
app.use(express.json());

// Serve everything inside public
app.use(express.static(path.join(__dirname, "../public")));

// API Routes
app.use("/api/doctors", doctorRoutes);
app.use("/api/hospitals", hospitalRoutes);
app.use("/api/specialities", specialityRoutes); // ✅ ADD THIS

app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
