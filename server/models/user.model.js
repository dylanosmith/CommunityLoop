const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
        required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },

    password: {
        type: String,
        required: [true, "password is required"],
        minlength: [8, "Password must be at least 8 characters."]
    },

    phoneNumber: {
        type: Number,
        required: [true, "Phone is required"]
    },

    notifications: {
        type: String
    },

    image: {
        type: String,
    }
    // Add image url message to edit profile views page
}, {timestamps: true});

UserSchema.virtual('confirmpassword')
    .get( () => this._confirmPassword)
    .set( value => this._confirmPassword = value );



UserSchema.pre("save", function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

UserSchema.pre('validate', function(next) {
    if (this.password !== this._confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});



module.exports = mongoose.model("User", UserSchema);