const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const FinishedBookSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = FinishedBook = mongoose.model('finishedBook', FinishedBookSchema);
