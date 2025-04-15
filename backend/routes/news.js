const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const News = require("../models/News");
const { protect, executive } = require("../middleware/auth");
const { upload } = require("../middleware/upload");

// @route   GET /api/news
// @desc    Get all news
// @access  Public
router.get("/", async (req, res) => {
  try {
    const { category, tag } = req.query;

    // Build query
    const query = { isPublished: true };

    if (category) {
      query.category = category;
    }

    if (tag) {
      query.tags = tag;
    }

    const news = await News.find(query)
      .sort({ date: -1 })
      .populate("author", "firstName lastName");

    res.json({
      success: true,
      count: news.length,
      news,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

// @route   GET /api/news/:id
// @desc    Get news by ID
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const news = await News.findById(req.params.id).populate(
      "author",
      "firstName lastName"
    );

    if (!news) {
      return res.status(404).json({
        success: false,
        message: "News not found",
      });
    }

    res.json({
      success: true,
      news,
    });
  } catch (error) {
    console.error(error);
    if (error.kind === "ObjectId") {
      return res.status(404).json({
        success: false,
        message: "News not found",
      });
    }
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

// @route   POST /api/news
// @desc    Create a news article
// @access  Private/Executive
router.post(
  "/",
  protect,
  executive,
  upload.single("image"),
  [
    body("title", "Title is required").notEmpty(),
    body("date", "Date is required").notEmpty(),
    body("excerpt", "Excerpt is required").notEmpty(),
    body("content", "Content is required").notEmpty(),
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    try {
      // Check if image was uploaded
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "Please upload an image",
        });
      }

      const { title, date, excerpt, content, category, tags, isPublished } =
        req.body;

      // Create new news article
      const news = new News({
        title,
        date,
        excerpt,
        content,
        imageUrl: `/${req.file.path}`,
        category,
        tags: tags ? tags.split(",").map((tag) => tag.trim()) : [],
        author: req.user.id,
        isPublished: isPublished === "true",
      });

      // Save news to database
      await news.save();

      res.status(201).json({
        success: true,
        news,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  }
);

module.exports = router;
