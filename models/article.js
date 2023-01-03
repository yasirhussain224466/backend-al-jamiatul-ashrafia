const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const article = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    drive_link: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("article", article);
