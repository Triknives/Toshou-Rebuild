const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
//Goal model
const Goal = require('../../models/Goal');

// @route   GET api/goals
// @desc    Get ALL goals
// @access  Public
router.get('/',(req, res ) => {
  Goal.find()
    .sort({date: -1})
    .then(goals => res.json(goals));
});

// @route   POST api/goals
// @desc    Create A Goal
// @access  Public
router.post('/', (req, res) => {
  console.log(req.body)
  const newGoal = new Goal({
    goal: req.body.goal
  });
  newGoal.save().then(goal => res.json(goal))
  .catch(err => res.status(404).json({success: false}));
  console.log("Goal added")
});

// @route   Delete api/goals/:id
// @desc    Delete A Goal
// @access  Public
router.delete('/:id', (req, res) => {
    Goal.findById(req.params.id)
      .then(goal => goal.remove().then(() => res.json({success: true})))
      .catch(err => res.status(404).json({success: false}));
  });

module.exports = router;
