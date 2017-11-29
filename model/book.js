const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publication: String,
    isbn: String,
    published_year: Number,
    total_page: Number,
    price: {
        type: Number,
        required: true
    }
});

let Book = mongoose.model('books', BookSchema);
module.exports = Book;