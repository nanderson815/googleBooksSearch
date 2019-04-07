const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BookSchema= new Schema({
    title: {
        type: String,
        trim: true
    },
    authors: {
        type: Array,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    image: {
        type: String
    },
    link: {
        type: String
    }
});

var Book = mongoose.model("Book", BookSchema);

module.exports = Book;