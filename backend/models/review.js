const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  parentMenu: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restuarant",
    required: true,
  },
  content: {
    type: String,
    trim: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Review", reviewSchema);
