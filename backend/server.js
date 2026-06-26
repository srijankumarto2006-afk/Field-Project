require("dotenv").config();
const express = require("express");
const cors = require("cors"); // <-- 1. Make sure this is required

const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");

const app = express();

connectDB();

// MIDDLEWARE (Must be placed BEFORE app.use("/api/auth", ...))
app.use(cors()); // <-- 2. Make sure this line is active!
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Backend is Running 🚀");
});

const PORT = 5051;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});