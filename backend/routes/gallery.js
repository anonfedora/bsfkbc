const express = require("express")
const router = express.Router()
const { body, validationResult } = require("express-validator")
const Gallery = require("../models/Gallery")
const { protect, executive } = require("../middleware/auth")
const { upload } = require("../middleware/upload")

// @route   GET /api/gallery
// @desc    Get all gallery items
// @access  Public
router.get("/", async (req, res) => {
  try {
    const { category, event } = req.query

    // Build query
    const query = {}

    if (category) {
      query.category = category
    }

    if (event) {
      query.event = event
    }

    const galleryItems = await Gallery.find(query)
      .sort({ date: -1 })
      .populate("uploadedBy", "firstName lastName")
      .populate("event", "title")

    res.json({
      success: true,
      count: galleryItems.length,
      gallery: galleryItems,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

module.exports = router
