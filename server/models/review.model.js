const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema ({

    reviewUserID: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},

    revieweeUserID: {type: mongoose.Schema.Types.ObjectId, ref: "User"},

    title: {
        type: String,
        required: [true]
    },
    comment: {
        type: String,
        required: [true]
    },
    rating: {
        type: Number,
        required: [true]
    },

    typeOfReviewer: {
        poster: {type: Boolean,
                 default: false},
        worker: {type: Boolean,
                 default: false},
    }

}, {timestamps:true});

module.exports = mongoose.model("Review", ReviewSchema);