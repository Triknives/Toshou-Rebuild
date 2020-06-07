const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
// Item model
const FinishedBook = require('../../models/FinishedBook');

// @route   GET api/Items
// @desc    Get ALL items
// @access  Public
router.get('/', (req, res) => {
  FinishedBook.find()
    .sort({date: -1})
    .then(finishedBooks => res.json(finishedBooks));
});

// @route   POST api/Items
// @desc    Create An Item
// @access  Public
router.post('/', (req, res) => {
  console.log(req.body)
  const newFinishedBook = new FinishedBook({
    name: req.body.name,
    author: req.body.author
  });
  newFinishedBook.save().then(newFinishedBook => res.json(newFinishedBook));
  console.log("Finished Book added")
});

// @route   Delete api/items/:id
// @desc    Delete A Item
// @access  Public
router.delete('/:id', (req, res) => {
    FinishedBook.findById(req.params.id)
      .then(finishedBook => finishedBook.remove().then(() => res.json({success: true})))
      .catch(err => res.status(404).json({success: false}));
  });

module.exports = router;
