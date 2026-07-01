console.log("✅ auth.js loaded");

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const User = require("../models/User");

// ==========================================
// 1. SIGNUP API
// ==========================================
router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill all fields"
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            provider: "local"
        });

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        return res.status(201).json({
            success: true,
            message: "Account Created Successfully",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// ==========================================
// 2. LOGIN API
// ==========================================
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill all fields"
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid Email or Password"
            });
        }

        if (user.provider === "google" || !user.password) {
            return res.status(400).json({
                success: false,
                message: "This account is registered via Google. Please login with Google."
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid Email or Password"
            });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        return res.status(200).json({
            success: true,
            message: "Logged In Successfully",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// ==========================================
// 3. GOOGLE LOGIN (Updated with dynamic state tracking)
// ==========================================
router.get("/google", (req, res, next) => {
    // 1. Read incoming custom folder path from frontend button trigger (?state=...)
    const targetPath = req.query.state || "/FRONTEND/DiningOut/newindex.html"; 
    
    // 2. Forward that destination context into Passport using the built-in state parameter
    passport.authenticate("google", {
        scope: ["profile", "email"],
        prompt: "select_account",
        state: targetPath 
    })(req, res, next);
});

// ==========================================
// 4. GOOGLE CALLBACK (Updated with dynamic redirect logic)
// ==========================================
router.get(
    "/google/callback",
    passport.authenticate("google", {
        session: false,
        failureRedirect: "http://127.0.0.1:5501/FRONTEND/Landingpage/index.html"
    }),
    (req, res) => {
        // 1. Safely extract the state variable passed back from Google
        let targetPath = req.query.state || "/FRONTEND/DiningOut/newindex.html";

        // Avoid doubling up forward slashes if missing
        if (!targetPath.startsWith("/")) {
            targetPath = "/" + targetPath;
        }

        // 2. Build secure Session Authentication Payload variables
        const token = jwt.sign(
            { id: req.user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        const user = encodeURIComponent(JSON.stringify({
            id: req.user._id,
            name: req.user.name,
            email: req.user.email,
            picture: req.user.picture
        }));

        // 3. ✅ DYNAMIC REDIRECT FIX: Using targetPath instead of a hardcoded string!
        return res.redirect(
            `http://127.0.0.1:5501${targetPath}?token=${token}&user=${user}`
        );
    }
);

// ==========================================
// TEST
// ==========================================
router.get("/test", (req, res) => {
    res.send("Auth Route Working");
});

module.exports = router;