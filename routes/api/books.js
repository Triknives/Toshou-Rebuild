const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');


//Completed Book model
const Book = require('../../models/Book');

// @route   GET api/Books
// @desc    Get ALL books
// @access  Public
router.get('/',(req, res ) => {
  Book.find()
    .sort({date: -1})
    .then(books => res.json(books));
});

// @route   POST api/BooksRead
// @desc    Create A Completed Book
// @access  Public
router.post('/', (req, res) => {
  console.log(req.body)
  const newBook = new Book({
    title: req.body.title,
    writer: req.body.writer
  });
  newBook.save().then(book => res.json(book))
  .catch(err => res.status(404).json({success: false}));
  console.log("book added")
});

// @route   Delete api/completedBooks/:id
// @desc    Delete A Completed Book
// @access  Public
router.delete('/:id', (req, res) => {
    Book.findById(req.params.id)
      .then(book => book.remove().then(() => res.json({success: true})))
      .catch(err => res.status(404).json({success: false}));
  });

module.exports = router;
