const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const BookSchema = new Schema ({
  title: {
    type: String,
    required: true
  },
  writer: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Book = mongoose.model('book', BookSchema);
