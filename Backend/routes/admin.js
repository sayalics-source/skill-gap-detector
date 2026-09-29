const express = require("express");
const User = require("../models/User");
const Assessment = require("../models/Assessment");

const router = express.Router();


// =========================================
// GET ALL USERS
// =========================================

router.get("/users", async (req, res) => {
  try {
    const users = await User.find()
      .select("-password")
      .sort({ createdAt: -1 });

    res.status(200).json(users);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Could not fetch users",
    });
  }
});


// =========================================
// GET ALL ASSESSMENTS
// =========================================

router.get("/assessments", async (req, res) => {
  try {
    const assessments = await Assessment.find()
      .populate("userId", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(assessments);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Could not fetch assessments",
    });
  }
});


module.exports = router;