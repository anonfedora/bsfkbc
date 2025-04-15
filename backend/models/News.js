const mongoose = require("mongoose")

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      trim: true,
    },
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model("News", newsSchema)
