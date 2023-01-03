const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const book = new Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide a valid NAME!"],
            trim: true,
        },
        bookImage: String,
        book_image_url: String,
        book_image_id: String,
        publisher: {
            type: String,
            trim: true,
            required: true,
        },
        publication_date: {
            type: Date,
        },
        author: {
            type: String,
            required: true,
        },
        pages: {
            type: Number,
            required: true,
        },
        ISBN_No: {
            type: Number,
            trim: true,
        },
        drive_link: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("book", book);
