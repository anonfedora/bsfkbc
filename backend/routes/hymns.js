const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Hymn = require("../models/Hymn");
const { protect, executive } = require("../middleware/auth");

// @route   GET /api/hymns
// @desc    Get all hymns
// @access  Public
router.get("/", async (req, res) => {
  try {
    const { category, search } = req.query;

    // Build query
    const query = {};

    if (category) {
      query.category = category;
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { firstLine: { $regex: search, $options: "i" } },
        { lyrics: { $regex: search, $options: "i" } },
        { number: { $regex: search, $options: "i" } },
      ];
    }

    const hymns = await Hymn.find(query)
      .sort({ number: 1 })
      .populate("addedBy", "firstName lastName");

    res.json({
      success: true,
      count: hymns.length,
      hymns,
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
