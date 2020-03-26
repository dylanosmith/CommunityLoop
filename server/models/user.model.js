const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema ({

    firstName: {
        type: String,
        required: [true, "First name is required"]
    },

    lastName: {
        type: String,
        required: [true, "Last name is required"]
    },

    email: {
        type: String,
        required: [true, "Email is required"]
    },

    phoneNumer: {
        type: Number,
        required: [true, "Phone is required"]
    },

}, {timestamps: true});

module.exports = mongoose.model("User", UserSchema);