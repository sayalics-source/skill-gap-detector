const mongoose = require("mongoose");

const assessmentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    career: {
      type: String,
      required: true,
    },

    selectedSkills: {
      type: [String],
      required: true,
    },

    missingSkills: {
      type: [String],
      required: true,
    },

    matchPercentage: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Assessment", assessmentSchema);