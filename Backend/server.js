const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const User = require("./models/User");
const Assessment = require("./models/Assessment");
const adminRoutes = require("./routes/admin");

const app = express();

app.use(cors());
app.use(express.json());

/* =========================
   ADMIN ROUTES
========================= */

app.use("/api/admin", adminRoutes);

/* =========================
   HOME
========================= */

app.get("/", (req, res) => {
  res.send("Skill Gap Detector Backend is Running 🚀");
});

/* =========================
   REGISTER
========================= */

app.post("/api/auth/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Please enter name, email and password",
      });
    }

    const cleanEmail = email.trim().toLowerCase();

    const existingUser = await User.findOne({
      email: cleanEmail,
    });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name: name.trim(),
      email: cleanEmail,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User registered successfully",
      userId: user._id,
    });
  } catch (error) {
    console.log("Register error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
});

/* =========================
   LOGIN
========================= */

app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Please enter email and password",
      });
    }

    const cleanEmail = email.trim().toLowerCase();

    const user = await User.findOne({
      email: cleanEmail,
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!passwordMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("Login error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
});

/* =========================
   SAVE ASSESSMENT
========================= */

app.post("/api/assessments", async (req, res) => {
  try {
    const {
      userId,
      career,
      selectedSkills,
      missingSkills,
      matchPercentage,
    } = req.body;

    if (
      !userId ||
      !career ||
      !selectedSkills ||
      !missingSkills ||
      matchPercentage === undefined
    ) {
      return res.status(400).json({
        message: "Please provide complete assessment details",
      });
    }

    const assessment = await Assessment.create({
      userId,
      career,
      selectedSkills,
      missingSkills,
      matchPercentage,
    });

    res.status(201).json({
      message: "Assessment saved successfully",
      assessmentId: assessment._id,
    });
  } catch (error) {
    console.log("Assessment error:", error);

    res.status(500).json({
      message: "Could not save assessment",
    });
  }
});

/* =========================
   GET USER ASSESSMENTS
========================= */

app.get("/api/assessments/:userId", async (req, res) => {
  try {
    const assessments = await Assessment.find({
      userId: req.params.userId,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json(assessments);
  } catch (error) {
    console.log("Fetch assessment error:", error);

    res.status(500).json({
      message: "Could not fetch assessments",
    });
  }
});

/* =========================
   CONNECT MONGODB + START SERVER
========================= */

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully ✅");

    const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB Connection Failed ❌");
    console.log(error.message);
  });
