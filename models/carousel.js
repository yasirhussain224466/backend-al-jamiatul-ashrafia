const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Carousel = new Schema({
    images: [
        {
            url: {
                type: String,
                required: true,
                trim: true,
            },
            id: {
                type: String,
                required: true,
                trim: true,
            },
        },
    ],
});

module.exports = mongoose.model("carousel", Carousel);
