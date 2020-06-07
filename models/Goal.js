const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const GoalSchema = new Schema ({
  goal: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Goal = mongoose.model('goal', GoalSchema);
