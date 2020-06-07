const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ReviewSchema = new Schema ({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  post: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Review = mongoose.model('review', ReviewSchema);
