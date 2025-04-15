const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Video = require("../models/Video");
const { protect, executive } = require("../middleware/auth");
const { upload } = require("../middleware/upload");

// @route   GET /api/videos
// @desc    Get all videos
// @access  Public
router.get("/", async (req, res) => {
  try {
    const { category, tag } = req.query;

    // Build query
    const query = {};

    if (category) {
      query.category = category;
    }

    if (tag) {
      query.tags = tag;
    }

    const videos = await Video.find(query)
      .sort({ date: -1 })
      .populate("uploadedBy", "firstName lastName");

    res.json({
      success: true,
      count: videos.length,
      videos,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

module.exports = router;
