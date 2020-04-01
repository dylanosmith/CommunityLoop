const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema ({

    title: {
        type: String,
        required: [true, "Task name is required"]
    },

    BidderID: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    
    PosterID: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},

    description: {
        type: String,
        required: [true, "Description is required"]
    },

    startDate: {
        type: Date,
        required: [true, "Start date required"]
    },

    completionDate: {
        type: Date,
        required: [true, "Completion date required"]
    },

    completed: {
        type: Boolean,
        default: false
    },

    typeOfTask: {
        
        bid: { type: Boolean, 
               default: false },
        barter: { type: Boolean, 
               default: false },
        free: { type: Boolean, 
               default: false }
    },

    location: {
        streetLine1: { type: String, required:true,},
        streetLine2: String,
        city: { type: String, required:true,},
        state: { type: String, required:true,},
        zipcode: { type: Number, required:true,},
        
    }

}, {timestamps:true})

module.exports = mongoose.model("Task", TaskSchema);