const User = require('../models/user.model');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


module.exports.Create = (req, res) => {
    console.log(req.body);
    User.create(req.body)
        .then(newUser => res.json(newUser))
        .catch(err => res.json(err));
};

module.exports.findAllUsers = (req,res) => {
    User.find()
        .then((allUsers) => res.json({users: allUsers}))
        .catch(err => res.json ({message: "Something went wrong!", error: err }));
};

module.exports.findOneUser = (req,res) => {
    User.findOne({_id: req.params.id })
        .then(oneSingleUser => res.json({user: oneSingleUser}))
        .catch(err =>res.json ({message: "Something went wrong!", error:err}));
};

module.exports.updateUsers = (req, res) => {
    User.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(updateUsers => res.json ({ user: updateUsers}))
    .catch(err => res.json({ message: "Something went wrong", error:err}));
};

module.exports.deleteUser = (req, res) => {
    console.log("User has been deleted", req.params.id)
    User.deleteOne({ _id: req.params.id })
        .then(result => res.json ({ result: result }))
        .catch(err => res.json ({ message: "Houston we have a problem", error:err }));
};

module.exports.Login = (req,res) => {
    console.log(req.body);
    User.findOne({ email: req.body.email })
        .then(user => {
            if(user === null){
                res.json({ msg: "invalid login attempt" });
            } else {
                bcrypt
                    .compare(req.body.password, user.password)
                    .then(passwordIsValid => {
                        if(passwordIsValid){
                            const newJWT = jwt.sign({
                                _id: user._id
                            })
                            const secret = "mysecret";
                            res
                                .cookie("usertoken", newJWT, secret, {
                                httpOnly: true
                                })
                                .json({msg: "success!"});
                        } else {
                            res.json({msg: "invalid login attempt"});
                        }
                    })
                    .catch(err => res.json({msg: "invalid login attempt", error: err}));
            }
        })
        .catch(err => res.json(err));
};