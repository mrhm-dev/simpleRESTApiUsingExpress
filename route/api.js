const express = require('express');
const router = express.Router();
const Book = require('../model/book');

// Get All Book From the Server
router.get('/books', (req, res) => {
    Book.find({}).then((books)=>{
        res.send(books);
    });
});

// Get A Single Book with Unique ID
router.get('/books/:id', (req, res) => {
    Book.findById({'_id': req.params.id}).then((book) => {
        res.send(book);
    });
});

// Create A Book And Store to Database
router.post('/books', (req, res) => {
    Book.create(req.body).then((book) => {
        res.send(book);
    });
});

// Update a Book with Unique ID
router.put('/books/:id', (req, res) => {
    Book.findByIdAndUpdate({'_id': req.params.id}, req.body).then(() => {
        Book.findById({'_id': req.params.id}).then((book) => {
            res.send(book);
        });
    });
});

// Delete a Book by Unique ID
router.delete('/books/:id', (req, res) => {
    Book.findByIdAndRemove({'_id': req.params.id}).then((book) => {
        res.send(book);
    });
});


module.exports = router;