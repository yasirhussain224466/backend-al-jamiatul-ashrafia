const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please tell us your NAME!"],
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Please provide a valid EMAIL!"],
        trim: true,
        validate: [validator.isEmail, "Please Provide a valid email"],
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("user", userSchema);
