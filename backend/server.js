const express = require("express");
const cors = require("cors");
const doctorRoutes = require("./routes/doctorRoutes");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Doctor Routes
app.use("/api/doctors", doctorRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is Running 🚀");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
