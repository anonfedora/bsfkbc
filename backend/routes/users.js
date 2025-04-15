const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const { protect, admin } = require("../middleware/auth");
const { upload } = require("../middleware/upload");

// @route   GET /api/users
// @desc    Get all users
// @access  Private/Admin
router.get("/", protect, admin, async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json({
      success: true,
      count: users.length,
      users,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

// @route   GET /api/users/:id
// @desc    Get user by ID
// @access  Private/Admin
router.get("/:id", protect, admin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      user,
    });
  } catch (error) {
    console.error(error);
    if (error.kind === "ObjectId") {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

// @route   PUT /api/users/profile
// @desc    Update user profile
// @access  Private
router.put(
  "/profile",
  protect,
  upload.single("profileImage"),
  [
    body("firstName", "First name is required").optional().notEmpty(),
    body("lastName", "Last name is required").optional().notEmpty(),
    body("email", "Please include a valid email").optional().isEmail(),
    body("phone").optional(),
    body("institution").optional(),
    body("department").optional(),
    body("level").optional(),
    body("address").optional(),
    body("homeChurch").optional(),
    body("bio").optional(),
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
      // Get user
      const user = await User.findById(req.user.id);

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      // Update fields
      const fieldsToUpdate = [
        "firstName",
        "lastName",
        "email",
        "phone",
        "institution",
        "department",
        "level",
        "dateOfBirth",
        "address",
        "baptismDate",
        "homeChurch",
        "bio",
      ];

      fieldsToUpdate.forEach((field) => {
        if (req.body[field] !== undefined) {
          user[field] = req.body[field];
        }
      });

      // Update profile image if uploaded
      if (req.file) {
        user.profileImage = `/${req.file.path}`;
      }

      // Save updated user
      await user.save();

      res.json({
        success: true,
        user: {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          role: user.role,
          profileImage: user.profileImage,
          phone: user.phone,
          institution: user.institution,
          department: user.department,
          level: user.level,
          dateOfBirth: user.dateOfBirth,
          address: user.address,
          baptismDate: user.baptismDate,
          homeChurch: user.homeChurch,
          bio: user.bio,
        },
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

// @route   PUT /api/users/:id
// @desc    Update user by ID (admin only)
// @access  Private/Admin
router.put(
  "/:id",
  protect,
  admin,
  [
    body("firstName").optional(),
    body("lastName").optional(),
    body("email", "Please include a valid email").optional().isEmail(),
    body("role", "Role must be user, admin, or executive")
      .optional()
      .isIn(["user", "admin", "executive"]),
    body("position").optional(),
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
      // Get user
      const user = await User.findById(req.params.id);

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      // Update fields
      const fieldsToUpdate = [
        "firstName",
        "lastName",
        "email",
        "role",
        "position",
      ];

      fieldsToUpdate.forEach((field) => {
        if (req.body[field] !== undefined) {
          user[field] = req.body[field];
        }
      });

      // Save updated user
      await user.save();

      res.json({
        success: true,
        user: {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          role: user.role,
          position: user.position,
        },
      });
    } catch (error) {
      console.error(error);
      if (error.kind === "ObjectId") {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }
      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  }
);

// @route   DELETE /api/users/:id
// @desc    Delete user
// @access  Private/Admin
router.delete("/:id", protect, admin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    await user.remove();

    res.json({
      success: true,
      message: "User removed",
    });
  } catch (error) {
    console.error(error);
    if (error.kind === "ObjectId") {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

module.exports = router;
