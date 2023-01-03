const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema;

const mureed = new Schema({
    email: {
        type: String,
        required: [true, "Please provide a valid EMAIL!"],
        trim: true,
        validate: [validator.isEmail, "Please Provide a valid email"],
    },
    full_name: {
        type: String,
        required: [true, "Please provide a valid NAME!"],
        trim: true,
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
        trim: true,
    },
    gender: {
        type: String,
        required: true,
    },
    mureed_talib: {
        type: String,
        required: true,
    },
    sheikh: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: [true, "Please provide a valid message!"],
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("mureed", mureed);
