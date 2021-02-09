const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Item = new Schema(
    {   
        isbn: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        publication_year: {
            type: Number,
            required: true
        },
        publisher: {
            type: String,
            required: true
        },
        image_url_s: {
            type: String
        },
        image_url_m: {
            type: String
        },
        image_url_l: {
            type: String
        },
        available: {
            type: Number,
            required: true
        },
        copies: {
            type: Number,
            required: true
        },
        
        
    },
    { timestamps: true },
);

module.exports = mongoose.model('books', Item);
