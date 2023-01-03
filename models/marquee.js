const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const marquee = new Schema({
    ticker: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("marquee", marquee);
