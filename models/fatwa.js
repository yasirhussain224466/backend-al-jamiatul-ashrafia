const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema;

const fatwa = new Schema({
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
    age: {
        type: String,
        trim: true,
    },
    country: {
        type: String,
    },
    message: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("fatwa", fatwa);
