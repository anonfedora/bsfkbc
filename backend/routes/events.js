const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Event = require("../models/Event");
const { protect, executive } = require("../middleware/auth");
const { upload } = require("../middleware/upload");

// @route   GET /api/events
// @desc    Get all events
// @access  Public
router.get("/", async (req, res) => {
  try {
    const { category, isPastEvent } = req.query;

    // Build query
    const query = {};

    if (category) {
      query.category = category;
    }

    if (isPastEvent !== undefined) {
      query.isPastEvent = isPastEvent === "true";
    }

    const events = await Event.find(query)
      .sort({ date: isPastEvent === "true" ? -1 : 1 })
      .populate("createdBy", "firstName lastName");

    res.json({
      success: true,
      count: events.length,
      events,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

// @route   GET /api/events/:id
// @desc    Get event by ID
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id)
      .populate("createdBy", "firstName lastName")
      .populate("attendees", "firstName lastName email");

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    res.json({
      success: true,
      event,
    });
  } catch (error) {
    console.error(error);
    if (error.kind === "ObjectId") {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

// @route   POST /api/events
// @desc    Create a new event
// @access  Private/Executive
router.post(
  "/",
  protect,
  executive,
  upload.single("image"),
  [
    body("title", "Title is required").notEmpty(),
    body("date", "Date is required").notEmpty(),
    body("time", "Time is required").notEmpty(),
    body("location", "Location is required").notEmpty(),
    body("description", "Description is required").notEmpty(),
    body("category", "Category is required").notEmpty(),
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

      const {
        title,
        date,
        time,
        endTime,
        location,
        description,
        category,
        organizer,
        registrationRequired,
        registrationLink,
        isPastEvent,
      } = req.body;

      // Create new event
      const event = new Event({
        title,
        date,
        time,
        endTime,
        location,
        description,
        imageUrl: `/${req.file.path}`,
        category,
        organizer,
        registrationRequired: registrationRequired === "true",
        registrationLink,
        isPastEvent: isPastEvent === "true",
        createdBy: req.user.id,
      });

      // Save event to database
      await event.save();

      res.status(201).json({
        success: true,
        event,
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

// @route   PUT /api/events/:id
// @desc    Update event
// @access  Private/Executive
router.put(
  "/:id",
  protect,
  executive,
  upload.single("image"),
  [
    body("title").optional(),
    body("date").optional(),
    body("time").optional(),
    body("location").optional(),
    body("description").optional(),
    body("category").optional(),
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
      // Get event
      const event = await Event.findById(req.params.id);

      if (!event) {
        return res.status(404).json({
          success: false,
          message: "Event not found",
        });
      }

      // Update fields
      const fieldsToUpdate = [
        "title",
        "date",
        "time",
        "endTime",
        "location",
        "description",
        "category",
        "organizer",
        "registrationRequired",
        "registrationLink",
        "isPastEvent",
      ];

      fieldsToUpdate.forEach((field) => {
        if (req.body[field] !== undefined) {
          if (field === "registrationRequired" || field === "isPastEvent") {
            event[field] = req.body[field] === "true";
          } else {
            event[field] = req.body[field];
          }
        }
      });

      // Update image if uploaded
      if (req.file) {
        event.imageUrl = `/${req.file.path}`;
      }

      // Save updated event
      await event.save();

      res.json({
        success: true,
        event,
      });
    } catch (error) {
      console.error(error);
      if (error.kind === "ObjectId") {
        return res.status(404).json({
          success: false,
          message: "Event not found",
        });
      }
      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  }
);

// @route   DELETE /api/events/:id
// @desc    Delete event
// @access  Private/Executive
router.delete("/:id", protect, executive, async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    await event.remove();

    res.json({
      success: true,
      message: "Event removed",
    });
  } catch (error) {
    console.error(error);
    if (error.kind === "ObjectId") {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

module.exports = router;
