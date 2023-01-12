const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema;

const contact = new Schema({
    email: {
        type: String,
        required: [true, "Please provide a valid EMAIL!"],
        trim: true,
        validate: [validator.isEmail, "Please Provide a valid email"],
    },
    name: {
        type: String,
        required: [true, "Please provide a valid NAME!"],
        trim: true,
    },
    country: {
        type: String,
        trim: true,
        required: true,
    },
    message: {
        type: String,
        required: [true, "Please provide a valid message!"],
        trim: true,
    },
    contact: {
        type: Number,
        trim: true,
        required: true,
    },
    seen: {
        type: Boolean,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("contact", contact);
