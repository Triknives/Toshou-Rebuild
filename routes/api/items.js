const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
// Item model
const Item = require('../../models/Item');

// @route   GET api/Items
// @desc    Get ALL items
// @access  Public
router.get('/', (req, res) => {
  Item.find()
    .sort({date: -1})
    .then(items => res.json(items));
});

// @route   POST api/Items
// @desc    Create An Item
// @access  Public
router.post('/', (req, res) => {
  console.log(req.body)
  const newItem = new Item({
    name: req.body.name,
    author: req.body.author
  });
  newItem.save().then(item => res.json(item));
  console.log("item added")
});

// @route   Delete api/items/:id
// @desc    Delete A Item
// @access  Public
router.delete('/:id',(req, res) => {
    Item.findById(req.params.id)
      .then(item => item.remove().then(() => res.json({success: true})))
      .catch(err => res.status(404).json({success: false}));
  });

module.exports = router;
