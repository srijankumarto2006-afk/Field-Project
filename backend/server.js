require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("./config/passport");

const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");

const app = express();

// Connect to MongoDB Atlas
connectDB();

// ✅ FIX: Allowed both 5500 and 5501 to support your dynamic Live Server ports
app.use(cors({
    origin: ["http://localhost:5501", "http://127.0.0.1:5501", "http://localhost:5500", "http://127.0.0.1:5500"],
    credentials: true
}));

app.use(express.json());

// Session Configuration
app.use(session({
    secret: process.env.JWT_SECRET || "fallback_secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // Set to true if using production HTTPS
        httpOnly: true
    }
}));

// Initialize Passport Middlewares
app.use(passport.initialize());
app.use(passport.session());

// Mount API Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Backend is Running 🚀");
});

const PORT = 5051;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

