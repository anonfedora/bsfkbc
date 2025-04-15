const mongoose = require("mongoose")

const hymnSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    number: {
      type: String,
      required: true,
      trim: true,
    },
    firstLine: {
      type: String,
      required: true,
      trim: true,
    },
    lyrics: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      trim: true,
    },
    year: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      trim: true,
    },
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model("Hymn", hymnSchema)
