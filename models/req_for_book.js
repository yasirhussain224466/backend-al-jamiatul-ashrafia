const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema;

const bookRequest = new Schema({
    full_name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Please provide a valid EMAIL!"],
        trim: true,
        validate: [validator.isEmail, "Please Provide a valid email"],
    },
    father_name: {
        type: String,
        trim: true,
    },
    gender: {
        type: String,
        trim: true,
    },
    country: {
        required: true,
        type: String,
    },
    bookName: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("requestForBook", bookRequest);
